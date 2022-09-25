import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateShopDto {
  @IsOptional()
  @MinLength(5, {
    message: 'Le nom doit avoir 5 caractères minimum',
  })
  @MaxLength(50, {
    message: 'Le nom doit avoir 30 caractères maximum',
  })
  name!: string;

  @IsOptional()
  @IsNotEmpty({
    message: 'la description de la boutique est obligatoire',
  })
  @MinLength(10, {
    message: 'La description de la boutique doit avoir 10 caractères minimum',
  })
  @MaxLength(100, {
    message: 'La descritption de la boutique doit avoir 100 caractères maximum',
  })
  description!: string;

  @IsOptional()
  @IsBoolean({
    message: `le statut de comptage est un booléen`,
  })
  isOnCount!: boolean;

  @IsOptional()
  @IsBoolean({
    message: `le statut de pause est un booléen`,
  })
  isPaused!: boolean;
}
