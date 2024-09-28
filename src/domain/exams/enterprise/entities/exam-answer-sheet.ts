import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface ExamAnswerSheetProps {}

export class ExamAnswerSheet extends Entity<ExamAnswerSheetProps> {
  static create(props: ExamAnswerSheetProps, id?: UniqueEntityID) {
    const examAnswerSheet = new ExamAnswerSheet(
      {
        ...props,
      },
      id ?? new UniqueEntityID(),
    );

    return examAnswerSheet;
  }
}
