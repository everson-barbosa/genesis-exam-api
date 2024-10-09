import { ExamTemplate } from 'src/domain/exams/enterprise/entities/exam-template/exam-template';
import { Prisma } from '@prisma/client';
import { UniqueEntityID } from 'src/core/entities/unique-entity-id';

export class PrismaExamTemplateMapper {
  static toPrisma(raw: ExamTemplate): Prisma.ExamTemplateUncheckedCreateInput {
    return {
      id: raw.id.toString(),
      title: raw.title,
      description: raw.description,
      createdAt: raw.createdAt,
    };
  }

  static toDomain(
    raw: Prisma.ExamTemplateGetPayload<{
      include: {
        examTemplateQuestions: true;
      };
    }>,
  ): ExamTemplate {
    return ExamTemplate.create(
      {
        title: raw.title,
        description: raw.description,
        authorId: new UniqueEntityID(raw.userId),
        createdAt: new Date(),
      },
      new UniqueEntityID(raw.id),
    );
  }
}
