import { FooterContainer, FooterLink, FooterText } from './styles';
import { GitHub, Instagram, YouTube, WhatsApp } from '@mui/icons-material';


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
        },
        {
            name: 'WhatsApp',
            url: '/',
            icon: <WhatsApp />
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
                       <FooterText>
                           {item.name}
                        </FooterText>
                    </FooterLink>
                );
            })}
            <FooterText>
                © 2021 All rights reserved.
            </FooterText>
        </FooterContainer>
    );

};

export default Footer;