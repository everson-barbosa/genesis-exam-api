import { Injectable } from '@nestjs/common';
import { ExamApplication } from '../../enterprise/entities/exam-application/exam-application';

@Injectable()
export abstract class ExamApplicationsRepository {
  abstract create(examApplication: ExamApplication): Promise<void>;
}
