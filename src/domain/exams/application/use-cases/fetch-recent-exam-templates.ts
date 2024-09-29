import { Injectable } from '@nestjs/common';
import { ExamTemplatesRepository } from '../repositories/exam-templates-repository';
import { Either, right } from 'src/core/either';
import { ExamTemplate } from '../../enterprise/entities/exam-template/exam-template';

interface FetchRecentExamTemplatesUseCaseRequest {
  page: number;
  perPage: number;
}

type FetchRecentExamTemplatesUseCaseResponse = Either<
  null,
  {
    examTemplates: ExamTemplate[];
  }
>;

@Injectable()
export class FetchRecentExamTemplatesUseCase {
  constructor(private examTemplatesRepository: ExamTemplatesRepository) {}

  async execute({
    page,
    perPage,
  }: FetchRecentExamTemplatesUseCaseRequest): Promise<FetchRecentExamTemplatesUseCaseResponse> {
    const examTemplates = await this.examTemplatesRepository.findManyRecent({
      page,
      perPage,
    });

    return right({ examTemplates });
  }
}
