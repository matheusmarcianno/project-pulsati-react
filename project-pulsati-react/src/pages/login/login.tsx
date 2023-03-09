import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';


export function Login() {
    return (
        <body className="login-body">
            <div className='div-login'>
                <Container sx={{ display: 'flex', justifyContent: 'center', padding:0}}>
                    <Box sx={{ bgcolor: '#FFF', height: "60vh", width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems:'center', marginTop: '60px', flexDirection: 'column' }}>
                        <Avatar sx={{ width:64, height:64, bgcolor: 'purple', marginBottom: '15px'}}>
                            <LockOutlinedIcon sx={{width:32, height:32 }}></LockOutlinedIcon>
                        </Avatar >

                        <Typography sx={{ fontSize:'24px', marginBottom:'35px'}} variant="h5" component="h2">
                            Login
                        </Typography>

                        <div className="div-form">
                            <form action="" className="form-login">
                                <TextField sx={{ width:"65%" }} size="medium" label="Email" variant="outlined" />
                                <TextField type="password" sx={{ width:"65%" }} size="medium" label="Senha" variant="outlined" />

                                <FormControlLabel  sx={{paddingRight:'185px'}} control={<Checkbox defaultChecked />} label="Salvar informações" />

                                <Button size="large" sx={{ width:"65%", height:'47.38px' }} variant="contained">Entrar</Button>
                            </form>
                        </div>
                    </Box>
                </Container>
            </div>
        </body>
        
    )
}