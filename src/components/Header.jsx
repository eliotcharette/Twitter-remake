import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../assets/twitter.jpg';

function Header() {
  return (

    <div>
      <style jsx>{`
            .header {
              background-color: #00aced;
              height: 250px;

            }
            input {
              float: right;
              padding-right: 45px;
            }
            .navbar {

            }
       `}</style>
      <div className='navbar'>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/newtweet">Moments</Link></button>
        <input type="text" placeholder="Search"></input>
        <hr/>
      </div>
      <div className='header'>

      </div>
    </div>
  );
}

export default Header;
