import { MenuContainer, MenuLinks } from './styles';
import { Home, Info, Map } from '@mui/icons-material';

const HeaderMenu = () => {

    const menuLinks = [
        {
            url: '/',
            icon: <Home style={{ color: '#008000' }} />
        },
        {
            url: '/discard-points',
            icon: <Map style={{ color: '#008000' }} />
        },
        {
            url: '/about',
            icon: <Info style={{ color: '#008000' }} />
        }
    ];

    return (
        <MenuContainer>
            {menuLinks.map((item, index) => {
                return (
                    <MenuLinks
                        key={index}
                        to={item.url}
                    >
                        {item.icon}
                    </MenuLinks>
                );
            })}
        </MenuContainer>
    );

};

export default HeaderMenu;