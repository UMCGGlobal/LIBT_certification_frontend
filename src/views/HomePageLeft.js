import React, { useEffect, useState, useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';


export default function HomePageLeft(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    const { studentName, setStudentName } = useContext(StudentContext)

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`http://localhost:3000/api/getOneStudent/${props.studentID}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setStudentName(result.name);


                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )
    }, [])

    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.flexHr}>
                <VerifiedTwoToneIcon color='primary' sx={{ mr: 1 }} />
                <Link href="https://www.libt.co.uk/" target="_blank">
                    <Typography variant="h6" gutterBottom color="primary">
                        London institute of business and technology
                    </Typography>
                </Link>
            </div>


            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                {items.course}
            </Typography>



            <div className={classes.flexHr}>
                <Button size="small" variant="outlined" startIcon={<ShareOutlinedIcon />} sx={{ mr: 1 }}>
                    Share
                </Button>
                <Button size="small" variant="outlined" startIcon={<PictureAsPdfOutlinedIcon />} sx={{ mr: 1 }}>
                    Download
                </Button>
                <Button size="small" variant="outlined" startIcon={<HelpOutlineOutlinedIcon />}>
                    Help
                </Button>
            </div>

            <div className={classes.flexHr}>
                <Avatar
                    alt={items.name}
                    src="/static/images/avatar/1.jpg"
                />
                <Typography variant="subtitle1" gutterBottom sx={{ ml: 2, }}>
                    {items.name}
                </Typography>

            </div>
            <Divider sx={{ mb: 5 }} />
            <Typography variant="body2" gutterBottom>
                {items.description}
            </Typography>
            <Divider sx={{ mb: 5, mt: 5 }} />
            <div className={classes.flexHSB}>
                <div className={classes.flexV}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Issued on
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {items.issuedDate ? items.issuedDate : "Does not exist"}
                    </Typography>
                </div>
                <div className={classes.flexV}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Expired on
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {items.expireDate ? items.expireDate : "Does not expire"}
                    </Typography>
                </div>
            </div>
            <Divider sx={{ mb: 5, mt: 5 }} />
            <Typography variant="overline" display="block" gutterBottom>
                Skills
            </Typography>
            <div className={classes.flexHr}>
                <Button size="small" variant="contained" sx={{ mr: 1 }} disabled>
                    Share
                </Button>
                <Button size="small" variant="contained" sx={{ mr: 1 }} disabled>
                    Download
                </Button>
                <Button size="small" variant="contained" disabled>
                    Help
                </Button>
            </div>
        </React.Fragment>
    );
}

const useStyles = makeStyles({
    flexHr: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px'
    },
    flexHSB: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexV: {
        display: 'flex',
        flexDirection: 'column'
    }
});