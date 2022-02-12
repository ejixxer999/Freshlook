// import React from "react";
// import { NavLink } from "react-router-dom"

// const linkStyles = {
//     display: "inline-block",
//     width: "70px",
//     padding: "10px",
//     margin: "0 8px 8px",
//     background: "black",
//     TextDecoration: "none",
//     color: "white",
//     transition: 0.1,
// }

// function NavBar () {

//     return(
//         <div>
//             <NavLink to="/" exact
//             style={linkStyles}
//             activeStyle={{
//                 background: "darkblue"
//             }}>
//                 Home
//             </NavLink>

//             <NavLink to="/about" exact
//             style={linkStyles}
//             activeStyle={{
//                 background: "darkblue"
//             }}>
//                 About
//             </NavLink>

//             <NavLink to="/contact" exact
//             style={linkStyles}
//             activeStyle={{
//                 background: "darkblue"
//             }}>
//                 Contact Us
//             </NavLink>

//             <NavLink to="/products" exact
//             style={linkStyles}
//             activeStyle={{
//                 background: "darkblue"
//             }}>
//                 Products
//             </NavLink>
//         </div>
//     )

// }

// export default NavBar




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fresh Looks
          </Typography>
          
          <Button color="inherit" component={ Link } to="/" exact>Home</Button>
          
          
          <Button color="inherit" component={ Link } to="/about" exact>About</Button>
         
          
          <Button color="inherit" component={ Link } to="/contact" exact>Contact Us</Button>
          
          
          <Button color="inherit" component={ Link } to="/products" exact>Products</Button>
          
          
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;