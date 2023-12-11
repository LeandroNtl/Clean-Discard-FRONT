import { ProfileContainer, ProfileBox, ProfileDropdown, ProfileDropdownItem, ProfileDropdownLink } from './styles';
import { useState, useEffect } from 'react';
import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { useCookies } from 'react-cookie';
import tokenValidator from '../../services/tokenValidator';
import { StyledLink } from '../../pages/Home';

const links = [
    {
        name: 'Perfil',
        path: '/profile'
    },
    {
        name: 'login',
        path: '/auth/login',
        icon: <Login />
    }

];

const Profile = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState(0);

    const handleLogout = () => {
        setCookie('token', '', { path: '/' });
    }
    
    useEffect(() => {

        const verifyToken = async () => {
            if (cookies.token) {
                const token = cookies.token;
                const isValid = await tokenValidator(token);
                if (!isValid) {
                    removeCookie('token', { path: '/' });
                }

                setUsername(isValid.name);
                setRole(isValid.role);

            }
        }
        
        verifyToken();

        if (!cookies.token) {
            links[1] = {
                name: 'login',
                path: '/auth/login',
                icon: <Login />
            }
        } else {
            links[1] = {
                name: 'logout',
                path: '/auth/login',
                icon: <Logout />
            }
        }

    }, [cookies.token, removeCookie]);

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    if (role == 1) {
        links[0] = {
            name: 'Admin',
            path: '/admin/solicitations'
        }
    } else {
        links[0] = {
            name: 'Perfil',
            path: '/profile'
        }
    }

    return (
        <ProfileContainer>
            <h4 style={{ color: '#008000'}}>{username ? 'Olá, ' + username : <StyledLink to="/auth/login">Faça login</StyledLink>}</h4>
            <ProfileBox onClick={toggleProfileDropdown}>
                <AccountCircle sx={{ fontSize: 40 }} />
                <ProfileDropdown $isOpen={isProfileDropdownOpen}>
                    {links.map((item, index) => {
                        return (
                            <ProfileDropdownItem key={index}>
                                { item.name == 'logout' ? (
                                    <ProfileDropdownLink to={item.path} onClick={handleLogout}>
                                        {item.icon}
                                        {item.name}
                                    </ProfileDropdownLink>
                                ) : (
                                    <ProfileDropdownLink to={item.path}>
                                        {item.icon}
                                        {item.name}
                                    </ProfileDropdownLink>
                                )}
                            </ProfileDropdownItem>
                        );
                    })}
                </ProfileDropdown>
            </ProfileBox>
        </ProfileContainer>
    );

};

export default Profile;