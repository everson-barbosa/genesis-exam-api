import { AggregateRoot } from 'src/core/entities/aggregate-root';
import { UniqueEntityID } from '../../../../../core/entities/unique-entity-id';
import { Optional } from '../../../../../core/types/Optional';
import { ExamApplicationQuestionList } from './exam-application-question-list';
import { ExamApplicationParticipantList } from './exam-application-participant-list';

interface ExamApplicationProps {
  authorId: UniqueEntityID;
  examTemplateId: UniqueEntityID;
  questions: ExamApplicationQuestionList;
  participants: ExamApplicationParticipantList;
  startDate: Date | null;
  endDate: Date | null;
}

type CreateExamApplicationProps = Optional<
  ExamApplicationProps,
  'questions' | 'participants' | 'startDate' | 'endDate'
>;

export class ExamApplication extends AggregateRoot<ExamApplicationProps> {
  get authorId() {
    return this.props.authorId;
  }

  get examTemplateId() {
    return this.props.examTemplateId;
  }

  get startDate() {
    return this.props.startDate;
  }

  get endDate() {
    return this.props.endDate;
  }

  set questions(questions: ExamApplicationQuestionList) {
    this.props.questions = questions;
  }

  set participants(participants: ExamApplicationParticipantList) {
    this.props.participants = participants;
  }

  static create(props: CreateExamApplicationProps, id?: UniqueEntityID) {
    const examApplication = new ExamApplication(
      {
        ...props,
        startDate: props?.startDate ?? null,
        endDate: props?.endDate ?? null,
        questions: props?.questions ?? new ExamApplicationQuestionList([]),
        participants:
          props?.participants ?? new ExamApplicationParticipantList([]),
      },
      id ?? new UniqueEntityID(),
    );

    return examApplication;
  }
}
