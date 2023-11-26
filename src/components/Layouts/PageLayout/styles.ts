import { styled } from 'styled-components';

const LayoutContainer = styled.div`

    max-width: 100vw;
    min-height: 100vh;

    display: grid;

    grid-template-columns: 2fr 10fr;
    grid-template-rows: 1fr 9fr;

    grid-template-areas: 
        "aside header"
        "aside main";

    @media (max-width: 768px) {

        height: 100vh;

        grid-template-columns: 1fr;
        grid-template-rows: 1fr 8fr 1fr;

        grid-template-areas: 
            "header"
            "main"
            "aside";

        background-color: red;
    }
        
`;

export default LayoutContainer;