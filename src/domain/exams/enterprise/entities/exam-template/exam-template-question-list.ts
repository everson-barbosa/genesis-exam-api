import { WatchedList } from '../../../../../core/entities/watched-list';
import { ExamTemplateQuestion } from './exam-template-question';

export class ExamTemplateQuestionList extends WatchedList<ExamTemplateQuestion> {
  compareItems(
    previous: ExamTemplateQuestion,
    current: ExamTemplateQuestion,
  ): boolean {
    return previous.id.equals(current.id);
  }
}
