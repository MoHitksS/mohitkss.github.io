import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'
import styled from 'styled-components'
import myImage from '../Resources/Images/profilePic.jpg'
import backgroundImage from '../Resources/Images/backgroundHome.jpg';
import Resume from '../Resources/Files/Mohit_Sharma_Resume.pdf';
import { saveAs } from 'file-saver';


const About = () => {

    const saveFile = () =>{
        saveAs(
            `${Resume}`,
            `Mohit Sharma_Resume.pdf`
        )
    }

    return (
        <Container>
            <div className='aboutBox'>
                <div className='about_leftBox'>
                    <h1>Hi, I'm Mohit Sharma.</h1>
                    <p>I am A Full Stack Web Developer and i love to code and make user-friendly Websites.</p>
                    <button onClick={saveFile}>Download CV<DownloadIcon /></button>
                </div>
                <div className='about_rightBox'>
                    <div>
                        <img src={myImage} alt="" width='100%' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:450px;
    background-image: url(${backgroundImage});
    a{
        text-decoration:none;
    }
    .aboutBox{
        width:80%;
        height:100%;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .about_leftBox{
        width:50%;
        text-align:left;
        padding:10px;
    }

    .about_leftBox>h1{
        font-size:30px;
        line-height:10px;
    }

    .about_leftBox>p{
        color:#8492a6;
        font-size:17px;
        font-weight:500;
    }
    
    .about_leftBox button{
        padding:12px 20px 12px 20px;
        border-radius:8px;
        border:1px solid #01a479;
        background:#01a479;
        color:white;
        display:flex;
        align-items:center;
        gap:5px;
        font-weight:bold;
        font-size:15px;
    }

    .about_leftBox button:hover{
        color:#01a479;
        background-color:white;
    }

    .about_rightBox{
        width:50%;
        height:80%;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:15px;
    }

    .about_rightBox>div{
        width:250px;
        height:250px;
        margin:auto;
        border-radius:100%;
        background-color:white;
        overflow:hidden;
    }

    @media only screen and (min-width: 480px) and (max-width:768px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            gap:0px;
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:60%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
        }

    }

    @media only screen and (min-width:320px) and (max-width:480px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
        }

    }

    @media only screen and (max-width: 320px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
        }

    }


    @media only screen and (max-width: 319px){
        height:450px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
        }

    }
`

export default About