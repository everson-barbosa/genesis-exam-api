import { Injectable } from '@nestjs/common';
import { Either, right } from '../../../../core/either';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { ExamTemplate } from '../../enterprise/entities/exam-template';
import { ExamTemplateQuestion } from '../../enterprise/entities/exam-template-question';
import { ExamTemplateQuestionList } from '../../enterprise/entities/exam-template-question-list';
import { ExamTemplatesRepository } from '../repositories/exam-templates-repository';

interface CreateExamTemplateUseCaseRequest {
  title: string;
  description: string;
  authorId: string;
  questions: Array<{
    id: string;
    position: number;
    scoreWeight: number;
  }>;
}

type CreateExamTemplateUseCaseResponse = Either<
  null,
  {
    examTemplate: ExamTemplate;
  }
>;

@Injectable()
export class CreateExamTemplateUseCase {
  constructor(private examTemplatesRepository: ExamTemplatesRepository) {}

  async execute({
    title,
    description,
    authorId,
    questions,
  }: CreateExamTemplateUseCaseRequest): Promise<CreateExamTemplateUseCaseResponse> {
    const examTemplate = ExamTemplate.create({
      title,
      description,
      authorId: new UniqueEntityID(authorId),
    });

    const examTemplateQuestions = questions.map((question) => {
      return ExamTemplateQuestion.create({
        examTemplateId: examTemplate.id,
        questionId: new UniqueEntityID(question.id),
        position: question.position,
        scoreWeight: question.scoreWeight,
      });
    });

    examTemplate.questions = new ExamTemplateQuestionList(
      examTemplateQuestions,
    );

    await this.examTemplatesRepository.create(examTemplate);

    return right({ examTemplate });
  }
}
