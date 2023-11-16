import { Outlet } from 'react-router-dom';
import Layout from '../../components/Layouts';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Aside from '../../components/Aside';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Page = () => {

    return (
        <Layout>
            <Header>
                <h1>Page</h1>
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