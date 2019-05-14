import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
    console.log(props)
    const id="/trailer/" + props.movie_Id;
  return (      
      <div className="rmdb-navigation">
        <div className="rmdb-navigation-content">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <p>{props.movie}</p>
      </div>
      <div className="rmdb-trailer">
        <Link to={id}>
          <p>Trailer</p>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;
