import { styled } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';
import Button, {ButtonProps}  from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[50]),
    backgroundColor: lightBlue[50],
    '&:hover': {
      backgroundColor: lightBlue[100],
    },
  }));


export function CustomizedBlueButtons() {
    return (
        <ColorButton variant="contained">Explorar Produtos</ColorButton>
    );
}