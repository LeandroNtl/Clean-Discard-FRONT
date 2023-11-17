import { styled } from 'styled-components';

const LayoutContainer = styled.div`

    max-width: 100vw;
    min-height: 100vh;

    display: grid;

    grid-template-columns: 4fr 8fr;
    grid-template-rows: 9fr 1fr;

    grid-template-areas: 
        "side form"
        "footer footer";
    
    background-color: #000000;
`;

export default LayoutContainer;