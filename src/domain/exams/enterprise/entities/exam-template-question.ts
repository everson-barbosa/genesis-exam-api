import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

interface ExamTemplateQuestionProps {
  examTemplateId: UniqueEntityID;
  questionId: UniqueEntityID;
}

export class ExamTemplateQuestion extends Entity<ExamTemplateQuestionProps> {
  static create(props: ExamTemplateQuestionProps, id?: UniqueEntityID) {
    const question = new ExamTemplateQuestion(
      { ...props },
      id ?? new UniqueEntityID(),
    );

    return question;
  }
}
