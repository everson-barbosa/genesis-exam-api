import { ExamApplication as PrismaExamApplication } from '@prisma/client';
import { ExamApplication } from 'src/domain/exams/enterprise/entities/exam-application';

export class PrismaExamApplicationMapper {
  static toPrisma(raw: ExamApplication): PrismaExamApplication {
    return {
      id: raw.id.toString(),
      examTemplateId: raw.examTemplateId.toString(),
    };
  }
}
