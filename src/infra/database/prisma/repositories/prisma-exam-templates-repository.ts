import { Injectable } from '@nestjs/common';
import { ExamTemplatesRepository } from 'src/domain/exams/application/repositories/exam-templates-repository';
import { ExamTemplate } from 'src/domain/exams/enterprise/entities/exam-template/exam-template';
import { PrismaService } from '../prisma.service';
import { PrismaExamTemplateMapper } from '../mappers/prisma-exam-template-mapper';
import { PaginationParams } from 'src/core/repositories/Pagination';
import { ExamTemplateQuestionsRepository } from 'src/domain/exams/application/repositories/exam-template-questions-repository';

@Injectable()
export class PrismaExamTemplatesRepository implements ExamTemplatesRepository {
  constructor(
    private prismaService: PrismaService,
    private examTemplateQuestionsRepository: ExamTemplateQuestionsRepository,
  ) {}

  async create(examTemplate: ExamTemplate) {
    const data = PrismaExamTemplateMapper.toPrisma(examTemplate);

    await this.prismaService.examTemplate.create({
      data,
      include: {
        examTemplateQuestions: true,
      },
    });

    await this.examTemplateQuestionsRepository.createMany(
      examTemplate.questions.getItems(),
    );
  }

  async save(examTemplate: ExamTemplate) {
    const data = PrismaExamTemplateMapper.toPrisma(examTemplate);

    await Promise.all([
      this.prismaService.examTemplate.update({
        where: {
          id: examTemplate.id.toString(),
        },
        data,
      }),
      this.examTemplateQuestionsRepository.createMany(
        examTemplate.questions.getNewItems(),
      ),
      this.examTemplateQuestionsRepository.deleteMany(
        examTemplate.questions.getRemovedItems(),
      ),
    ]);
  }

  async findById(id: string): Promise<ExamTemplate | null> {
    const examTemplate = await this.prismaService.examTemplate.findUnique({
      where: {
        id,
      },
      include: {
        examTemplateQuestions: true,
      },
    });

    if (!examTemplate) {
      return null;
    }

    return PrismaExamTemplateMapper.toDomain(examTemplate);
  }

  async findManyRecent(pagination: PaginationParams): Promise<ExamTemplate[]> {
    const { page, perPage } = pagination;

    const response = await this.prismaService.examTemplate.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * perPage,
      take: perPage,
    });

    return response.map(PrismaExamTemplateMapper.toDomain);
  }
}
