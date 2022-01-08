import styled from 'styled-components';
import { Input } from '../styles/input';
import Logo from './../images/Logo.svg';
import ProfilePic from './../images/profile.jpg';
import MenuIcon from './../images/icon_hamburguer.svg';
import Search from './../images/icon_search.svg';
import { useEffect, useState, useRef } from "react";
import Menu from './Menu';
import SaveProject from './SaveProject';



const ProfileContainer = styled.div`

        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: 63px;
        border-radius: 8px;
        padding: 12px;

        :hover {
            background: rgba(255, 255, 255, 0.08);

        }

        img {
        border-radius: 100%;
        height: 32px;
        width: 32px;
        object-fit: cover;
        }

        span {
            font-size: 16px;
            color: white;
            letter-spacing: 0;
            font-size: 16px;
            opacity: 1;
        }
        
        @media screen and (max-device-width : 1100px) {
            margin-left: 0px;
        }
`



export default function ProfileNav() {
    
    return(
        <ProfileContainer>
                <img src = {ProfilePic} />
                <span>Harry</span>
        </ProfileContainer>

    )
}