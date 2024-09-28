import { Injectable } from '@nestjs/common';
import { Either, right } from 'src/core/either';
import { WrittenQuestionsRepository } from '../repositories/written-questions-repository';
import { WrittenQuestion } from '../../enterprise/entities/written-question';

interface CreateWrittenQuestionUseCaseRequest {
  enunciation: string;
}

type CreateWrittenQuestionUseCaseResponse = Either<
  null,
  {
    writtenQuestion: WrittenQuestion;
  }
>;

@Injectable()
export class CreateWrittenQuestionUseCase {
  constructor(private writtenQuestionsRepository: WrittenQuestionsRepository) {}

  async execute({
    enunciation,
  }: CreateWrittenQuestionUseCaseRequest): Promise<CreateWrittenQuestionUseCaseResponse> {
    const writtenQuestion = WrittenQuestion.create({
      enunciation,
    });

    await this.writtenQuestionsRepository.create(writtenQuestion);

    return right({ writtenQuestion });
  }
}
