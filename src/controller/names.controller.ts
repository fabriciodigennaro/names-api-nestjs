import { Controller, Get } from '@nestjs/common';
import { NamesService } from '../service/names.service';

@Controller()
export class NamesController {
  constructor(private readonly namesService: NamesService) {}

  @Get('/names')
  getNames(): string {
    return this.namesService.getNames();
  }
}
