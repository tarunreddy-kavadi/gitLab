import React from 'react'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components'
import { Review_Data } from '../data';
import { mobile } from '../ResponsiveSetup';


const Container = styled.div`
background-color: #e5dfd4;
text-align: center;
padding:3rem 0rem 2rem 0rem;
/* min-height:100vh; */
/* display: flex; */
/* flex-direction: column;
overflow: auto;
justify-content: center;
align-items: center; */
@media screen and (max-width:150px){
   display: none;
}
`;
const ReviewContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
 max-width: 60rem;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);

  /* ${mobile({
    width: '26rem'
})} */
`;
const ReviewSlider = styled.div`
white-space:nowrap;
transition: ease 1000ms;

`;
const ReviewCard = styled.div`
  display: inline-block;
  min-height:15rem;
  width: 100%;
  border-radius: 40px;
  text-align: center;
  white-space: pre-wrap;
  p{
        font-family: "Italianno", cursive;
    font-size: 2rem;
   overflow-wrap: break-word;
   word-break: break-all;
  }
`;
const ReviewDots = styled.div`
text-align: center;
`;
const ReviewDot = styled.div`
  display: inline-block;
  max-height: 20px;
  max-width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: ${props => (props.index === props.id ? '#c4c4c4' : '#abb8c3')};
`;

function ReviewCards() {
    const timeoutRef = useRef(null);
    const [index, setIndex] = useState(0);
    const delay = 10500;
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === Review_Data.length - 1 ? 0 : prevIndex + 1

                ),
            delay
        );

        return () => {
            resetTimeout()
        };
    }, [index]);
    return <Container>
        <h1>Reviews</h1>
        <ReviewContainer>
            <ReviewSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    Review_Data.map((data, id) => {
                        return <ReviewCard
                            key={id} id={id}>

                            <h1>{data.customer}</h1>
                            <h3>{data.rating}</h3>
                            <p>{data.review}</p>
                        </ReviewCard>
                    })
                }
            </ReviewSlider>
        </ReviewContainer>
        <ReviewDots>
            {
                Review_Data.map((_, id) =>
                    <ReviewDot index={index} id={id}
                        key={id}
                        onClick={() => { setIndex(id) }}
                    />)
            }
        </ReviewDots>
    </Container>
}

export default ReviewCards
