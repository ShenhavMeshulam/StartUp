import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PlaceIcon from '@material-ui/icons/Place';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

export default
    [
        {
            text: 'Page 1',
            icon: <DescriptionIcon />,
            route: '/Page1',
            routeComponent: Page1
        },
        {
            text: 'Page 2',
            icon: <PermContactCalendarIcon />,
            route: '/Page2',
            routeComponent: Page2

        },
        {
            text: 'Page 3',
            icon: <PlaceIcon />,
            route: '/Page3',
            routeComponent: Page3
        },
    ]
