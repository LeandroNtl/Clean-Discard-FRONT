import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`

    grid-area: logo;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

`;

const LogoImage = styled.img`

    width: 30px; 
    height: 30px;

    filter: brightness(0) invert(1);

`;

const LogoTitle = styled.h1`

    font-size: 1.6rem;
    font-weight: 500;

    margin-top: 0.5rem; 

`;

const LogoLink = styled(Link)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: #ffffff;

    &:hover {
        color: #008000;
    }

`;

export { LogoContainer, LogoImage, LogoTitle, LogoLink };