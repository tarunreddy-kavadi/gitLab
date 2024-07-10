import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import ProfilePic from '../assets/Don.png'
import { FaqData } from '../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import Pillow from '../assets/img7.jpg'
import Cupboard from '../assets/img8.jpg'
import { tablet, mobile } from '../ResponsiveSetup'


const Container = styled.div`
max-width:100%;

`
const Landing = styled.div`
   margin:3rem 3rem 3rem 3rem;
   grid-column-gap:1.5rem;
   justify-items: center;
   align-items: center;
   display: grid;
   grid-template-columns: repeat(2);
   grid-template-rows: repeat(2);

   @media screen and (max-width:650px){
      display: grid;
      column-gap: 0rem;
      grid-template-rows: repeat(3)  ;
      grid-template-columns: repeat(1,minmax(20px,1fr));
      margin: 3rem 0rem 3rem 0rem;
   } 
`;
const ProfilePhoto = styled.div`
img{
  display: grid;
  max-height:20rem;
  max-width:20rem;
   border-radius: 2rem;
   box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
   animation-name: slideIn;
   animation-duration: 3s;
   transform-style: preserve-3d;
   transition: all ease-in;

   }
   @keyframes slideIn {
   
  0%{
      opacity: 0;

    }
    50%{
      opacity: 0.5;
      transform: translateX(25%);
    }
    100%{
      opacity: 1;
      transform:translateX(0%)
    }
   }
   @media screen and (max-width:650px) {
    display: grid;
    grid-row: 1;
   }
`;
const ProfileIntro = styled.div`
display: grid;
h3{
  word-break: break-all;
  line-height: 1.5;
  font-weight: 400;
}
   @media screen and (max-width:650px) {
    grid-row:  2;
   }
`;

const Text2 = styled.div`
display: grid;
grid-column: span 2;
h3{ 
  word-break: break-all;
  line-height: 1.5;
  font-weight: 400;}
`;

const Counselling = styled.div`
background-color: #e5dfd4;
padding:5rem;
display: grid;
h1{
  display: grid;
  text-align: center;
  grid-template-rows: auto-fit;
  word-break: break-all;
};
${tablet({
  gridTemplateColumns: 'repeat(1,minmax(10px,1fr))',
})};
${mobile({
  padding: '0rem'
})}
`;
const Para1 = styled.div`
display: grid;
align-items: center;
grid-template-columns: 20rem 1fr;
align-items: center;
justify-items:center;
img{
max-height:20rem;
max-width: 20rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
  ${tablet({
  gridRow: '1',
  maxWidth: '100%',

})}
};
  h3{
   line-height: 1.5rem;
   font-weight: 300;
  };

 ${tablet({
  gridTemplateColumns: 'repeat(1,minmax(20px,1fr))',
  gridTemplateRows: 'repeat(2)',
})};

`;
const Para2 = styled.div`
display: grid;
grid-template-columns: 1fr 20rem;
align-items: center;
justify-items: center;

img{
max-height: 20rem;
max-width: 20rem;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 ${tablet({
  gridRow: '1',
  maxWidth: '100%'
})}
};

h3{
  line-height: 1.5rem;
  font-weight: 300;
};
${tablet({
  gridTemplateColumns: 'repeat(1,minmax(20px,500px))',
  gridTemplateRows: 'repeat(2)',
})}

`;
const Faqs = styled.div`
display: grid;
position: relative;
margin:5rem 0rem 5rem 0rem;
align-items: center;
justify-items: center;


h1{
 margin-bottom: 3rem;
}

`;
const FaqContainer = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  gap:1.5rem;
`
const FaqCards = styled.div`
h4{
  display: grid;
${props => props.button === true ? { display: 'visible' } : { display: 'none' }};
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
max-width:30rem;
background-color: white;
margin-bottom: 0;
transition: all 0.2s ease;
border-radius: 1rem;
line-height: 1.5rem;
}
`;

const FaqQues = styled(Link)`
display: grid;
position: relative;
background-color:#e5dfd4;
min-height:4rem;
max-width: 30rem;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
text-decoration: none;
transition: all 0.4s ease;
border-radius: 1rem;

