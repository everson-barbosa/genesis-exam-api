import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Question, QuestionProps } from './question';

interface WrittenQuestionProps {}

type CreateWrittenQuestionProps = Omit<QuestionProps, 'kind'> &
  WrittenQuestionProps;

export class WrittenQuestion extends Question<WrittenQuestionProps> {
  get enunciation() {
    return this.props.enunciation;
  }

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
