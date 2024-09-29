import { ExamTemplate } from 'src/domain/exams/enterprise/entities/exam-template/exam-template';

export class ExamTemplatePresenter {
  static toHTTP(examTemplate: ExamTemplate) {
    return {
      title: examTemplate.title,
      description: examTemplate.description,
      questions: examTemplate.questions.getItems().map((question) => ({
        position: question.position,
        scoreWeight: question.scoreWeight,
      })),
      authorId: examTemplate.authorId.toValue(),
      createdAt: examTemplate.createdAt,
    };
  }
}
