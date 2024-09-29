import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateWrittenQuestionUseCase } from 'src/domain/exams/application/use-cases/create-written-question';
import { CreateQuestionWrittenDTO } from '../dtos/create-written-question.dto';

@Controller('/questions/written')
export class CreateWrittenQuestionController {
  constructor(
    private createWrittenQuestionUseCase: CreateWrittenQuestionUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateQuestionWrittenDTO) {
    const { enunciation } = body;

    const response = await this.createWrittenQuestionUseCase.execute({
      enunciation,
    });

    if (response.isLeft()) {
      throw new BadRequestException();
    }
  }
}
