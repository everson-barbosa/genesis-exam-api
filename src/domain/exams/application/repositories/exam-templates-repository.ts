import { ExamTemplate } from '../../enterprise/entities/exam-template';

export abstract class ExamTemplatesRepository {
  abstract create(examTemplate: ExamTemplate): Promise<void>;
  abstract findById(id: string): Promise<ExamTemplate | null>;
}
