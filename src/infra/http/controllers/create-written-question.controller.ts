import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateWrittenQuestionDTO } from '../dtos/create-written-question-dto';
import { CreateWrittenQuestionUseCase } from 'src/domain/exams/application/use-cases/create-written-question';

@Controller('/written-question')
export class CreateWrittenQuestionController {
  constructor(
    private createWrittenQuestionUseCase: CreateWrittenQuestionUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateWrittenQuestionDTO) {
    const { enunciation } = body;

    const response = await this.createWrittenQuestionUseCase.execute({
      enunciation,
    });

    if (response.isLeft()) {
      throw new BadRequestException();
    }
  }
}
