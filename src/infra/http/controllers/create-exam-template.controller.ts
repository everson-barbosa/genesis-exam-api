import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateExamTemplateUseCase } from 'src/domain/exams/application/use-cases/create-exam-template';
import { CreateExamTemplateDTO } from '../dtos/create-exam-template-dto';

@Controller('/exam-template')
export class CreateExamTemplateController {
  constructor(private createExamTemplate: CreateExamTemplateUseCase) {}

  @Post()
  async create(@Body() body: CreateExamTemplateDTO) {
    const { title, description, questionsIds } = body;
    const authorId = '1';

    const response = await this.createExamTemplate.execute({
      authorId,
      title,
      description,
      questionsIds,
    });

    if (response.isLeft()) {
      throw new BadRequestException();
    }
  }
}
