import { ProfileContainer, ProfileBox, ProfileDropdown, ProfileDropdownItem, ProfileDropdownLink } from './styles';
import { useState } from 'react';
//import { useAuth } from '../../hooks/useAuth';
// importar icones de user e logout do @mui/icons-material
import { AccountCircle, Login } from '@mui/icons-material';

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

    //const { user, signOut } = useAuth();
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
                                <ProfileDropdownLink to={item.path}>
                                    {item.name}
                                    {item.icon && item.icon}
                                </ProfileDropdownLink>
                            </ProfileDropdownItem>
                        );
                    })}
                </ProfileDropdown>
            </ProfileBox>
        </ProfileContainer>
    );

};

export default Profile;