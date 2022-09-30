import * as React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CerticateComponent from '../components/CertificateComponent';
import HomePageLeft from './HomePageLeft';
import HomePageRight from './HomePageRight';
import AppBar from '../components/AppBar';


export default function HomePage(props) {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <React.Fragment>
            <AppBar />
            <CerticateComponent />
            <Container sx={{ pt: 3, pb: 3 }} maxWidth='lg'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <HomePageLeft studentID={state.studentID} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <HomePageRight />
                        </Grid>

                    </Grid>
                </Box>
            </Container>

        </React.Fragment>
    );
}
