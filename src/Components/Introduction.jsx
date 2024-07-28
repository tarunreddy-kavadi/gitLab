import React from 'react'
import styled, { keyframes } from 'styled-components'
import video from '../assets/psycologyVideo.mp4'
import Don from '../assets/Don.png'
import sofa from '../assets/img1.png'
import flowerPot from '../assets/img2.png'
import desert from '../assets/img4.jpg'
import mirror from '../assets/img5.jpg'
import door from '../assets/img6.jpg'
import Contact from '../assets/img3.jpg'
import { Link } from 'react-router-dom'
import Form from './Form'
import ReviewCards from './ReviewCards'
import { mobile } from '../ResponsiveSetup'



const Container = styled.div`
`;
const VideoContainer = styled.div`
/* margin: 0rem 8.5rem 0rem 8.5rem; */
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;


    h1{ 
        padding:3rem;
        position:absolute;
        z-index:2;
        color:white;
        width: 50%;
        text-align: center;
        font-size:2.5rem;

    }
    p{ 
        padding:1rem;
        font-size: 1rem;
    }

@media screen and (max-width:150px) {
    display: none;
}
`;

const VideoBackground = styled.video`
object-fit: cover;
height: 100vh;
max-width:100%;
animation-name: video-blur;
animation-duration: 34s;
animation-iteration-count:infinite;
@keyframes video-blur {
    0%{ filter:blur(2px)}
    25%{filter:blur(5px)}
    50%{filter:blur(5px); display:inline}
    100%{filter:blur(10px); display:inline}
}


`;
const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: scale(2);
    }
    100%{
        opacity:1;
        transform:scale(1);
        
    }
`;
const AboutMe = styled.div`
    margin-top: 1rem;
    background-color: #e5dfd4;
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height:100vh;
    text-align: center;
    
    p{
      font-family: "Playwrite NZ", cursive;
      animation-name:fadeOut;
      animation-timeline: view();
      @keyframes fadeOut{
        0%{
            opacity: 1
        }
        
       100%{
            opacity:0
       }
      }
    };
   h2{
    margin:6rem 6rem 0rem 6rem;
    font-family: "Playwrite NZ", cursive;
    animation-name: ${fadeIn};
    animation-timeline: view();
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    ${mobile({
    margin: '0rem',
})}
};
img{
    padding:3rem;
    border-radius: 30rem;
   height:15rem;
    max-width:20rem;    
}


${mobile({
    padding: '0rem',

})}
  @media screen and (max-width:150px) {
    background-color: white;
}
`;
const ContactMe = styled(Link)`
/* max-width:8rem; */
border: none;
text-decoration: none;
position: relative;
h3{
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    border: 0.5px solid black;
    padding:1rem;
    z-index: 1;
    &:hover{
        & > div {
            left:0;
            color:black
        }
    }
}
`;

const BackgroundColor = styled.div`
    width:100%;
    height: 100%;
    position: absolute;
    background-color: #abb8c3;
    left:-100%;
    top:0%;
    transition: left 0.5s ease;
    z-index:-1;
      
`

const ImageContainer = styled.div`
/* margin: 2rem 8.5rem 20rem 8.5rem; */
display: grid;
margin: 5rem;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
gap:2rem;
${mobile({
    margin: '0rem',
    marginTop: '2rem'
})}
`
const ImageBox = styled.div`
display: grid;
grid-template-rows:1fr;
text-align: start;
line-height: normal;
img{
height:30rem;
width:100%;

}
`;
const TherapyContainer = styled.div`
padding: 6rem 5rem 10rem 5rem;
background-color: #e5dfd4;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
/* grid-template-rows: repeat(auto-fit,minmax(200px,1fr)); */
gap:2rem;
${mobile({
    padding: '0rem'
})}

  @media screen and (max-width:150px) {
    background-color: white;
  
}
`;

const Assessments = styled.div`
    display: grid;
   grid-template-rows: 20rem 5rem ;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
 max-width:100%;

    img{
      height: 100%;
      width:100%;
    }
