import { Either, right } from 'src/core/either';
import { QuestionsRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question';
import { QuestionOptionList } from '../../enterprise/entities/question-option-list';
import { QuestionOption } from '../../enterprise/entities/question-option';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

interface CreateMultipleChoiceQuestionRequest {
  enunciation: string;
  options: Array<{ id: string }>;
}

type CreateMultipleChoiceQuestionResponse = Either<
  null,
  {
    question: Question;
  }
>;

export class CreateMultipleChoiceQuestion {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    enunciation,
    options,
  }: CreateMultipleChoiceQuestionRequest): Promise<CreateMultipleChoiceQuestionResponse> {
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
