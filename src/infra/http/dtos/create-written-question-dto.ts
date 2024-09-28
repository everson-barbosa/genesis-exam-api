import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWrittenQuestionDTO {
  @IsNotEmpty()
  @IsString()
  enunciation: string;
}
