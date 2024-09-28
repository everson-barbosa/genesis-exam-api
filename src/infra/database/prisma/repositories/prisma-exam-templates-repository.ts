import { Injectable } from '@nestjs/common';
import { ExamTemplatesRepository } from 'src/domain/exams/application/repositories/exam-templates-repository';
import { ExamTemplate } from 'src/domain/exams/enterprise/entities/exam-template';
import { PrismaService } from '../prisma.service';
import { PrismaExamTemplateMapper } from '../mappers/prisma-exam-template-mapper';

@Injectable()
export class PrismaExamTemplatesRepository implements ExamTemplatesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(examTemplate: ExamTemplate) {
    const data = PrismaExamTemplateMapper.toPrisma(examTemplate);

    await this.prismaService.examTemplate.create({
      data,
    });
  }

  async findById(id: string): Promise<ExamTemplate | null> {
    const examTemplate = await this.prismaService.examTemplate.findUnique({
      where: {
        id,
      },
    });

    if (!examTemplate) {
      return null;
    }

    return PrismaExamTemplateMapper.toDomain(examTemplate);
  }
}
