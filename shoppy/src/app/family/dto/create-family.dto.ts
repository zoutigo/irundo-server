import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateFamilyDto {
  @IsNotEmpty({
    message: 'le nom de la famille est obligatoire',
  })
  @MinLength(4, {
    message: 'le nom de la famille doit avoir 4 caractères au moins',
  })
  @MaxLength(30, {
    message: 'le nom de la famille doit avoir 30 caractères au plus',
  })
  name: string;

  //

  @IsNotEmpty({
    message: 'la description de la famille est obligatoire',
  })
  @MinLength(4, {
    message: 'la description de la famille doit avoir 4 caractères au moins',
  })
  @MaxLength(500, {
    message: 'la description de la famille doit avoir 500 caractères au plus',
  })
  description: string;
}
