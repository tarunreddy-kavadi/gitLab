
import { css } from 'styled-components'
const sizes = {
    mobile: '320px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
}

export const mobile = (props) => {
    return css`
        @media all and (max-width:${sizes.mobile}){
              ${props}
        }
    `
}
export const mobileL = (props) => {
    return css`
        @media all and (max-width:${sizes.mobileL}){
              ${props}
        }
    `
}
export const tablet = (props) => {
    return css`
    @media all and (max-width:${sizes.tablet}){
        ${props}
    }
 `
}
export const laptop = (props) => {
    return css`
    @media all and (max-width:${sizes.laptop}) {
        ${props}
    }
    `
}
export const desktop = (props) => {
    return css`
    @media all and (max-width:${sizes.desktop}){
        ${props}
    }
    `
}
