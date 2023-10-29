import styled, { keyframes } from "styled-components";

// const scaleUp = keyframes`
// 0% { transform: translate(-50%, -50%) scale(0) }
// 60% , 100% { transform: translate(-50%, -50%)  scale(1) }
// `;

// const pulse = keyframes`
// 0% , 60% , 100% { transform: scale(1) }
// 80% { transform: scale(1.2) }
// `


// export const SpinnerFull = styled.span`
// width: 14rem;
// height: 14rem;
// border: 5px solid  var(--color-brand-600);
// border-radius: 50%;
// display:inline-block;
// box-sizing:border-box;
// position:relative;
// animation: ${pulse} 1s linear infinite;
// margin-top: 24rem;

// &:after{
//  content: '';
//     position:absolute;
//     width:48px;
//     height:48px;
//     border: 5px solid var(--color-brand-600);
//     border-radius: 50%;
//     display:inline-block;
//     box-sizing:border-box;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     animation:${scaleUp} 1s linear infinite;
// }
// `


const rotation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const Spinner = styled.span`
    width:15rem;
    height: 15rem;
    margin-top: 29rem;
    border: 5px solid var(--color-brand-600);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`

const FullPage = styled.div`
height: 100vh;
background-color: var(--color-grey-50);
display: flex;
align-items: cneter;
justify-content: center;
`



export default function SpinnerFull() {
    return (
        <FullPage>
            <Spinner />
        </FullPage>
    )
}