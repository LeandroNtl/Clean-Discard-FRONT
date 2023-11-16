import { LogoContainer, LogoImage, LogoTitle, LogoLink } from './styles';
import logo from '../../assets/icons/icon.png';

const Logo = () => {

    return (

        <LogoContainer>
            <LogoLink to="/">
                <LogoImage src={logo} alt="logo" />
                <LogoTitle>CleanDiscard</LogoTitle>
            </LogoLink>
        </LogoContainer>

    );

};

export default Logo;