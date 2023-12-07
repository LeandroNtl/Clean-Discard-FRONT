import { styled } from 'styled-components';

const CarouselContainer = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

`;

const CarouselTitle = styled.h1`
    
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;

`;

const CarouselDescription = styled.p`

    font-size: 1.2rem;
    font-weight: 400;
    text-align: justify;

    padding: 1rem;

`;

export { CarouselTitle, CarouselDescription, CarouselContainer };