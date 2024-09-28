import { Question as PrismaWrittenQuestion } from '@prisma/client';
import { WrittenQuestion } from 'src/domain/exams/enterprise/entities/written-question';

export class PrismaWrittenQuestionMapper {
  static toPrisma(raw: WrittenQuestion): PrismaWrittenQuestion {
    return {
      id: raw.id.toString(),
      enunciation: raw.enunciation,
    };
  }
}
