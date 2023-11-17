import Container from '../../components/Container';
import { AuthLayout } from '../../components/Layouts';
import { Outlet } from 'react-router-dom';

const Auth = () => {

    return (
        <AuthLayout>
            <Container $width="100%" $height="100%" $bg="#ffffff" $area="form">
                <Outlet />
            </Container>
        </AuthLayout>
    );

};

export default Auth;