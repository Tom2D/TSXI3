import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface Props {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setStartDate: (date: Dayjs | null) => void;
  setEndDate: (date: Dayjs | null) => void;
}

const DatePickers: React.FC<Props> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={(newDate) => setStartDate(newDate)}
        slotProps={{ field: { clearable: true } }}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={(newDate) => setEndDate(newDate)}
        slotProps={{ field: { clearable: true } }}
      />
    </div>
  </LocalizationProvider>
);

export default DatePickers;
