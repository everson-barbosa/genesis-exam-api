import { Prisma } from '@prisma/client';
import { ExamApplicationQuestion } from 'src/domain/exams/enterprise/entities/exam-application/exam-application-question';

export class PrismaExamApplicationQuestionMapper {
  static toPrismaCreateMany(
    examApplicationQuestions: ExamApplicationQuestion[],
  ): Prisma.ExamApplicationQuestionCreateManyInput[] {
    return examApplicationQuestions.map((examApplicationQuestion) => ({
      examApplicationId: examApplicationQuestion.examApplicationId.toString(),
      questionId: examApplicationQuestion.questionId.toString(),
      position: examApplicationQuestion.position,
      scoreWeight: examApplicationQuestion.scoreWeight,
    }));
  }
}
