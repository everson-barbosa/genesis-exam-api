import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ExamTemplatesRepository } from 'src/domain/exams/application/repositories/exam-templates-repository';
import { PrismaExamTemplatesRepository } from './prisma/repositories/prisma-exam-templates-repository';
import { PrismaExamApplicationsRepository } from './prisma/repositories/prisma-exam-applications-repository';
import { ExamApplicationsRepository } from 'src/domain/exams/application/repositories/exam-applications-repository';
import { QuestionsRepository } from 'src/domain/exams/application/repositories/questions-repository';
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ExamTemplatesRepository,
      useClass: PrismaExamTemplatesRepository,
    },
    {
      provide: ExamApplicationsRepository,
      useClass: PrismaExamApplicationsRepository,
    },
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
  ],
  exports: [
    ExamTemplatesRepository,
    ExamApplicationsRepository,
    QuestionsRepository,
  ],
})
export class DatabaseModule {}
