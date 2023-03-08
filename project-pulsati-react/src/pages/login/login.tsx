import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css';
import { SvgIcon } from '@mui/material';

export function Login() {
    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="box-login" sx={{ bgcolor: '#fff', height: "60vh", width: '30vw', display: 'flex', justifyContent: 'center', marginTop: '35px' }}>
                    <Avatar sx={{ width:24, height:24, bgcolor: 'purple' }}>
                        <LockOutlinedIcon></LockOutlinedIcon>
                    </Avatar >

                </Box>
            </Container>
        </div>
    )
}