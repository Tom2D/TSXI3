// columnsGet.ts
import { MRT_ColumnDef } from 'material-react-table';
import {
  transactions,
  trnnatures,
  issuers,
  insiders,
  tickers,
  relationstoissuer,
  trnflag,
  securitydesignations,
} from '../prisma-types';
import { initialColumns } from './columns-def.tsx';

export const columnsGet = (
  issuers: issuers[],
  tickers: tickers[],
  insiders: insiders[],
  relationsToIssuer: relationstoissuer[],
  securityDesignations: securitydesignations[],
  trnFlags: trnflag[],
  trnNatures: trnnatures[],
): MRT_ColumnDef<transactions>[] => {
  const getName = (id: number, objs: any[]): string => {
    const obj = objs.find((obj) => obj.id === id);
    return obj ? obj.name : '';
  };

  const getTrnNatureDescription = (code: number): string => {
    const trnNature = trnNatures.find((trnNature) => trnNature.code === code);
    return trnNature ? trnNature.description : '';
  };

  const getTickerName = (issuerId: number): string => {
    const issuer = issuers.find((issuer) => issuer.id === issuerId);
    return getName(issuer?.tickerId, tickers);
  };

  const getTitles = (insiderId: number): string => {
    const relations = relationsToIssuer.filter((relation) => relation.insiderId === insiderId);
    return relations.map((relation) => relation.type).join(', ');
  };

  return initialColumns.map((column) => {
    let accessorFn: ((row: transactions) => string) | undefined;
    switch (column.accessorKey) {
      case 'trnFlagId':
        accessorFn = (row) => getName(row.trnFlagId, trnFlags);
        break;

      case 'ticker':
        accessorFn = (row) => getTickerName(row.issuerId);
        break;

      case 'issuer':
        accessorFn = (row) => getName(row.issuerId, issuers);
        break;

      case 'insider':
        accessorFn = (row) => getName(row.insiderId, insiders);
        break;

      case 'titles':
        accessorFn = (row) => getTitles(row.insiderId);
        break;

      case 'securityId':
        accessorFn = (row) => getName(row.securityId, securityDesignations);
        break;

      case 'trnDate':
      case 'filingDate':
        accessorFn = (row) => new Date(row[column.accessorKey]).toLocaleDateString();
        break;

      case 'trnNatureCode':
        accessorFn = (row) => getTrnNatureDescription(row.trnNatureCode);
        break;

      default:
        accessorFn = undefined;
        break;
    }
    return accessorFn ? { ...column, accessorFn } : column;
  });
};
