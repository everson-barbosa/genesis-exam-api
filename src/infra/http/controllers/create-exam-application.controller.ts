import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateExamApplicationUseCase } from 'src/domain/exams/application/use-cases/create-exam-application';
import { CreateExamApplicationDTO } from '../dtos/create-exam-application.dto';

@Controller('/exam-application')
export class CreateExamApplicationController {
  constructor(private createExamApplication: CreateExamApplicationUseCase) {}

  @Post()
  async create(@Body() body: CreateExamApplicationDTO) {
    const { questions, examTemplateId, participants, startDate, endDate } =
      body;
    const authorId = '1';

    const response = await this.createExamApplication.execute({
      authorId,
      examTemplateId,
      participants,
      questions,
      startDate,
      endDate,
    });

    if (response.isLeft()) {
      throw new BadRequestException();
    }
  }
}
