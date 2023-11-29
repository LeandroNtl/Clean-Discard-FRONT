import { styled } from 'styled-components';

const LayoutContainer = styled.div`

    max-width: 100vw;
    min-height: 100vh;

    display: grid;

    grid-template-columns: 4fr 8fr;
    grid-template-rows: 0.5fr 5.5fr 1fr;

    grid-template-areas:
        "header header" 
        "side form"
        "footer footer";
    
    background-color: #f5f5f5;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.5fr 2fr 1fr;

        grid-template-areas:
            "header" 
            "side"
            "form"
            "footer";
    }

`;

export default LayoutContainer;