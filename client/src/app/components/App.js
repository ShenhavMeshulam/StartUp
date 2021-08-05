import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Menu from './Menu';
import HomePage from './HomePage/HomePage';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import MenuItems from './MenuItems';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  contet: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: '64px',
    bottom: '0',

  },
  homePage: {
    paddingLeft: '50px',
    width: '100%',
    height: '100%'
  }
}));

export default () => {
  const classes = useStyles();
  const [sidenavOpen, setSidenavOpen] = React.useState(false);

  const handleSidenavClickButton = () => {
    setSidenavOpen(!sidenavOpen);
  }

  //useContext???
  return (
    <Router>

      <Box className={classes.app}>
        <Header OnSidenavButtonClick={handleSidenavClickButton} />
        <div className={classes.contet}>
          <Menu isOpen={sidenavOpen} />
          <Route exact path="/" component={HomePage} />
          {
            MenuItems.map(x => {
              return < Route path={x.route} component={x.routeComponent} />
            })
          }
        </div>
      </Box>
    </Router>
  );
}