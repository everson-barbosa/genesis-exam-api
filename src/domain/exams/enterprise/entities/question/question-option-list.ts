import { WatchedList } from 'src/core/entities/watched-list';
import { QuestionOption } from './question-option';

export class QuestionOptionList extends WatchedList<QuestionOption> {
  compareItems(previous: QuestionOption, current: QuestionOption): boolean {
    return previous.id.equals(current.id);
  }
}
