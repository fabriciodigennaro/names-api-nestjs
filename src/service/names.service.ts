import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {
  getNames(): string {
    return 'nombresss';
  }
}
