import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateFamilyDto {
  @IsOptional()
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
  @IsOptional()
  @IsNotEmpty({
    message: 'la description de la famille est obligatoire',
  })
  @MinLength(4, {
    message: 'la description de la famille doit avoir 4 caractères au moins',
  })
  @MaxLength(30, {
    message: 'la description de la famille doit avoir 500 caractères au plus',
  })
  description: string;
}
