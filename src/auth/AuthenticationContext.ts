// Create claims using this class
import React from 'react'
import { claim } from './auth.models';

const AuthenticationContext = React.createContext<{
    //AddHoc Data type 
    claims: claim[];
    update(claims: claim[]): void
}>({claims: [], update: () => {}});

export default AuthenticationContext;