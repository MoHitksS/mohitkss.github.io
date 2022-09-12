import React from 'react';
import styled from 'styled-components';
import kfc from '../Resources/Images/Project/kfc.png';
import FitnessBlender from '../Resources/Images/Project/fitnessBlender.png';
import ESPN from '../Resources/Images/Project/ESPN.png';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';
const Projects = () => {

    const projects = [
        {
            title: 'KFC Clone',
            img: kfc,
            desc: 'KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global chicken restaurant brand with a rich, decades-long history of success and innovation.',
            githubLink: 'https://github.com/MoHitksS/KFC-india/',
            deployedLink: 'https://kfc-online-india.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            title: 'Fitness Blender Clone',
            img: FitnessBlender,
            desc: 'Fitness Blender provides hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.',
            githubLink: 'https://github.com/MoHitksS/vengeful-thrill-8133',
            deployedLink: 'https://fitness-blender.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            title: 'ESPNcrickInfo Clone',
            img: ESPN,
            desc: 'Find Live Cricket Scores, Match updates, Fixtures, Results, News, Articles, Video highlights only at ESPNcricinfo. Read Ball by Ball Commentary',
            githubLink: 'https://github.com/MoHitksS/rugged-driving-9905',
            deployedLink: 'https://espncrickinfoin.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript', 'React', 'Chakra UI']
        }
    ]

    return (
        <Container id='projects'>
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' height='350px' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag,index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink}><button><GitHubIcon/>Github</button></a>
                                <a href={ele.deployedLink}><button><StreamIcon/>Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
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
        width:82%;
        margin:auto;
        
    }

    .box{
        width:100%;
        display:flex;
        justify-content:center;
        gap:10px;
        margin-bottom:100px;
        border:1px solid red;
        border-radius: 20px;
        border: 10px solid #01a479;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        
    }

    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
        margin-bottom:0px;
    }

    .tagsBox{
        width:50%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
        margin-left:-10px;
    }

    .tagsBox>span{
        margin-left:10px;
        color:white;
        background-color:#01a479;
        padding: 5px 20px 5px 20px;
        border-radius:10px;
    }


    .linkSection{
        display:flex;
        gap:30px;
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

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
        }

        .imgBox{
            width:100%;
        }
        .imgBox>img{
            width:100%;
            height:350px;
        }
        .ContentBox{
            width:80%;
        }

        .tagsBox{
            width:70%;
            
        }
       
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
         }

         .imgBox{
            width:100%;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .imgBox>img{
            width:100%;
            height:250px;
        }
        .ContentBox{
            width:80%;
        }

        .tagsBox{
            width:90%;
            
        }

    }

    @media only screen and (max-width: 320px){
        .box{
            flex-direction:column;
        }

        .imgBox{
            width:100%;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .imgBox>img{
            width:100%;
            height:250px;
        }
    
        .ContentBox{
            width:80%;
        }

        .tagsBox{
            width:100%;
            
        }
    }


    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
         }

         .imgBox{
            width:100%;
        }
    
        .ContentBox{
            width:80%;
        }
    }
   
   
`
export default Projects