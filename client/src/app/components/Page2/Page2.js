import React, { useEffect, useState } from 'react';
import axios from '../axios';

export default ({ className }) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const d = await axios.get('/basic/page2')
            setResponse(d.data);
        })()
    }, []);

    return (<div className={className}>
        <h1>{response}</h1>
    </div>);
};