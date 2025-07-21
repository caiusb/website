import React from 'react';
import Layout from '../components/layout';

export default function Astrography() {
    return (
        <Layout>
            <h1>Astrography</h1>
            <p>Welcome to the Astrography page.</p>
            <p>My current setup is a Seestar S50 smart telescope.</p>
            <h2>Select images</h2>
            <h3>M17 - Omega Nebula</h3>
            <p>Images were taken on June 29th, 2025, processed with Siril with a total integration time of 10 minutes.</p>
            <img src="/astrography/M17-20250629-10mins-IRCUT.png" width="500" alt="M17"/>
        </Layout>
    );
}
