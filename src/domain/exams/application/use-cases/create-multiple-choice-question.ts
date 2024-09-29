import { Either, left, right } from 'src/core/either';
import { QuestionsRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question/question';
import { QuestionOptionList } from '../../enterprise/entities/question/question-option-list';
import { QuestionOption } from '../../enterprise/entities/question/question-option';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { NotEnoughOptionsError } from './errors/not-enough-options-error';
import { Injectable } from '@nestjs/common';

interface CreateMultipleChoiceQuestionUseCaseRequest {
  enunciation: string;
  options: Array<{ id: string }>;
}

type CreateMultipleChoiceQuestionUseCaseResponse = Either<
  NotEnoughOptionsError,
  {
    question: Question;
  }
>;

const MINIMUM_OPTION_LENGTH = 2;

@Injectable()
export class CreateMultipleChoiceQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    enunciation,
    options,
  }: CreateMultipleChoiceQuestionUseCaseRequest): Promise<CreateMultipleChoiceQuestionUseCaseResponse> {
    if (options.length < MINIMUM_OPTION_LENGTH) {
      return left(new NotEnoughOptionsError());
    }

    const question = Question.create({
      enunciation,
      kind: 'MULTIPLE_CHOICE',
    });

    const questionOptions = options.map((option) => {
      return QuestionOption.create({
        optionId: new UniqueEntityID(option.id),
      });
    });

    question.options = new QuestionOptionList(questionOptions);

    await this.questionsRepository.create(question);

    return right({ question });
  }
}
