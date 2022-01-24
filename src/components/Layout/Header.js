import React, {Fragment} from 'react';
import HeaderCardButton from '../Layout/HeaderCardButton'
import Meals from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = () => {
  return (<Fragment>
      <header className={classes.header}>
          <h1>Clown Burger</h1>
          <HeaderCardButton/>
      </header>
      <div className={classes['main-image']}>
          <img src={Meals} alt="food table" />
      </div>
  </Fragment>);
};

export default Header;
