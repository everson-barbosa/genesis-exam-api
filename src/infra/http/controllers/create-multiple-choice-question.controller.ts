import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionMultipleChoiceDTO } from '../dtos/create-multiple-choice-question.dto';
import { CreateMultipleChoiceQuestionUseCase } from 'src/domain/exams/application/use-cases/create-multiple-choice-question';

@Controller('/questions/written')
export class CreateMultipleChoiceQuestionController {
  constructor(
    private createMultipleChoiceQuestionUseCase: CreateMultipleChoiceQuestionUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateQuestionMultipleChoiceDTO) {
    const { enunciation, options } = body;

    const response = await this.createMultipleChoiceQuestionUseCase.execute({
      enunciation,
      options,
    });

    if (response.isLeft()) {
      throw new BadRequestException();
    }
  }
}
