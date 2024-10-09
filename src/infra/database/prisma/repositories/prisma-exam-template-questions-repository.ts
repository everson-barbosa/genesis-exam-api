import { Injectable } from '@nestjs/common';
import { ExamTemplateQuestionsRepository } from 'src/domain/exams/application/repositories/exam-template-questions-repository';
import { ExamTemplateQuestion } from 'src/domain/exams/enterprise/entities/exam-template/exam-template-question';
import { PrismaService } from '../prisma.service';
import { PrismaExamTemplateQuestionMapper } from '../mappers/prisma-exam-template-question-mapper';

@Injectable()
export class PrismaExamTemplateQuestionsRepository
  implements ExamTemplateQuestionsRepository
{
  constructor(private prismaService: PrismaService) {}

  async createMany(examTemplateQuestions: ExamTemplateQuestion[]) {
    if (examTemplateQuestions.length === 0) {
      return;
    }

    const data = PrismaExamTemplateQuestionMapper.toPrismaCreateMany(
      examTemplateQuestions,
    );

    await this.prismaService.examTemplateQuestion.createMany({
      data,
    });
  }

  async deleteMany(examTemplateQuestions: ExamTemplateQuestion[]) {
    if (examTemplateQuestions.length === 0) {
      return;
    }

    const examTemplateQuestionIds = examTemplateQuestions.map(
      (examTemplateQuestion) => examTemplateQuestion.id.toString(),
    );

    await this.prismaService.examTemplateQuestion.deleteMany({
      where: {
        id: {
          in: examTemplateQuestionIds,
        },
      },
    });
  }
}
