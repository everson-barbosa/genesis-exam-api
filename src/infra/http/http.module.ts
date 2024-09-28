import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateExamTemplateController } from './controllers/create-exam-template.controller';
import { CreateExamTemplateUseCase } from 'src/domain/exams/application/use-cases/create-exam-template';
import { CreateWrittenQuestionUseCase } from 'src/domain/exams/application/use-cases/create-written-question';
import { CreateWrittenQuestionController } from './controllers/create-written-question.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateExamTemplateController, CreateWrittenQuestionController],
  providers: [CreateExamTemplateUseCase, CreateWrittenQuestionUseCase],
})
export class HttpModule {}
