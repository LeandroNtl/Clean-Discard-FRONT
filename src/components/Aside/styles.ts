import { styled } from 'styled-components';

const AsideContainer = styled.aside`

    grid-area: aside;

    height: 100%;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 2fr 6fr 2fr;
    grid-template-areas: 
        "logo"
        "menu"
        "footer";

    background-color: #000000;
    color: #ffffff;

    @media (max-width: 768px) {

        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas: 
            "logo"
            "footer";
    }

`;

export default AsideContainer;