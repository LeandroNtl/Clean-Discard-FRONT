import { styled } from 'styled-components';

const HeaderContainer = styled.header`

    grid-area: header;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ccc;

    background-color: #ffffff;
    color: #000000;

    @media (max-width: 768px) {

        justify-content: flex-end;

    }

`;

export default HeaderContainer;