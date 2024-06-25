import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { convertToEnumArray, relationsToIssuerFromInt } from '@tsxinsider/shared';
import { relationstoissuer_type } from '@prisma/client';

@Injectable()
export class ParseInsiderTitlesPipe implements PipeTransform {
  transform(value: string, _metadata: ArgumentMetadata): relationstoissuer_type[] {
    return convertToEnumArray(relationsToIssuerFromInt, value);
  }
}
