import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface ExamApplicationQuestionProps {
  examApplicationId: UniqueEntityID;
  questionId: UniqueEntityID;
  position: number;
  scoreWeight: number;
}

export class ExamApplicationQuestion extends Entity<ExamApplicationQuestionProps> {
  get examApplicationId() {
    return this.props.examApplicationId;
  }

  get questionId() {
    return this.props.questionId;
  }

  get position() {
    return this.props.position;
  }

  get scoreWeight() {
    return this.props.scoreWeight;
  }

  static create(props: ExamApplicationQuestionProps, id?: UniqueEntityID) {
    const examApplicationQuestion = new ExamApplicationQuestion(
      {
        ...props,
      },
      id ?? new UniqueEntityID(),
    );

    return examApplicationQuestion;
  }
}
