import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Optional } from 'src/core/types/Optional';

interface ExamApplicationQuestionProps {
  examApplicationId: UniqueEntityID;
  questionId: UniqueEntityID;
  position: number;
  scoreWeight: number;
  startAt: Date | null;
  endAt: Date | null;
  canceledAt: Date | null;
}

type CreateExamApplicationQuestionProps = Optional<
  ExamApplicationQuestionProps,
  'startAt' | 'endAt' | 'canceledAt'
>;

export class ExamApplicationQuestion extends Entity<ExamApplicationQuestionProps> {
  static create(
    props: CreateExamApplicationQuestionProps,
    id?: UniqueEntityID,
  ) {
    const examApplicationQuestion = new ExamApplicationQuestion(
      {
        ...props,
        startAt: props.startAt ?? null,
        endAt: props.endAt ?? null,
        canceledAt: props.canceledAt ?? null,
      },
      id ?? new UniqueEntityID(),
    );

    return examApplicationQuestion;
  }
}
