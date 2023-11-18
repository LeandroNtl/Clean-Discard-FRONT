import { styled } from 'styled-components';
import ContainerProps from './interface';

const StyledContainer = styled.div<ContainerProps>`

    grid-area: ${props => props.$area || 'none'};

    width: ${props => props.$width || '50%'};
    height: ${props => props.$height || 'auto'};

    gap: ${props => props.$gap || '0'};
    padding: ${props => props.$padding || '0'};

    display: flex;
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

    &::-webkit-scrollbar {
        display: ${props => props.$scrollbar || 'none'};
    }
    
`;


export default StyledContainer;
