import { MenuContainer, MenuLinks, MenuText } from './styles';
import { Home, Info, Map } from '@mui/icons-material';

const Menu = () => {

    const menuLinks = [
        {
            name: 'Início',
            url: '/',
            icon: <Home />
        },
        {
            name: 'Pontos de Descarte',
            url: '/discard-points',
            icon: <Map />
        },
        {
            name: 'Sobre',
            url: '/about',
            icon: <Info />
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