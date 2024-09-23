import { Injectable } from '@nestjs/common';
import { WrittenQuestion } from '../../enterprise/entities/written-question';

@Injectable()
export abstract class WrittenQuestionsRepository {
  abstract create(writtenQuestion: WrittenQuestion): Promise<void>;
}
