import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`

    grid-area: footer;

    height: 100%;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    background-color: #000000;

    @media (max-width: 768px) {

        flex-direction: row;
    
    }

`;

const FooterLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 1rem;
    padding: 1.5rem;
    color: #ffffff;

    &:hover {
        color: #64F564;
    }

    @media (max-width: 768px) {

        justify-content: center;

    }

`;

const FooterText = styled.p`

    width: 100%;

    text-align: center;

    font-size: 0.8rem;
    margin-left: 10px;

    color: #ffffff;

    @media (max-width: 768px) {

        margin-left: 0;
        padding: 1rem;

    }

`;

export { FooterContainer, FooterLink, FooterText };