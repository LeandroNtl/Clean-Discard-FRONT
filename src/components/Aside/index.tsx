import AsideContainer from './styles';

interface AsideProps {
    children: React.ReactNode;
};

const Aside = ({ children }: AsideProps) => {

    return (
        <AsideContainer>
            {children}
        </AsideContainer>
    );
    
};

export default Aside;