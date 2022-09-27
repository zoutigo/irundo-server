import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: `le nom du produit est obligatoire`,
  })
  @MinLength(5, {
    message: 'Le nom doit avoir 5 caractères minimum',
  })
  @MaxLength(50, {
    message: 'Le nom doit avoir 30 caractères maximum',
  })
  name: string;

  @IsNotEmpty({
    message: `la description du produit est obligatoire`,
  })
  description: string;
  //
  @IsNotEmpty({
    message: `le prix du produit est obligatoire`,
  })
  price: number;
  //

  @IsEnum(['u', 'kg', 'l', 'm', 'm3'])
  unit: string;
  //

  @IsOptional()
  @Max(1000000, {
    message: `la longueur ne peut etre supérieure à 1000000`,
  })
  length: number;
  //
  @IsOptional()
  @Max(1000000, {
    message: `la hauteur ne peut etre supérieure à 1000000`,
  })
  heigth: number;
  //
  @IsOptional()
  @Max(1000000, {
    message: `la largeur ne peut etre supérieure à 1000000`,
  })
  width: number;
  //
  @IsOptional()
  @Max(1000000, {
    message: `le rayon ne peut etre supérieure à 1000000`,
  })
  radius: number;
  //
  @IsOptional()
  @IsBoolean({
    message: 'le statut inventaire est un booleen',
  })
  isOnCount: boolean;
  //
  @IsOptional()
  images: string[];
}
