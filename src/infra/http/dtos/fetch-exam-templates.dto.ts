import { IsNumber, IsPositive } from 'class-validator';

export class FetchExamTemplatesDTO {
  @IsNumber()
  @IsPositive()
  page: number;

  @IsNumber()
  @IsPositive()
  perPage: number;
}
