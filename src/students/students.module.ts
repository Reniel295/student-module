import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity'; 

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
