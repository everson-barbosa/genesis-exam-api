import { Injectable } from '@nestjs/common';
import { QuestionsRepository } from 'src/domain/exams/application/repositories/questions-repository';
import { Question } from 'src/domain/exams/enterprise/entities/question/question';
import { PrismaService } from '../prisma.service';
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question);

    await this.prismaService.question.create({
      data,
    });
  }
}
