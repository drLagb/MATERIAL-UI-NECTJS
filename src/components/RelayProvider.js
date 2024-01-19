"use client"
import { initRelayEnvironment } from '@/RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';

export default function Relay({children}){
    return(
        <RelayEnvironmentProvider environment={initRelayEnvironment()}>
            {children}
        </RelayEnvironmentProvider>
    );
}