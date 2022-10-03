import React from 'react';
import styled from 'styled-components';
import kfc from '../Resources/Images/Project/kfc.jpeg';
import FitnessBlender from '../Resources/Images/Project/fitnessBlender.jpeg';
import ESPN from '../Resources/Images/Project/ESPN.jpeg';
import ZARA from '../Resources/Images/Project/zara.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
import { useState } from 'react';

const Projects = () => {
    const [state,setState] = useState('')
    const projects = [
        {
            id:4,
            title: 'ZARA ORIGINS Clone',
            img: ZARA,
            desc: 'Latest trends in clothing for women, men & kids at ZARA online. Find new arrivals, fashion catalogs, collections & lookbooks every week.',
            worked: 'A collaborative project, built in 4 days by a team of 5 developers.',
            githubLink: 'https://github.com/MoHitksS/green-value-83/',
            deployedLink: 'https://zara-origins.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux','Material UI','Firebase']
        },
        {
            id:1,
            title: 'KFC Clone',
            img: kfc,
            desc: 'KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global chicken restaurant brand with a rich, decades-long history of success and innovation.',
            worked: 'A collaborative project, built in 5 days by a team of 5 developers.',
            keyPoint2: 'Our food is always craveable. We are the original fried chicken experts, and everything we do celebrates our passion for serving finger lickin good food.',
            keyPoint1: 'KFC stores are located in more than 105 countries and were first opened in 1930.',
            githubLink: 'https://github.com/MoHitksS/KFC-india/',
            deployedLink: 'https://kfc-online-india.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id:2,
            title: 'Fitness Blender Clone',
            img: FitnessBlender,
            desc: 'Fitness Blender provides hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.',
            worked: 'A collaborative project, built in 4 days by a team of 5 developers.',
            keyPoint1: 'Exercise with certified personal trainers whether you’re at home or on the road.',
            keyPoint2: 'Professionally designed programs take the guesswork out of exercising.',
            githubLink: 'https://github.com/MoHitksS/vengeful-thrill-8133',
            deployedLink: 'https://fitness-blender.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id:3,
            title: 'ESPNcrickInfo Clone',
            img: ESPN,
            desc: 'Find Live Cricket Scores, Match updates, Fixtures, Results, News, Articles, Video highlights only at ESPNcricinfo. Read Ball by Ball Commentary',
            worked: 'This is a individual project which is only created by me in 4 days.',
            keyPoint2: 'Find interactive analysis of cricket stats and records only on ESPNcricinfo.com.',
            keyPoint1: 'ESPNcricinfo is available to cricket fans through the online media and on a host of mobile platforms and handheld devices.',
            githubLink: 'https://github.com/MoHitksS/rugged-driving-9905',
            deployedLink: 'https://espncrickinfoin.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra UI']
        }
    ]

    return (
        <Container id='projects' >
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box" style={index%2!==0?{border: "10px solid #01a479"}:{border: "10px solid #e9e9e9"}}>
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink}><button><GitHubIcon />Github</button></a>
                                <a href={ele.deployedLink}><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border:1px solid red;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#01a479;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects