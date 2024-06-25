import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ParseTrnNatureCodesPipe implements PipeTransform {
  transform(value: string, _metadata: ArgumentMetadata): number[] {
    return value ? value.split(',').map(Number) : [];
  }
}
