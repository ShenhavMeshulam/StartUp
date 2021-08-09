import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const useStyles = makeStyles(() => ({
    app: {
        display: 'grid',
        gridTemplateColumns: '5% 90% 5%',
        gridTemplateRows: '10% 80% 10%',
        height: '100%',
        width: '100%',
    },
    tabel: {
        gridColumnStart: '2',
        gridRowStart: '2',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: '40px',
        justifyContent: 'space-around',
        color: 'white'
    },
    headerItem: {
        width: '100%',
        backgroundColor: '#3f51b5',
        paddingLeft: '10px',
        "&:not(:last-child)": {
            borderRight: '4px solid #bbb',
        }
    },
    content: {
        backgroundColor: '#dad6d6',
        height: '100%',
        overflowY: 'auto'
    }

}));
export default ({ className }) => {
    const classes = useStyles();
    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const d = await axios.get('/basic/page2')
            setResponse(d.data);
        })()
    }, []);

    return (<div className={`${className} ${classes.app}`}>
        <div className={classes.tabel}>
            <div className={classes.header}>
                <div className={classes.headerItem}>title 1</div>
                <div className={classes.headerItem}>title 2</div>
                <div className={classes.headerItem}>title 3</div>
            </div>
            <div className={classes.content}>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
            </div>
        </div>
    </div>);
};