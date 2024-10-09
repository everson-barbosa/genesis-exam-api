import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

class Participant {
  @IsNotEmpty()
  @IsString()
  id: string;
}

class Question {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  position: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  scoreWeight: number;
}

export class CreateExamApplicationDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Question)
  questions: Question[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Participant)
  participants: Participant[];

  @IsNotEmpty()
  @IsString()
  examTemplateId: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
