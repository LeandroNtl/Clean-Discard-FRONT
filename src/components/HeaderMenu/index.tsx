import { MenuContainer, MenuLinks, MenuText } from './styles';
import { Home, Info, Phone, Map } from '@mui/icons-material';

const HeaderMenu = () => {

    const menuLinks = [
        {
            name: 'Home',
            url: '/',
            icon: <Home style={{ color: '#008000' }} />
        },
        {
            name: 'Discard Points',
            url: '/discard-points',
            icon: <Map style={{ color: '#008000' }} />
        },
        {
            name: 'About',
            url: '/about',
            icon: <Info style={{ color: '#008000' }} />
        },
        {
            name: 'Contact',
            url: '/contact',
            icon: <Phone style={{ color: '#008000' }} />
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
                        <MenuText>
                            {item.name}
                        </MenuText>
                    </MenuLinks>
                );
            })}
        </MenuContainer>
    );

};

export default HeaderMenu;