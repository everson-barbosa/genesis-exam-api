import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { QuestionOptionList } from './question-option-list';
import { Optional } from 'src/core/types/Optional';

const QUESTION_KIND = {
  WRITTEN: 1,
  MULTIPLE_CHOICE: 2,
} as const;

type QuestionKindType = keyof typeof QUESTION_KIND;

interface QuestionProps {
  enunciation: string;
  options: QuestionOptionList;
  kind: QuestionKindType;
}

type CreateQuestionProps = Optional<QuestionProps, 'options'>;

export class Question extends Entity<QuestionProps> {
  get enunciation() {
    return this.enunciation;
  }

  set options(options: QuestionOptionList) {
    this.options = options;
  }

  static create(props: CreateQuestionProps, id?: UniqueEntityID) {
    const question = new Question(
      {
        ...props,
        options: props.options ?? new QuestionOptionList([]),
      },
      id ?? new UniqueEntityID(),
    );

    return question;
  }
}
