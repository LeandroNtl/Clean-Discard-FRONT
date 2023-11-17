import LayoutContainer from './styles';

interface LayoutProps {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {

    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
    
};

export default AuthLayout;