import { Injectable } from '@nestjs/common';
import { Either, left, right } from '../../../../core/either';
import { ExamApplication } from '../../enterprise/entities/exam-application';
import { ExamApplicationsRepository } from '../repositories/exam-applications-repository';
import { ExamTemplatesRepository } from '../repositories/exam-templates-repository';

interface CreateExamApplicationUseCaseRequest {
  examTemplateId: string;
  startDate: null | Date;
  endDate: null | Date;
}

type CreateExamApplicationUseCaseResponse = Either<
  Error,
  {
    examApplication: ExamApplication;
  }
>;

@Injectable()
export class CreateExamApplicationUseCase {
  constructor(
    private examApplicationsRepository: ExamApplicationsRepository,
    private examTemplatesRepository: ExamTemplatesRepository,
  ) {}

  async execute({
    examTemplateId,
    startDate,
    endDate,
  }: CreateExamApplicationUseCaseRequest): Promise<CreateExamApplicationUseCaseResponse> {
    const examTemplate =
      await this.examTemplatesRepository.findById(examTemplateId);

    if (!examTemplate) {
      return left(new Error('Exam Template not found'));
    }

    const examApplication = ExamApplication.create({
      examTemplateId: examTemplate.id,
      startDate,
      endDate,
    });

    await this.examApplicationsRepository.create(examApplication);

    return right({ examApplication });
  }
}
