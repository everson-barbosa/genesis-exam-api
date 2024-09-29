import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

interface ExamTemplateQuestionProps {
  examTemplateId: UniqueEntityID;
  questionId: UniqueEntityID;
  position: number;
  scoreWeight: number;
}

export class ExamTemplateQuestion extends Entity<ExamTemplateQuestionProps> {
  static create(props: ExamTemplateQuestionProps, id?: UniqueEntityID) {
    const examTemplateQuestion = new ExamTemplateQuestion(
      { ...props },
      id ?? new UniqueEntityID(),
    );

    return examTemplateQuestion;
  }
}
