import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePcategoryDto {
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

  @IsNotEmpty({
    message: 'la description de la categorie est obligatoire',
  })
  @MinLength(4, {
    message: 'la description de la categorie doit avoir 4 caractères au moins',
  })
  @MaxLength(500, {
    message: 'la description de la categorie doit avoir 500 caractères au plus',
  })
  description: string;
}
