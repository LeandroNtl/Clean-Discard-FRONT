import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AuthLayout } from '../../components/Layouts';
import { Outlet } from 'react-router-dom';
import Profile from '../../components/Profile';
import PageTitle from '../../components/PageTitle';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';

const Auth = () => {

    const location = useLocation();

    const locations = [
        {
            pathname: '/auth/login',
            title: 'faça login',
            message: 'Já possui uma conta?'
        },
        {
            pathname: '/auth/register',
            title: 'cadastre-se',
            message: 'Não possui uma conta?'
        }
    ];

    return (
        <AuthLayout>
            <Header>
                <PageTitle />
                <Profile />
            </Header>
            <Container $width="100%" $height="100%" $bg="#008000" $area="side" $direction="column" $justify="flex-start" $padding="5rem 0" $resposive={{ $padding: "1rem", $width: "100%", $bg:"#008000" }}>
                <Logo />
                <Container $width="100%" $height="100%" $bg="#008000" $area="links" $direction="column" $justify="flex-start" $padding="0.5rem">
                    {locations.map((item) => {
                        if (item.pathname !== location.pathname) {
                            return (
                                <Container $width="100%" $height="100%" $gap="0.5rem" key={item.pathname} $color="#ffffff">
                                    {item.message} 
                                    <Link key={item.pathname} to={item.pathname} style={{ color: '#ffffff', textDecoration: 'none' }}>
                                        {item.title}
                                    </Link>
                                </Container>   
                            );
                        }
                    })}
                </Container>
            </Container>
            <Container $width="100%" $height="100%" $bg="#ffffff" $area="form" >
                <Container $width="60%" $radius="0.5rem" $shadow="0 0.5rem 1rem #008000" $padding="1rem" $resposive={{ $padding: '1rem', $margin: '1rem', $width: "80%", $shadow:"0 0.5rem 1rem #008000" }} >
                    <Outlet />
                </Container>
            </Container>
            <Footer />
        </AuthLayout>
    );

};

export default Auth;