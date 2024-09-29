import { Either, right } from 'src/core/either';
import { QuestionsRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question';

interface CreateWrittenQuestionRequest {
  enunciation: string;
}

type CreateWrittenQuestionResponse = Either<
  null,
  {
    question: Question;
  }
>;

export class CreateWrittenQuestion {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute(
    props: CreateWrittenQuestionRequest,
  ): Promise<CreateWrittenQuestionResponse> {
    const question = Question.create({
      ...props,
      kind: 'WRITTEN',
    });

    await this.questionsRepository.create(question);

    return right({ question });
  }
}
