import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PlaceIcon from '@material-ui/icons/Place';

export default
    [
        {
            text: 'Work logs',
            icon: <DescriptionIcon />,
            route: './WorkLogs'
        },
        {
            text: 'Workers',
            icon: <PermContactCalendarIcon />,
            route: './Workers'

        },
        {
            text: 'Sites',
            icon: <PlaceIcon />,
            route: './Sites'
        },
    ]
