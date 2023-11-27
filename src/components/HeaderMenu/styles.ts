import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`

    display: none;

    @media (max-width: 768px) {
        
        width: 100%;
        height: 100%;
    
        margin-right: 4rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }

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

    @media (max-width: 768px) {

        justify-content: center;
        align-items: center;
        margin-top: 0;
        padding-left: 0;
        

    }

`;

const MenuText = styled.p`
    
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 768px) {
            
        display: none;

    }

`;

export { MenuContainer, MenuLinks, MenuText };