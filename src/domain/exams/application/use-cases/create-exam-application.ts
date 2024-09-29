import { Injectable } from '@nestjs/common';
import { Either, left, right } from '../../../../core/either';
import { ExamApplication } from '../../enterprise/entities/exam-application';
import { ExamApplicationsRepository } from '../repositories/exam-applications-repository';
import { ExamTemplatesRepository } from '../repositories/exam-templates-repository';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';
import { ExamApplicationQuestionList } from '../../enterprise/entities/exam-application-question-list';
import { ExamApplicationQuestion } from '../../enterprise/entities/exam-application-question';

interface CreateExamApplicationUseCaseRequest {
  examTemplateId: string;
  questions: Array<{
    id: string;
    position: number;
    scoreWeight: number;
  }>;
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
    questions,
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

    const examApplicationQuestions = questions.map((question) => {
      return ExamApplicationQuestion.create({
        examApplicationId: examApplication.id,
        questionId: new UniqueEntityID(question.id),
        position: question.position,
        scoreWeight: question.scoreWeight,
      });
    });

    examApplication.questions = new ExamApplicationQuestionList(
      examApplicationQuestions,
    );

    await this.examApplicationsRepository.create(examApplication);

    return right({ examApplication });
  }
}
