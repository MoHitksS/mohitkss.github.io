import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ContactUs = () => {
    return (
        <Container>
            <div className='contact'>
                <div className='contactText'>
                    <div>
                        <h1>Contact Me</h1>
                    </div>
                    <div className='middleSection'>
                        <div>
                            <PhoneIcon fontSize="large" />
                            <h1>Phone</h1>
                            <p>Here is My Phone Number</p>
                            <a href="tel:+917983810058" rel="noreferrer" target="_blank">
                                <p>+917983810058</p>
                            </a>
                        </div>
                        <div>
                            <EmailIcon fontSize="large" />
                            <h1>Email</h1>
                            <p>You can Simply mail me just by clicking on my email</p>
                            <a href='mailto:mohitkumarsharma@gmail.com' rel="noreferrer" target="_blank"><p>mohitkumarsharma@gmail.com</p></a>
                        </div>
                        <div>
                            <LocationOnIcon fontSize="large" />
                            <h1>Location</h1>
                            <p>Rishikesh,Uttarakhand</p>
                            <a href="https://www.google.com/maps/place/Veerbhadra,+Uttarakhand/@30.0479292,78.4212561,11.16z/data=!4m5!3m4!1s0x39093e1730e30441:0x7aceaa46b9f267fe!8m2!3d30.0771701!4d78.2874772" rel="noreferrer" target="_blank">
                                <p>View on Google map</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Subject' />
                        </div>
                        <div>
                            <input type="text" placeholder='Your Message' />
                            <div>
                                <button type='submit'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    background-color:white;
    
    .contact{
        width:85%;
        margin:auto;
        padding-top:20px;
        display:flex;
        flex-direction:column;
        gap:30px;
        
    }

    .middleSection{
        display:flex;
        justify-content:space-around;
    }

    .middleSection>div{
        padding:10px;
    }

    .middleSection>div>h1{
       font-size:x-large;
       margin-top:0px;
    }
    .middleSection>div p{
        margin-top:0px;
    }

    .middleSection>div a{
        text-decoration:none;
        color:#01a479;
     }

    .contactForm>form{
        display:flex;
        gap:10px;
    }
    .contactForm>form>div{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:50%;
    }
    .contactForm>form>div>input{
        width:95%;
        padding:5px 5px 5px 15px;
        border:1px solid #e9ecef;
        border-radius:8px;
    }
    
    .contactForm>form>div:first-child>input{
        height:30px;
        margin-bottom:30px;
    }

    .contactForm>form>div:last-child>input{
        height:175px;
        margin-bottom:30px;
        position:relative;
    }

    .contactForm>form>div:last-child>input::placeholder{
        position:absolute;
        top:15px;
    }

    .contactForm>form>div:last-child>div{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:right;
        padding-right:10px;
    }

    .contactForm>form>div:last-child>div>button{
        background-color:#01a479;
        color:white;
        border:none;
        padding:10px 20px 10px 20px;
        border-radius:10px;
        
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:90%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }

    @media only screen and (max-width: 320px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:70%;
        }

        .contactForm>form{
            align-items:center;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }


    @media only screen and (max-width: 319px){
        .middleSection{
            flex-direction:column;
        }

        .contactForm>form{
            flex-direction:column;
        }

        .contactForm>form>div{
            width:80%;
        }

        .contactForm>form>div:last-child>div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            padding-right:10px;
        }

        .contactForm>form>div:last-child>div>button{
            width:100%;
            
        }
    }
    

`
export default ContactUs