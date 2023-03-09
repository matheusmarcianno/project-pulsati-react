import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system'
import './home.css'
import { purple } from '@mui/material/colors';
import Button, {ButtonProps}  from '@mui/material/Button';
import { CustomizedBlueButtons } from '../components/header/buttons/blue-button';
import { CustomizedButtons } from '../components/header/buttons/purple-button';


export function Home() {
    return (
        <body className="home-body">
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="div-principal-phrase">
                        <Typography variant="h1" component="h1">
                                Encontre o melhor centro de cuidados para o seu pet
                        </Typography>
                    </div>


                    <div className="div-slogan-phrase">
                        <Typography variant="h5" component="h5">
                            Combinando nossa dedicação e amor pelos animais com um atendimento excepcional
                        </Typography>
                    </div>

                    <div className="div-buttons">
                        <CustomizedBlueButtons />
                        <CustomizedButtons />
                    </div>

                    <div className="div-footer-phrase">
                        <Typography variant="h1" component="h1">
                            Nossos serviços:
                        </Typography>
                    </div>

                    <div className="div-footer-slogan-phrase">
                        <Typography variant="h5" component="h5">
                        Oferecemos serviços de banho e passeio para pets, realizados por profissionais treinados, ideais para donos ocupados que desejam manter seus animais de estimação limpos, saudáveis e felizes. Agende uma consulta e deixe-nos ajudá-lo a cuidar do seu pet da melhor maneira possível.
                        </Typography>
                    </div>
                </Box> 
            </Container>
        </body>
    )
}