import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { DATE_FORMAT } from '../util/date.ts';
import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface DatePickersProps {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: (date: Dayjs | null) => void;
  setEndDate: (date: Dayjs | null) => void;
}

export const DatePickers: FC<DatePickersProps> = ({ startDate, endDate, setStartDate, setEndDate }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Start Date"
      value={startDate}
      onChange={(newDate) => setStartDate(newDate)}
      slotProps={{ field: { clearable: true } }}
      format={DATE_FORMAT}
    />
    <DatePicker
      label="End Date"
      value={endDate}
      onChange={(newDate) => setEndDate(newDate)}
      slotProps={{ field: { clearable: true } }}
      format={DATE_FORMAT}
    />
  </LocalizationProvider>
);

interface DateFilterProps {
  useTradeDate: number;
  handleUseTradeDateChange: any;
}

export const DateFilter: FC<DateFilterProps> = ({ useTradeDate, handleUseTradeDateChange }) => (
  <FormControl>
    <InputLabel id="date-filter-label">Date Filter</InputLabel>
    <Select
      labelId="date-filter-label"
      value={useTradeDate}
      onChange={handleUseTradeDateChange}
      label="Date Filter"
      style={{ textAlign: 'left' }}
    >
      <MenuItem value={0}>Filing Date</MenuItem>
      <MenuItem value={1}>Trade Date</MenuItem>
    </Select>
  </FormControl>
);
