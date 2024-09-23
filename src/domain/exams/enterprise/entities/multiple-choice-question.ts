import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Question, QuestionProps } from './question';
import { Optional } from 'src/core/types/Optional';

export interface Option {
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceQuestionProps {
  options: Option[];
}

type CreateMultipleChoiceQuestionProps = Optional<QuestionProps, 'kind'> &
  MultipleChoiceQuestionProps;

export class MultipleChoiceQuestion extends Question<MultipleChoiceQuestionProps> {
  static create(
    props: CreateMultipleChoiceQuestionProps,
    id?: UniqueEntityID,
  ): MultipleChoiceQuestion {
    const multipleChoiceQuestion = new MultipleChoiceQuestion(
      {
        enunciation: props.enunciation,
        kind: 'MULTIPLE_CHOICES',
        options: props.options,
      },
      id ?? new UniqueEntityID(),
    );

    return multipleChoiceQuestion;
  }
}
