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
justify-content: space-around;
    h1{
        left:30%;
        top:80%;
        position:absolute;
        z-index:2;
        color:white;
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
    margin:6rem;
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
height:10rem;
max-width:10rem
}


${mobile({
    padding: '0rem',

})}
  @media screen and (max-width:150px) {
    background-color: white;
}
`;
const ContactMe = styled(Link)`
max-width:8rem;
margin-bottom: 2rem;
font-size: large;
padding:.5rem;
border-radius: 2rem;
background-color: #abb8c3;
border: none;
text-decoration: none;
&:hover{
    background-color: white;
}


`;

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
            <h1>Jai SREERAM JAI VERA ANJANEEYA</h1>
            <VideoBackground loop autoPlay muted>
                <source src={video} type='video/mp4'></source>
            </VideoBackground>
        </VideoContainer>
        <AboutMe>
            <p>GET IN TOUCH</p>
            <h2>I do adult & child Counselling to assist you with a wide range of mental health problems.
                <img src={Don}></img>
            </h2>
            <ContactMe to='/about'>About Me</ContactMe>
        </AboutMe>
        <ImageContainer>
            <ImageBox >
                <img src={sofa} alt='sofa'></img>
                <h2>Couple Counselling</h2>
                <p >Adults seeking treatment for themselves deserve assurance that their psychologist is the right fit. Explore our range of services including EMDR Therapy, Autism & ADHD Assessments, counseling, CBT, and ACT. Reach out today to speak with a clinical director and find the support you need.</p>
            </ImageBox>
            <ImageBox>
                <img src={flowerPot} alt='flowerPot'></img>
                <h2 >Individual Counselling</h2>
                <p>Our team of clinicians are dedicated to working with children and young people. With expertise in Autism & ADHD assessments, one-to-one child therapy, counselling, and CBT, we address a spectrum of youth challenges. We actively involve parents in their child’s treatment journey. Learn more about our approach and processes.</p>
            </ImageBox>
        </ImageContainer>
        <TherapyContainer>

            <Assessments
                style={{ gridTemplateColumns: '' }}>
                <img src={desert} alt='desert'></img>
                <h2>Youth Mentoring</h2>
                <p >Bridging the Gap Between Therapy and Daily Life: While therapy provides a safe space for in-depth exploration of challenges, youth mentoring offers ongoing support and guidance in young people's everyday lives. Mentors can help young people practice and apply the skills learned in therapy in real-world situations.</p>
            </Assessments>
            <Assessments>
                <img src={door} alt='door'></img>
                <h2>Grief Counselling</h2>
                <p>Psychology counselling offers a safe and supportive space for individuals to process grief, fostering healthy coping mechanisms and facilitating the journey towards healing.</p>
            </Assessments>
            <Assessments>
                <img src={mirror} alt='mirror'></img>
                <h2>Meditation</h2>
                <p>Psychology counselling may incorporate mindfulness meditation practices to help clients manage stress, increase self-awareness, and promote emotional regulation.</p>
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
