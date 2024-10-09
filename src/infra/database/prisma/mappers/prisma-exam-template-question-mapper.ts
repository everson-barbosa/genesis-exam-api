import { Prisma } from '@prisma/client';
import { ExamTemplateQuestion } from 'src/domain/exams/enterprise/entities/exam-template/exam-template-question';

export class PrismaExamTemplateQuestionMapper {
  static toPrismaCreateMany(
    examTemplateQuestions: ExamTemplateQuestion[],
  ): Prisma.ExamTemplateQuestionCreateManyInput[] {
    return examTemplateQuestions.map((examTemplateQuestion) => ({
      examTemplateId: examTemplateQuestion.examTemplateId.toString(),
      questionId: examTemplateQuestion.questionId.toString(),
      position: examTemplateQuestion.position,
      scoreWeight: examTemplateQuestion.scoreWeight,
    }));
  }
}
