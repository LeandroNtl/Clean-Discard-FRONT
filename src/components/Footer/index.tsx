import { FooterContainer, FooterLink, FooterText } from './styles';
import { GitHub, Instagram, YouTube } from '@mui/icons-material';


const Footer = () => {

    const socialMedia = [
        {
            name: 'GitHub',
            url: '/',
            icon: <GitHub />
        },
        {
            name: 'Instagram',
            url: '/',
            icon: <Instagram />
        },
        {
            name: 'YouTube',
            url: '/',
            icon: <YouTube />
        }
    ];

    return (
        <FooterContainer>
            {socialMedia.map((item, index) => {
                return (
                    
                    <FooterLink
                        key={index}
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                       {item.icon}
                    </FooterLink>
                );
            })}
            <FooterText>
                © 2023 All rights reserved.
            </FooterText>
        </FooterContainer>
    );

};

export default Footer;