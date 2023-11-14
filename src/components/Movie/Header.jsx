import React from 'react';
import { Link } from "react-router-dom";
import LoginControl from './LoginControl';

function Header () {
return (
    <div
    style={{
        margin: '0',
        width: '100vw',
        padding:'20px',
        backgroundColor:'#22254b'

    }}
    >
    <div
    style={{
        margin:"10px 200px 10px 200px",
        textAlign:'left',
        display : "flex"
        
    }}>
    <Link to="/">
    <img
    style={{ width: "154px", height: "20px", marginLeft: "50px" }}
    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
    alt="로고"
    />
    </Link>
    <Link to="/movie"
    style={{color: "white",marginRight:"10px", marginLeft: "10px", textDecoration:"none"}}>
        영화
    </Link>
    <Link to="/tv-program"
    style={{color: "white",marginRight:"10px", marginLeft: "10px", textDecoration:"none"}}>
        TV 프로그램
    </Link>
    <Link to="/celeb"
    style={{color: "white",marginRight:"10px", marginLeft: "10px", textDecoration:"none"}}>
        인물
    </Link>
    <LoginControl/>
    </div>
    </div>
);
}

export default Header;
