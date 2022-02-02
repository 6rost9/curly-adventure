import { useState } from 'react';
import axios from 'axios';
import { 
    CssBaseline,
    Box,
    Paper,
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    IconButton,
    Button
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useLocation } from "react-router-dom";
import { AUTH_TOKEN } from '../../common/constants';

function Login() {
    const [values, setValues] = useState({
        login: '',
        password: '',
        showPassword: false,
    });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit');
        axios.post('http://165.227.140.158:1337/auth/local/',{
            identifier: values.login,
            password: values.password
        })
        .then(resp => {
            const { jwt } = resp.data;
            localStorage.setItem(AUTH_TOKEN, jwt);
            navigate(from, { replace: true });
        })
    }

    return (
        <>
            <CssBaseline />
            <Box 
                fixed 
                sx={{
                    bgcolor: grey[100],
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: '300px',
                        bgcolor: grey[50],
                        p: 3,
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            sx={{
                                mb: 2
                            }}
                        >
                            <InputLabel htmlFor="login">Login</InputLabel>
                            <OutlinedInput
                                id="login"
                                type="text"
                                value={values.login}
                                onChange={handleChange('login')}
                                label="Login"
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            sx={{
                                mb: 2
                            }}
                        >
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button
                            variant="outlined"
                            size="large"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Box>
        </>
    );
}

export default Login;
