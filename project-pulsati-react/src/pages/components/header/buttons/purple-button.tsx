import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button, {ButtonProps}  from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[50]),
    backgroundColor: purple[50],
    '&:hover': {
      backgroundColor: purple[100],
    },
  }));


export function CustomizedButtons() {
    return (
        <ColorButton variant="contained">Consulta online</ColorButton>
    );
}