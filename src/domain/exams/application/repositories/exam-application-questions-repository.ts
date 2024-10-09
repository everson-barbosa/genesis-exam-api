import { ExamApplicationQuestion } from '../../enterprise/entities/exam-application/exam-application-question';

export abstract class ExamApplicationQuestionsRepository {
  abstract createMany(
    examApplicationQuestions: ExamApplicationQuestion[],
  ): Promise<void>;
  abstract deleteMany(
    examApplicationQuestions: ExamApplicationQuestion[],
  ): Promise<void>;
}
