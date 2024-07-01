import { PipeTransform, Injectable, ArgumentMetadata, ParseIntPipe } from '@nestjs/common';
import { TitlesBitfield } from '@tsxinsider/shared';

@Injectable()
export class ParseInsiderTitlesPipe implements PipeTransform {
  private readonly intPipe = new ParseIntPipe();

  async transform(value: string, metadata: ArgumentMetadata): Promise<TitlesBitfield> {
    const intValue = await this.intPipe.transform(value, metadata);

    const allFlagsValue = Object.values(TitlesBitfield)
      .filter((v) => typeof v === 'number')
      .reduce((acc, curr) => acc | (curr as number), 0);

    if ((intValue & allFlagsValue) !== intValue) {
      throw new Error(`Invalid value for TitlesBitfield: ${intValue}`);
    }

    return intValue as TitlesBitfield;
  }
}
