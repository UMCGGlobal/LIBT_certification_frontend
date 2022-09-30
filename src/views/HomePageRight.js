import * as React from 'react';
import { makeStyles } from '@mui/styles';

export default function HomePageRight() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.sideBar}>Sidebar</div>
        </React.Fragment>
    );
}

const useStyles = makeStyles({
    sideBar: {
        background: '#f7f7f7',
        padding: 10
    }
});