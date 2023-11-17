import { PageTitleContainer, PageTitleText } from './styles';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {

    const location = useLocation();

    const locations = [
        {
            pathname: '/',
            title: 'Home'
        },
        {
            pathname: '/auth/login',
            title: 'Login'
        },
        {
            pathname: '/auth/register',
            title: 'Register'
        },
        {
            pathname: '/discard-points',
            title: 'Discard Points'
        }
    ];

    return (
        <PageTitleContainer>
            <PageTitleText>
                {locations.map((item) => {
                    if (item.pathname === location.pathname) {
                        return item.title;
                    } else {
                        return '';
                    }
                })}
            </PageTitleText>
        </PageTitleContainer>
    );

};

export default PageTitle;