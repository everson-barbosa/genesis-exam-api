import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateExamTemplateController } from './controllers/create-exam-template.controller';
import { CreateExamTemplateUseCase } from 'src/domain/exams/application/use-cases/create-exam-template';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateExamTemplateController],
  providers: [CreateExamTemplateUseCase],
})
export class HttpModule {}
