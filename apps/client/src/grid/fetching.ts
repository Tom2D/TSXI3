// ./grid/fetching.ts
import { FormatDateUTC } from '../util/date';
import { SERVER_AUTHORITY } from '@tsxinsider/shared';
import { transactions, trnnatures, trnflag } from '../prisma-types';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

export const fetchTransactions = async (
  pageIndex: number,
  pageSize: number,
  startDateRef: MutableRefObject<Dayjs | null>,
  endDateRef: MutableRefObject<Dayjs | null>,
  selectedTrnNaturesRef: MutableRefObject<trnnatures[]>,
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
  hasData: MutableRefObject<boolean>,
) => {
  if (!hasData.current) {
    setIsLoading(true);
  } else {
    setIsRefetching(true);
  }

  try {
    const startDateStr = FormatDateUTC(startDateRef.current);
    const endDateStr = FormatDateUTC(endDateRef.current);
    const trnNatureCodes = selectedTrnNaturesRef.current
      .map((option) => option.code)
      .join(',');
    const response = await fetch(
      `${SERVER_AUTHORITY}/transactions?beginFilingDate=${startDateStr}&endFilingDate=${endDateStr}&limit=${pageSize}&page=${pageIndex}&trnNatureCodes=${trnNatureCodes}`,
    );

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
      console.error('Failed to fetch transactions');
      setIsError(true);
      return;
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
    setIsError(true);
    return;
  }
  setIsLoading(false);
  setIsRefetching(false);
  setIsError(false);
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
      const defaultTrnNature = trnNatures.filter(
        (option: trnnatures) => option.code === DEFAULT_TRN_NATURE,
      );
      setSelectedTrnNatures(defaultTrnNature);
      selectedTrnNaturesRef.current = defaultTrnNature; // So fetchTransactions considers it
    } else {
      console.error('Failed to fetch transaction natures');
    }
  } catch (error) {
    setIsError(true);
    console.error('Error fetching transaction natures:', error);
  }
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
      console.error('Failed to fetch transaction flags');
    }
  } catch (error) {
    setIsError(true);
    console.error('Error fetching transaction flags:', error);
  }
};