h2{
color:black;
display: flex;
justify-content: space-between;
 transition: all 0.2s ease;
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-between;
 padding:0rem 2rem 0rem 2rem;

 @media screen and (max-width:250px) {
  padding: 0rem
  
 }
}
`

const About = () => {

  const [open, setOpen] = useState({});

  return <Layout>
    <Container>
      <Landing>
        <ProfilePhoto>
          <img src={ProfilePic} />
        </ProfilePhoto>
        <ProfileIntro>
          <h3>Hi there,</h3>
          <h3>This is Don Jacobs MBACP</h3>
          <h3>Throughout my career as a counsellor, I've witnessed the transformative power of therapy in helping individuals unlock their full potential and navigate life's challenges with greater resilience. My passion lies in empowering you to identify and achieve your personal goals, while simultaneously addressing the underlying issues causing distress. Whether you're struggling with low self-esteem that hinders your confidence, seeking guidance on navigating your career path or personal life, or grappling with past traumas from childhood, I'm here to support you. My expertise extends to helping individuals manage stress and anxiety, overcome depression, and develop healthy coping mechanisms for anger. </h3>

        </ProfileIntro>
        <Text2> <h3 className='text2'>Additionally, I understand that mental health concerns can manifest in various ways, and I'm well-equipped to provide support for those experiencing a range of mental health disorders. If you're facing grief, bereavement, or loss, including the emotional turmoil of relationship breakdown, I can offer a compassionate space to heal and process these difficult experiences.  Remember, you don't have to walk this path alone. Together, we can explore the root causes of your distress, develop personalized strategies, and equip you with the tools you need to build a more fulfilling and meaningful life.
        </h3></Text2>
      </Landing>

      <Counselling>
        <h1>Counselling</h1>
        <Para1>
          <img src={Pillow} alt='pillow'></img>
          <h3>In today's world, prioritizing mental well-being is more important than ever. However, accessing quality therapy shouldn't be a privilege. That's why I'm committed to making therapy accessible and affordable through flexible scheduling, competitive rates, and exploring options like sliding scale fees. Whether you're juggling a busy schedule or facing financial limitations, I believe everyone deserves the opportunity to embark on a journey of self-discovery and growth.
            <br /> <br />My approach is deeply client-centered. You are the expert on your own life, and your goals and needs will guide our sessions together. I see myself as a supportive guide, walking alongside you as you navigate your unique experiences. We'll work collaboratively to cultivate self-awareness, helping you identify your inherent strengths, values, and resources.  This journey of self-discovery unfolds within a safe and respectful space, free from judgment. Here, you can explore your thoughts and feelings honestly, knowing you're heard and valued.</h3>
        </Para1>
        <Para2>
          <h3>I utilize a variety of evidence-based techniques tailored to your individual needs. This might involve approaches like Cognitive Behavioral Therapy (CBT) to manage unhelpful thought patterns, or mindfulness practices for stress reduction. Together, we'll develop strategies and tools that empower you to navigate life's challenges with greater confidence and clarity. If you're struggling with anxiety, depression, relationship issues, or simply seeking a deeper understanding of yourself, I invite you to take the first step towards a more fulfilling life. Let's schedule a free consultation to discuss your needs and how I can support you on your journey. Remember, you have the inherent ability to overcome obstacles and flourish. Together, we can unveil your inner strength and empower you to chart your course towards a brighter future.</h3>
          <img src={Cupboard} alt='Cupboard'></img>
        </Para2>
      </Counselling>

      <Faqs >
        <h1>FAQ'S</h1>
        <FaqContainer>
          {
            FaqData.map((data, id) => {
              const handleClick = (e) => {
                e.preventDefault()
                return setOpen({ [id]: !open[id] })
                // [id] is the data key value and !open[id] is checking the id undefined or not. here is says !open{not !undefined = true in js}.
              }
              return <FaqCards key={id} onClick={handleClick} button={open[id]}>

                <FaqQues><h2 >{data.question} <AddIcon style={open[id] ? { transform: 'rotate(45deg)', transition: '0.2s' } : { transform: 'rotate(0deg)', transition: '0.2s' }}></AddIcon></h2></FaqQues>

                <h4>{data.answer}</h4>

              </FaqCards>
            })
          }
        </FaqContainer>
      </Faqs>
    </Container>
  </Layout >
}

export default About
