import { WatchedList } from '../../../../core/entities/watched-list';
import { ExamApplicationQuestion } from './exam-application-question';

export class ExamApplicationQuestionList extends WatchedList<ExamApplicationQuestion> {
  compareItems(
    previous: ExamApplicationQuestion,
    current: ExamApplicationQuestion,
  ): boolean {
    return previous.id.equals(current.id);
  }
}
