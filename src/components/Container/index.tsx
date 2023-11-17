import StyledContainer from './styles';
import ContainerProps from "./interface";

interface ContainerChildren {
    children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerChildren & ContainerProps) => {

    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    );

};

export default Container;