import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateVideoDto {
    @ApiProperty()
    id:          number;

    @ApiProperty()
    @IsString()
    titulo:      string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    
    @ApiProperty()
    @IsUrl()
    url:         string;
    
    @ApiProperty()
    imagen:      string;

    //@IsEmail()
}
