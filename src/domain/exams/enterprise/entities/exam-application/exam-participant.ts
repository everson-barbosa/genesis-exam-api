import { Entity } from 'src/core/entities/entity';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { Optional } from 'src/core/types/Optional';

interface ExamParticipantProps {
  name: string;
  groupId: UniqueEntityID | null;
}

type CreateExamParticipantProps = Optional<ExamParticipantProps, 'groupId'>;

export class ExamParticipant extends Entity<ExamParticipantProps> {
  static create(props: CreateExamParticipantProps, id?: UniqueEntityID) {
    const examParticipant = new ExamParticipant(
      {
        ...props,
        groupId: props.groupId ?? null,
      },
      id ?? new UniqueEntityID(),
    );

    return examParticipant;
  }
}
