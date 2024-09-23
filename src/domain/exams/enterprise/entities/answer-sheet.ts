import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface AnswerSheetProps {}

export class AnswerSheet extends Entity<AnswerSheetProps> {
  static create(props: AnswerSheetProps, id?: UniqueEntityID) {
    const examApplication = new AnswerSheet(
      {
        ...props,
      },
      id ?? new UniqueEntityID(),
    );

    return examApplication;
  }
}
