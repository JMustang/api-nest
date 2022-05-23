import { BookDto } from './book.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {
    // empty
  }

  @Post()
  async create(@Body() data: BookDto) {
    return this.bookService.create(data);
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDto) {
    return this.bookService.update(id, data);
  }
}
