import { Either, right } from 'src/core/either';
import { QuestionsRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question/question';
import { Injectable } from '@nestjs/common';

interface CreateWrittenQuestionUseCaseRequest {
  enunciation: string;
}

type CreateWrittenQuestionUseCaseResponse = Either<
  null,
  {
    question: Question;
  }
>;

@Injectable()
export class CreateWrittenQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute(
    props: CreateWrittenQuestionUseCaseRequest,
  ): Promise<CreateWrittenQuestionUseCaseResponse> {
    const question = Question.create({
      ...props,
      kind: 'WRITTEN',
    });

    await this.questionsRepository.create(question);

    return right({ question });
  }
}
