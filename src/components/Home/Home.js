import React,{useContext} from 'react';
import AuthContext from '../../context/authContext';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button className={classes.btn} onClick={ctx.onLogout}>LogOut</button>
    </Card>
  );
};

export default Home;
