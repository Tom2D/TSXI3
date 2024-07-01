import { FormatDateUTC } from '../util/date';
import { SERVER_AUTHORITY } from '@tsxinsider/shared';
import { transactions, trnnatures, trnflag } from '../prisma-types';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import { TitlesBitfield } from '@tsxinsider/shared';

export const fetchTransactions = async (
  pageIndex: number,
  pageSize: number,
  startDateRef: MutableRefObject<Dayjs | null>,
  endDateRef: MutableRefObject<Dayjs | null>,
  selectedTrnNaturesRef: MutableRefObject<trnnatures[]>,
  issuerName: MutableRefObject<string>,
  insiderName: MutableRefObject<string>,
  selectedTitles: MutableRefObject<TitlesBitfield[]>,
  tickerRef: MutableRefObject<string>,
  useTradeDateRef: MutableRefObject<boolean>,
  setTransactions: Dispatch<SetStateAction<transactions[]>>,
  setIssuers: Dispatch<SetStateAction<any[]>>,
  setTickers: Dispatch<SetStateAction<any[]>>,
  setInsiders: Dispatch<SetStateAction<any[]>>,
  setRelationsToIssuer: Dispatch<SetStateAction<any[]>>,
  setSecurityDesignations: Dispatch<SetStateAction<any[]>>,
  setRowCount: Dispatch<SetStateAction<number>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsRefetching: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
) => {
  setIsRefetching(true);

  try {
    const startDateStr = FormatDateUTC(startDateRef.current);
    const endDateStr = FormatDateUTC(endDateRef.current);
    const trnNatureCodes = selectedTrnNaturesRef.current.map((option) => option.code).join(',');
    const titlesBitfield = selectedTitles.current.reduce((acc, cur) => acc | cur, 0);

    const url =
      `${SERVER_AUTHORITY}/transactions?` +
      `beginFilingDate=${startDateStr}&` +
      `endFilingDate=${endDateStr}&` +
      `limit=${pageSize}&` +
      `page=${pageIndex}&` +
      `trnNatureCodes=${trnNatureCodes}&` +
      `issuerName=${issuerName.current}&` +
      `insiderName=${insiderName.current}&` +
      `insiderTitles=${titlesBitfield}&` +
      `ticker=${tickerRef.current}&` +
      `useTradeDate=${useTradeDateRef.current ? 1 : 0}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTransactions(data.transactions);
      setIssuers(data.issuers);
      setTickers(data.tickers);
      setInsiders(data.insiders);
      setRelationsToIssuer(data.relationsToIssuer);
      setSecurityDesignations(data.securityDesignations);
      setRowCount(data.total); // Set the total row count
    } else {
      console.error('Invalid fetch transactions response:', response);
      setIsRefetching(false);
      setIsError(true);
      return false;
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
    setIsRefetching(false);
    setIsError(true);
    return false;
  }
  setIsLoading(false);
  setIsRefetching(false);
  setIsError(false);
  return true;
};

export const fetchTrnNatures = async (
  setTrnNatures: Dispatch<SetStateAction<trnnatures[]>>,
  setSelectedTrnNatures: Dispatch<SetStateAction<trnnatures[]>>,
  selectedTrnNaturesRef: MutableRefObject<trnnatures[]>,
  DEFAULT_TRN_NATURE: number,
  setIsError: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const response = await fetch(`${SERVER_AUTHORITY}/trn-natures`);
    if (response.ok) {
      const trnNatures = await response.json();
      setTrnNatures(trnNatures);
      const defaultTrnNature = trnNatures.filter((option: trnnatures) => option.code === DEFAULT_TRN_NATURE);
      setSelectedTrnNatures(defaultTrnNature);
      selectedTrnNaturesRef.current = defaultTrnNature; // So fetchTransactions considers it
    } else {
      console.error('Invalid fetch transactions natures response:', response);
      return false;
    }
  } catch (error) {
    setIsError(true);
    console.error('Error fetching transaction natures:', error);
    return false;
  }
  return true;
};

export const fetchTrnFlags = async (
  setTrnFlags: Dispatch<SetStateAction<trnflag[]>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const response = await fetch(`${SERVER_AUTHORITY}/trn-flags`);
    if (response.ok) {
      setTrnFlags(await response.json());
    } else {
      console.error('Invalid fetch transactions flags response:', response);
      return false;
    }
  } catch (error) {
    setIsError(true);
    console.error('Error fetching transaction flags:', error);
    return false;
  }
  return true;
};
