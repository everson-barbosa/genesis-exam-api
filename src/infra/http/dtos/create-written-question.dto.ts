import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionWrittenDTO {
  @IsNotEmpty()
  @IsString()
  enunciation: string;
}
