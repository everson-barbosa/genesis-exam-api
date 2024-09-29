import { ExamTemplate } from '../../enterprise/entities/exam-template/exam-template';
import { PaginationParams } from '../../../../core/repositories/Pagination';

export abstract class ExamTemplatesRepository {
  abstract create(examTemplate: ExamTemplate): Promise<void>;
  abstract findById(id: string): Promise<ExamTemplate | null>;
  abstract findManyRecent(
    pagination: PaginationParams,
  ): Promise<ExamTemplate[]>;
}
