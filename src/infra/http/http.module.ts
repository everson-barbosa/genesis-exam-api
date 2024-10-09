import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateExamTemplateController } from './controllers/create-exam-template.controller';
import { CreateExamTemplateUseCase } from 'src/domain/exams/application/use-cases/create-exam-template';
import { CreateWrittenQuestionUseCase } from 'src/domain/exams/application/use-cases/create-written-question';
import { CreateMultipleChoiceQuestionUseCase } from 'src/domain/exams/application/use-cases/create-multiple-choice-question';
import { CreateWrittenQuestionController } from './controllers/create-written-question.controller';
import { CreateMultipleChoiceQuestionController } from './controllers/create-multiple-choice-question.controller';
import { FetchRecentExamTemplatesController } from './controllers/fetch-recent-exam-templates.controller';
import { FetchRecentExamTemplatesUseCase } from 'src/domain/exams/application/use-cases/fetch-recent-exam-templates';
import { CreateExamApplicationController } from './controllers/create-exam-application.controller';
import { CreateExamApplicationUseCase } from 'src/domain/exams/application/use-cases/create-exam-application';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateExamApplicationController,
    CreateExamTemplateController,
    CreateWrittenQuestionController,
    CreateMultipleChoiceQuestionController,
    FetchRecentExamTemplatesController,
  ],
  providers: [
    CreateExamApplicationUseCase,
    CreateExamTemplateUseCase,
    CreateWrittenQuestionUseCase,
    CreateMultipleChoiceQuestionUseCase,
    FetchRecentExamTemplatesUseCase,
  ],
})
export class HttpModule {}
