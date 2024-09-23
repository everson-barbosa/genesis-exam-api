import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Question, QuestionProps } from './question';

export interface Option {
  text: string;
  isCorrect: boolean;
}

interface WrittenQuestionProps {}

type CreateWrittenQuestionProps = Omit<QuestionProps, 'kind'> &
  WrittenQuestionProps;

export class WrittenQuestion extends Question<WrittenQuestionProps> {
  static create(
    props: CreateWrittenQuestionProps,
    id?: UniqueEntityID,
  ): WrittenQuestion {
    const writtenQuestion = new WrittenQuestion(
      {
        enunciation: props.enunciation,
        kind: 'WRITTEN',
      },
      id ?? new UniqueEntityID(),
    );

    return writtenQuestion;
  }
}
