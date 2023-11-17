import { Outlet } from 'react-router-dom';
import { Layout } from '../../components/Layouts';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Aside from '../../components/Aside';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import PageTitle from '../../components/PageTitle';

const Page = () => {

    return (
        <Layout>
            <Header>
                <PageTitle />
                <Profile />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Aside>
                <Logo />
                <Menu />
                <Footer />
            </Aside>
        </Layout>
    );

};

export default Page;