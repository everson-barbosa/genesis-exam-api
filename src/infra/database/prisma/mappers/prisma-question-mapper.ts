import { Question as PrismaQuestion } from '@prisma/client';
import { Question } from 'src/domain/exams/enterprise/entities/question/question';

export class PrismaQuestionMapper {
  static toPrisma(raw: Question): PrismaQuestion {
    return {
      id: raw.id.toString(),
      enunciation: raw.enunciation,
    };
  }
}
