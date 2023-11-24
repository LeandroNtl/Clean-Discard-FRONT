import { MenuContainer, MenuLinks, MenuText } from './styles';
import { Home, Info, Phone, Map } from '@mui/icons-material';

const Menu = () => {

    const menuLinks = [
        {
            name: 'Home',
            url: '/',
            icon: <Home />
        },
        {
            name: 'Discard Points',
            url: '/discard-points',
            icon: <Map />
        },
        {
            name: 'About',
            url: '/about',
            icon: <Info />
        },
        {
            name: 'Contact',
            url: '/contact',
            icon: <Phone />
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

export default Menu;