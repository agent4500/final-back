import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
export declare class UsersService {
    private user;
    private jwt;
    constructor(user: any, jwt: JwtService);
    create(createUserDto: CreateUserDto): string;
    Log(user: any, res: Response): Promise<{
        message: string;
    }>;
    Reg(user: any): Promise<{
        message: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
