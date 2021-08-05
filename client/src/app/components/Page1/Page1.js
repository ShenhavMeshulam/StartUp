import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import axios from '../axios';

const useStyles = makeStyles(() => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        background: ' aquamarine',
        height: '100%',
        width: '100%',
        marginLeft: '10px'
    },
}));

export default ({ className }) => {
    const classes = useStyles();
    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const d = await axios.get('/json')
            console.log(d.data)
            setResponse(d.data.item);
        })()
    }, []);

    return (<div className={`${className} ${classes.app}`}>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
        <h1>{response}</h1>
    </div>);
};