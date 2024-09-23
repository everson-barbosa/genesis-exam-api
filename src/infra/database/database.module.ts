import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ExamTemplatesRepository } from 'src/domain/exams/application/repositories/exam-templates-repository';
import { PrismaExamTemplatesRepository } from './prisma/repositories/prisma-exam-templates-repository';
import { ExamApplication } from 'src/domain/exams/enterprise/entities/exam-application';
import { PrismaExamApplicationsRepository } from './prisma/repositories/prisma-exam-applications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ExamTemplatesRepository,
      useClass: PrismaExamTemplatesRepository,
    },
    {
      provide: ExamApplication,
      useClass: PrismaExamApplicationsRepository,
    },
  ],
  exports: [ExamTemplatesRepository, ExamApplication],
})
export class DatabaseModule {}
