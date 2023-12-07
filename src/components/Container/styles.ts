import { styled } from 'styled-components';
import ContainerProps from './types';

const StyledContainer = styled.div<ContainerProps>`

    grid-area: ${props => props.$area || 'none'};

    width: ${props => props.$width || '50%'};
    height: ${props => props.$height || 'auto'};

    gap: ${props => props.$gap || '0'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.$margin || '0'};

    display: flex;
    flex-wrap: ${props => props.$wrap || 'nowrap'};
    flex-direction: ${props => props.$direction || 'row'};
    align-items: ${props => props.$align || 'center'};
    justify-content: ${props => props.$justify || 'center'};

    border-radius: ${props => props.$radius || '0'};
    border: ${props => props.$border || 'none'};

    overflow-x: ${props => props.$overflowX || 'none'};
    overflow-y: ${props => props.$overflowY || 'none'};

    background-color: ${props => props.$bg || 'transparent'};
    color: ${props => props.$color || '#000000'};
    box-shadow: ${props => props.$shadow || 'none'};

    flex-shrink: 0;

    background-image: ${props => props.$bgImage || 'none'};
    background-size: ${props => props.$bgSize || 'cover'};
    background-position: center;

    &::-webkit-scrollbar {
        display: ${props => props.$scrollbar || 'none'};
    }

    @media (max-width: 768px) {

        display: ${props => props.$resposive?.$display || 'flex'};

        width: ${props => props.$resposive?.$width || '100%'};
        height: ${props => props.$resposive?.$height || 'auto'};
        flex-direction: ${props => props.$resposive?.$direction || 'column'};
        align-items: ${props => props.$resposive?.$align || 'center'};
        justify-content: ${props => props.$resposive?.$justify || 'center'};
        padding: ${props => props.$resposive?.$padding || '0'};
        gap: ${props => props.$resposive?.$gap || '0'};
        border-radius: ${props => props.$resposive?.$radius || '0'};
        border: ${props => props.$resposive?.$border || 'none'};
        margin: ${props => props.$resposive?.$margin || '0'};
        background-color: ${props => props.$resposive?.$bg || 'transparent'};
        color: ${props => props.$resposive?.$color || '#000000'};
        box-shadow: ${props => props.$resposive?.$shadow || 'none'};
        overflow-x: ${props => props.$resposive?.$overflowX || 'none'};
        overflow-y: ${props => props.$resposive?.$overflowY || 'none'};
    }
    
`;


export default StyledContainer;
