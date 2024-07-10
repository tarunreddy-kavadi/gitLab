import React, { useRef } from 'react'
import styled from 'styled-components'
import { mobile } from '../ResponsiveSetup';

const Contianer = styled.div`

display: flex;
justify-content: center;
`
const FormContainer = styled.div`
    min-height:30rem;
    width:100%;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);
    justify-self:auto;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    align-self:auto;
    padding:5rem;
    ${mobile({
    padding: '1.5rem'
})}
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        input{
            margin-top: 2rem;
            min-height:3rem;
            border: 2px solid black;
            width:100%;
        }
  
        textarea{
           margin-top: 2rem;
           min-height:5rem;
           width:100%;
           border: 2px solid black;
        }
        .submit{
            min-width: 12.5rem;
            background-color: #abb8c3;
            border:none;
        }
    }

`;
const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', template_jp0sipm, form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return <Contianer>
        <FormContainer>
            <h1>Contact Me Form</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Name' />
                <input type="email" name="user_email" placeholder='Email' />
                <input type="tel" name="user_phone" placeholder='Phone' />
                <textarea name="message" placeholder='Message' />
                <input type="submit" value="Send" className='submit' />
            </form>
        </FormContainer>
    </Contianer>
}

export default Form
