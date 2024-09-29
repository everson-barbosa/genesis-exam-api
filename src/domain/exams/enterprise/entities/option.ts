import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface OptionProps {
  text: string;
  isCorrect: boolean;
}

export class Option extends Entity<OptionProps> {
  static create(props: OptionProps, id?: UniqueEntityID) {
    const option = new Option(
      {
        ...props,
      },
      id ?? new UniqueEntityID(),
    );

    return option;
  }
}
