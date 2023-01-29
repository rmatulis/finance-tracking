// /src/components/LoginButton.tsx

import React, { FC } from 'react';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton: FC = () => {
    const { loginWithRedirect } = useAuth0();
    return <Button startIcon={<LockIcon />} color="inherit" onClick={() => loginWithRedirect()}><strong>Login</strong></Button>;
}

export default LoginButton;