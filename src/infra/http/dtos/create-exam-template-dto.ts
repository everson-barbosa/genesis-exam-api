import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateExamTemplateDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsArray()
  questionsIds: string[];
}
