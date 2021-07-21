import React, { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

export default ({ className }) => {
    const [c, setC] = useState('');

    useEffect(() => {
        yyy()
    }, [c]);

    const yyy = async () => {
        const d = await instance.get('/')
        // await axios.get('http://localhost:3000')
        setC(d.data);
    }

    return (<div className={className}>
        <h1>{c}</h1>
    </div>);
};