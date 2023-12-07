import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

interface ProfileDropdownProps {
    $isOpen: boolean;
}

const ProfileContainer = styled.div`

    width: 10rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
    
`;

const ProfileBox = styled.div`

    width: 35%;
    height: 100%;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

`;

const ProfileDropdown = styled.div<ProfileDropdownProps>`

    position: absolute;
    top: 60px;
    right: 0px;

    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

    z-index: 100;

    &:before {
        content: '';
        position: absolute;
        top: -10px;
        right: 10px;

        width: 0;
        height: 0;

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }

    &:after {
        content: '';
        position: absolute;
        top: -11px;
        right: 10px;

        width: 0;
        height: 0;

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgba(0,0,0,0.1);
    }

    display: ${props => props.$isOpen ? 'flex' : 'none'};

`;

const ProfileDropdownItem = styled.div`

    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #f5f5f5;

    font-size: 14px;
    font-weight: 500;
    color: #000;

    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }

    &:last-child {
        border-bottom: none;
    }

`;

const ProfileDropdownLink = styled(Link)`

    text-decoration: none;
    color: #008000;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        color: #64F564;
    }

`;

export { ProfileContainer, ProfileBox, ProfileDropdown, ProfileDropdownItem, ProfileDropdownLink };