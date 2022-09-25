import { IsBoolean, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty({
    message: 'le nom de la boutique est obligatoire',
  })
  @MinLength(5, {
    message: 'Le nom doit avoir 5 caractères minimum',
  })
  @MaxLength(50, {
    message: 'Le nom doit avoir 30 caractères maximum',
  })
  name: string;

  @IsNotEmpty({
    message: 'la description de la boutique est obligatoire',
  })
  @MinLength(10, {
    message: 'La description de la boutique doit avoir 10 caractères minimum',
  })
  @MaxLength(100, {
    message: 'La descritption de la boutique doit avoir 100 caractères maximum',
  })
  description: string;

  @IsBoolean({
    message: `le statut de comptage est un booléen`,
  })
  isOnCount: boolean;

  @IsBoolean({
    message: `le statut de pause est un booléen`,
  })
  isPaused: boolean;
}
