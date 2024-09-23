import { Injectable } from '@nestjs/common';
import { MultipleChoiceQuestion } from '../../enterprise/entities/multiple-choice-question';

@Injectable()
export abstract class MultipleChoiceQuestionsRepository {
  abstract create(
    multipleChoiceQuestion: MultipleChoiceQuestion,
  ): Promise<void>;
}
