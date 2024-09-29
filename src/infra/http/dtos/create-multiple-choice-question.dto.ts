import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class Option {
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateQuestionMultipleChoiceDTO {
  @IsNotEmpty()
  @IsString()
  enunciation: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Option)
  options: Option[];
}
