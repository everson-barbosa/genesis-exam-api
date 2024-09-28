import { WrittenQuestionsRepository } from 'src/domain/exams/application/repositories/written-questions-repository';
import { WrittenQuestion } from 'src/domain/exams/enterprise/entities/written-question';
import { PrismaService } from '../prisma.service';
import { PrismaWrittenQuestionMapper } from '../mappers/prisma-written-question-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaWrittenQuestionsRepository
  implements WrittenQuestionsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(writtenQuestion: WrittenQuestion) {
    const data = PrismaWrittenQuestionMapper.toPrisma(writtenQuestion);

    await this.prismaService.question.create({
      data,
    });
  }
}
