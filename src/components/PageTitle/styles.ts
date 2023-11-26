import { styled } from 'styled-components';

const PageTitleContainer = styled.div`

    width: 15rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0px 20px;

    @media (max-width: 768px) {
            
        display: none;

    }

`;

const PageTitleText = styled.h1`

    font-size: 1.6rem;
    font-weight: 500;

`;

export { PageTitleContainer, PageTitleText };