import { ProfileContainer, ProfileBox, ProfileDropdown, ProfileDropdownItem, ProfileDropdownLink } from './styles';
import { useState, useEffect } from 'react';
import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { useCookies } from 'react-cookie';

const links = [
    {
        name: 'Profile',
        path: '/profile'
    },
    {
        name: 'Help',
        path: '/help'
    },
    {
        name: 'Settings',
        path: '/settings'
    },
    {
        name: 'login',
        path: '/auth/login',
        icon: <Login />
    }

];

const Profile = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleLogout = () => {
        setCookie('token', '', { path: '/' }); // apenas para remover o alerta de variável não utilizada
        removeCookie('token', { path: '/' });
    }

    useEffect(() => {
        
        if (cookies.token) {
            links.pop();
            links.push({
                name: 'logout',
                path: '/',
                icon: <Logout />
            });
        } else {
            links.pop();
            links.push({
                name: 'login',
                path: '/auth/login',
                icon: <Login />
            });
        }

    }, [cookies.token]);

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <ProfileContainer>
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