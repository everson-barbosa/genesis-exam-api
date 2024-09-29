import { Question } from '../../enterprise/entities/question';

export abstract class QuestionsRepository {
  abstract create(question: Question): Promise<void>;
}
