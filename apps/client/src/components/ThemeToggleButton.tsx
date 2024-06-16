import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

interface Props {
  onToggle: () => void;
}

const ThemeToggleButton: React.FC<Props> = ({ onToggle }) => {
  const theme = useTheme();

  return (
    <IconButton sx={{ ml: 1 }} onClick={onToggle} color="inherit">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
