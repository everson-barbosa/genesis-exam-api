import { Injectable } from '@nestjs/common';
import { Either, right } from 'src/core/either';
import { MultipleChoiceQuestionsRepository } from '../repositories/multiple-choice-questions-repository';
import {
  MultipleChoiceQuestion,
  Option,
} from '../../enterprise/entities/multiple-choice-question';

interface CreateExamQuestionUseCaseRequest {
  enunciation: string;
  options: Option[];
}

type CreateExamQuestionUseCaseResponse = Either<
  null,
  {
    multipleChoiceQuestion: MultipleChoiceQuestion;
  }
>;

@Injectable()
export class CreateExamQuestionUseCase {
  constructor(
    private multipleChoiceQuestionsRepository: MultipleChoiceQuestionsRepository,
  ) {}

  async execute({
    enunciation,
    options,
  }: CreateExamQuestionUseCaseRequest): Promise<CreateExamQuestionUseCaseResponse> {
    const multipleChoiceQuestion = MultipleChoiceQuestion.create({
      enunciation,
      options,
    });

    await this.multipleChoiceQuestionsRepository.create(multipleChoiceQuestion);

    return right({ multipleChoiceQuestion });
  }
}