`;
const ContactContainer = styled.div`
   margin: 2rem 0rem 10rem 0rem;
    display: flex;
    justify-content: space-around;
    justify-self: auto;
    align-items: center;
    gap:5rem;
    img{
        height:25rem;
        width: 35rem;
        border: 3px solid black;
        
     @media screen and (max-width:800px) {
        display: none;
     }
     
    }
`;


const Introduction = () => {
    return <Container>
        {/* <Responsive min-width={'475px'} /> */}
        <VideoContainer>
            <h1>Counselling is not an easy option, but with me you will never be alone
                <p>I look forward to hearing from you</p>
            </h1>

            <VideoBackground loop autoPlay muted>
                <source src={video} type='video/mp4'></source>
            </VideoBackground>
        </VideoContainer>
        <AboutMe>
            <p>GET IN TOUCH</p>
            <h2>Hello. My name is Don Jacobs, I wonder what brings you here today. <br />
                My aim as a therapist is to help you to get from where you are now to where you would like
                to be.
                <img src={Don}></img>
            </h2>
            <ContactMe to='/about'><h3>About Me <BackgroundColor /></h3> </ContactMe>
        </AboutMe>
        <ImageContainer>
            <ImageBox >
                <img src={sofa} alt='sofa'></img>
                <h2>Relationship Counselling</h2>
                <p >Whether you’re trying to work through a problem with your partner or you’re single and want
                    to explore your feelings about relationships, counselling can make a real difference to you.
                    Counselling provides a supportive, constructive and confidential environment in which you
                    can explore your relationship difficulties and talk over ways to address them.
                    I also use restorative practices to mediate and resolve ongoing conflicts between close
                    friends, work colleagues or family members.</p>
            </ImageBox>
            <ImageBox>
                <img src={flowerPot} alt='flowerPot'></img>
                <h2 >Individual Counselling</h2>
                <p>I specialised in helping people to identify and achieve their personal goals by coping with,
                    and exploring the issues that cause them distress.
                    Some or the areas I help with are: Low self-esteem, Career and Personal life guidance,
                    Childhood trauma, Stress and Anxiety, Depression, Anger management, any Mental Health
                    Disorders, Grief, Bereavement and Loss including Relationship Breakdown.</p>
            </ImageBox>
        </ImageContainer>
        <TherapyContainer>

            <Assessments
                style={{ gridTemplateColumns: '' }}>
                <img src={desert} alt='desert'></img>
                <h2>Youth Mentoring</h2>
                <p >Sometimes parents (through no fault of their own) struggle to keep their adolescent children
                    on the right path. Through Mentoring I can help ease the transition from childhood to
                    adulthood by a mix of support and challenge. ‘It takes a village to bring up a child’…. With
                    over 30 years’ experience of working with children and young people I will endeavour to
                    build a developmental relationship in which the young person is inducted into the adult world
                    of responsibility, rights and resilience.</p>
            </Assessments>
            <Assessments>
                <img src={door} alt='door'></img>
                <h2>Grief Counselling</h2>
                <p>Counselling offers a safe and supportive space for individuals to process the five stages of
                    grief: Anger, Denial, Bargaining, Depression and the final stage Acceptance. I endeavour to
                    foster healthy coping mechanisms and facilitating the journey towards healing.</p>
            </Assessments>
            <Assessments>
                <img src={mirror} alt='mirror'></img>
                <h2>Meditation</h2>
                <p>My Counselling techniques may incorporate mindfulness meditation and breathing practices
                    to help clients manage stress, increase self-awareness, and promote emotional regulation.</p>
            </Assessments>
        </TherapyContainer>
        <ContactContainer>
            <img src={Contact} alt='Contact'></img>
            <Form />
        </ContactContainer>
        <ReviewCards />
    </Container>
}

export default Introduction
