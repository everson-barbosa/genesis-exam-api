import { WatchedList } from 'src/core/entities/watched-list';
import { ExamApplicationParticipant } from './exam-application-participant';

export class ExamApplicationParticipantList extends WatchedList<ExamApplicationParticipant> {
  compareItems(
    previous: ExamApplicationParticipant,
    current: ExamApplicationParticipant,
  ): boolean {
    return previous.id.equals(current.id);
  }
}
