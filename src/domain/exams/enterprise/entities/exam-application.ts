import { AggregateRoot } from 'src/core/entities/aggregate-root';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Optional } from '../../../../core/types/Optional';

interface ExamApplicationProps {
  examTemplateId: UniqueEntityID;
  startDate: Date | null;
  endDate: Date | null;
}

type CreateExamApplicationProps = Optional<
  ExamApplicationProps,
  'startDate' | 'endDate'
>;

export class ExamApplication extends AggregateRoot<ExamApplicationProps> {
  get examTemplateId() {
    return this.props.examTemplateId;
  }

  static create(props: CreateExamApplicationProps, id?: UniqueEntityID) {
    const examApplication = new ExamApplication(
      {
        ...props,
        startDate: props?.startDate ?? null,
        endDate: props?.endDate ?? null,
      },
      id ?? new UniqueEntityID(),
    );

    return examApplication;
  }
}
