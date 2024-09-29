import { Question } from '../../enterprise/entities/question/question';

export abstract class QuestionsRepository {
  abstract create(question: Question): Promise<void>;
}
