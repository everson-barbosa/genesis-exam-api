import { AggregateRoot } from '../../../../core/entities/aggregate-root';
import { Optional } from '../../../../core/types/Optional';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { ExamTemplateQuestionList } from './exam-template-question-list';

interface ExamTemplateProps {
  title: string;
  description: string;
  authorId: UniqueEntityID;
  questions: ExamTemplateQuestionList;
  createdAt: Date;
}

type CreateExamTemplateProps = Optional<
  ExamTemplateProps,
  'questions' | 'createdAt'
>;

export class ExamTemplate extends AggregateRoot<ExamTemplateProps> {
  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get authorId() {
    return this.props.authorId;
  }

  get questions() {
    return this.props.questions;
  }

  set questions(questions: ExamTemplateQuestionList) {
    this.props.questions = questions;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: CreateExamTemplateProps, id?: UniqueEntityID) {
    const examTemplate = new ExamTemplate(
      {
        ...props,
        questions: props?.questions ?? new ExamTemplateQuestionList([]),
        createdAt: props?.createdAt ?? new Date(),
      },
      id ?? new UniqueEntityID(),
    );

    return examTemplate;
  }
}
