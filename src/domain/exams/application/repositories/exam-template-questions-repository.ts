import { ExamTemplateQuestion } from '../../enterprise/entities/exam-template/exam-template-question';

export abstract class ExamTemplateQuestionsRepository {
  abstract createMany(
    examTemplateQuestions: ExamTemplateQuestion[],
  ): Promise<void>;
  abstract deleteMany(
    examTemplateQuestions: ExamTemplateQuestion[],
  ): Promise<void>;
}
