import { Injectable } from '@nestjs/common';
import { Either, right } from 'src/core/either';
import { WrittenQuestionsRepository } from '../repositories/written-questions-repository';
import { WrittenQuestion } from '../../enterprise/entities/written-question';

interface CreateExamQuestionUseCaseRequest {
  enunciation: string;
}

type CreateExamQuestionUseCaseResponse = Either<
  null,
  {
    writtenQuestion: WrittenQuestion;
  }
>;

@Injectable()
export class CreateExamQuestionUseCase {
  constructor(private writtenQuestionsRepository: WrittenQuestionsRepository) {}

  async execute({
    enunciation,
  }: CreateExamQuestionUseCaseRequest): Promise<CreateExamQuestionUseCaseResponse> {
    const writtenQuestion = WrittenQuestion.create({
      enunciation,
    });

    await this.writtenQuestionsRepository.create(writtenQuestion);

    return right({ writtenQuestion });
  }
}
