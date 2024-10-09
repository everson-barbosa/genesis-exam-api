import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExamApplicationQuestionsRepository } from 'src/domain/exams/application/repositories/exam-application-questions-repository';
import { ExamApplicationQuestion } from 'src/domain/exams/enterprise/entities/exam-application/exam-application-question';
import { PrismaExamApplicationQuestionMapper } from '../mappers/prisma-exam-application-question-mapper';

@Injectable()
export class PrismaExamApplicationQuestionsRepository
  implements ExamApplicationQuestionsRepository
{
  constructor(private prismaService: PrismaService) {}

  async createMany(examApplicationQuestions: ExamApplicationQuestion[]) {
    if (examApplicationQuestions.length === 0) {
      return;
    }

    const data = PrismaExamApplicationQuestionMapper.toPrismaCreateMany(
      examApplicationQuestions,
    );

    await this.prismaService.examApplicationQuestion.createMany({
      data,
    });
  }

  async deleteMany(examApplicationQuestions: ExamApplicationQuestion[]) {
    if (examApplicationQuestions.length === 0) {
      return;
    }

    const examApplicationQuestionIds = examApplicationQuestions.map(
      (examApplicationQuestion) => examApplicationQuestion.id.toString(),
    );

    await this.prismaService.examApplicationQuestion.deleteMany({
      where: {
        id: {
          in: examApplicationQuestionIds,
        },
      },
    });
  }
}
