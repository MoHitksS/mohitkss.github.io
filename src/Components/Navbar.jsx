import backgroundImage from '../Resources/Images/backgroundHome.jpg'
import styled from 'styled-components'
import React from 'react'

const Navbar = () => {
    return (
        <Container>
            <div className='navbar_box'>
                <header className="header">
                    <a href="" className="logo">Mohit</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="#work">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#careers">Skills</a></li>
                        <li><a href="#contact">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </header>
            </div>
        </Container>
    )
}
// #52d081
const Container = styled.div`
    width:100%;
    height:70px;
    background-image: url(${backgroundImage});
    .navbar_box{
        width:82%;
        margin:auto;
    }

    a {
        color: #000;
    }
    
    /* header */
    
    .header {
        position: fixed;
        width:80%;
        z-index: 3;
        padding-top:10px;
    }
    
    .header ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
    }
    
    .header li a {
        display: block;
        padding: 20px 25px;
        text-decoration: none;
    }
    
    .header .logo {
        display: block;
        float: left;
        font-size: 2em;
        padding: 10px 20px;
        text-decoration: none;
        color:#343a40;
    }
    
    /* menu */
    
    .header .menu {
        clear: both;
        max-height: 0;
        transition: max-height .2s ease-out;
        text-transform:uppercase;
        font-size:15px;
        font-weight:700;
        color:#343a40;
    }

    li a{
        color:#343a40;
    }

    li a:hover{
        color:#01a479;
    }
    
    
    /* menu icon */
    
    .header .menu-icon {
        cursor: pointer;
        display: inline-block;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
    
    .header .menu-icon .navicon {
        background: #333;
        display: block;
        height: 2px;
        position: relative;
        transition: background .2s ease-out;
        width: 18px;
    }
    
    .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
        background: #333;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
    }
    
    .header .menu-icon .navicon:before {
        top: 5px;
    }
    
    .header .menu-icon .navicon:after {
        top: -5px;
    }
    
    /* menu btn */
    
    .header .menu-btn {
        display: none;
    }
    
 
    .header .menu-btn:checked ~ .menu {
        width:100%;
        max-height: 240px;
        background-color:white;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
    }
    
    /* 48em = 768px */
    
    @media (min-width: 55em) {
        .header li {
            float: left;
        }
        
        .header li a {
            padding: 20px 30px;
        }

        .header .menu {
            clear: none;
            float: right;
            max-height: none;
        }

        .header .menu-icon {
            display: none;
        }
        
    }
  
`

export default Navbar