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
    },
    content: {
        marginLeft: '10px',
        wordWrap: 'break-word'
    }
}));

export default ({ className }) => {
    const classes = useStyles();
    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const d = await axios.get('/json/1')
            console.log(d.data)
            setResponse(d.data.item);
        })()
    }, []);

    return (
        <div className={`${className} ${classes.app}`}>
            <div className={classes.content}>
                <h1>{response}11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</h1>
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
            </div>
        </div>);
};