import { Body, Controller, Get } from '@nestjs/common';
import { FetchExamTemplatesDTO } from '../dtos/fetch-exam-templates.dto';
import { FetchRecentExamTemplatesUseCase } from 'src/domain/exams/application/use-cases/fetch-recent-exam-templates';
import { ExamTemplatePresenter } from '../presenters/http-exam-template-presenter';

@Controller('/exam-template')
export class FetchRecentExamTemplatesController {
  constructor(
    private fetchRecentExamTemplatesUseCase: FetchRecentExamTemplatesUseCase,
  ) {}

  @Get()
  async findMany(@Body() body: FetchExamTemplatesDTO) {
    const { page, perPage } = body;

    const response = await this.fetchRecentExamTemplatesUseCase.execute({
      page,
      perPage,
    });

    const { examTemplates } = response.value;

    return examTemplates.map(ExamTemplatePresenter.toHTTP);
  }
}
