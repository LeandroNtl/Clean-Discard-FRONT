import LayoutContainer from './styles';

interface LayoutProps {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    );
    
};

export default Layout;