import { Entity } from '../../../../core/entities/entity';

const QuestionKind = {
  WRITTEN: 1,
  MULTIPLE_CHOICES: 2,
} as const;

type QuestionKindType = keyof typeof QuestionKind;

export interface QuestionProps {
  enunciation: string;
  kind: QuestionKindType;
}

export abstract class Question<Props> extends Entity<QuestionProps & Props> {}
