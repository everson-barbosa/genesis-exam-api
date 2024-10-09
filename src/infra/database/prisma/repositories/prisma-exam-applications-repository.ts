import { ExamApplicationsRepository } from 'src/domain/exams/application/repositories/exam-applications-repository';
import { ExamApplication } from 'src/domain/exams/enterprise/entities/exam-application/exam-application';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaExamApplicationMapper } from '../mappers/prisma-exam-application-mapper';
import { ExamApplicationQuestionsRepository } from 'src/domain/exams/application/repositories/exam-application-questions-repository';

@Injectable()
export class PrismaExamApplicationsRepository
  implements ExamApplicationsRepository
{
  constructor(
    private prismaService: PrismaService,
    private examApplicationQuestionsRepository: ExamApplicationQuestionsRepository,
  ) {}

  async create(examApplication: ExamApplication) {
    const data = PrismaExamApplicationMapper.toPrisma(examApplication);

    await this.prismaService.examApplication.create({
      data,
    });

    await this.examApplicationQuestionsRepository.createMany(
      examApplication.questions.getItems(),
    );
  }
}
