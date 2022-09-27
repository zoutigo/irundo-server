import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdatePcategoryDto {
  @IsOptional()
  @IsNotEmpty({
    message: 'le nom de la categorie est obligatoire',
  })
  @MinLength(4, {
    message: 'le nom de la categorie doit avoir 4 caractères au moins',
  })
  @MaxLength(30, {
    message: 'le nom de la categorie doit avoir 30 caractères au plus',
  })
  name: string;

  //
  @IsOptional()
  @IsNotEmpty({
    message: 'la description de la categorie est obligatoire',
  })
  @MinLength(4, {
    message: 'la description de la categorie doit avoir 4 caractères au moins',
  })
  @MaxLength(30, {
    message: 'la description de la categorie doit avoir 500 caractères au plus',
  })
  description: string;
}
