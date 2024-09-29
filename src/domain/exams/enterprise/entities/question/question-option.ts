import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface QuestionOptionProps {
  optionId: UniqueEntityID;
}

export class QuestionOption extends Entity<QuestionOptionProps> {
  static create(props: QuestionOptionProps, id?: UniqueEntityID) {
    const questionOption = new QuestionOption(
      {
        ...props,
      },
      id ?? new UniqueEntityID(),
    );

    return questionOption;
  }
}
