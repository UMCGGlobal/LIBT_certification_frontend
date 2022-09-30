import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CertificateImage from '../images/Sample_Certificate.png'

export default function CerticateComponent() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters maxWidth={false}>
                <Box sx={{ bgcolor: '#f0f0f0' }}>
                    <Container sx={{ pt: 3, pb: 3 }} maxWidth='md'>
                        <img src={CertificateImage} width='100%' alt='Certificate' />
                    </Container>
                </Box>
            </Container>
        </React.Fragment>
    );
}
