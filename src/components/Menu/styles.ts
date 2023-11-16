import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`

    grid-area: menu;

    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


`;

const MenuLinks = styled(Link)`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 1rem;
    padding-left: 2rem;
    gap: 1rem;
    color: #ffffff;

    &:hover {
        color: #64F564;
    }

`;

const MenuText = styled.p`
    
    font-size: 1rem;
    font-weight: 500;

`;

export { MenuContainer, MenuLinks, MenuText };