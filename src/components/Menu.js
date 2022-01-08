import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components"
import useWindowSize from "../functions/useWindowSize";

import CodeIcon from "./../images/icon_code.svg";
import CommunityIcon from "./../images/icon_users.svg"
import ProfileNav from "./ProfileNav";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 18vw;

    span:nth-child(1) {
        font-size: 12px;
        letter-spacing: 0.4em;
        color: white;
    }


`

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    color: white;

    :hover {
        div {
            background: rgba(80, 129, 251, 0.64);

        }
        span {
            opacity: 72%;
        }
    }

    div {
        height: 48px;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({active}) => (active == "true" ? "#5081FB" : "rgba(80, 129, 251, 0.16)")};
        border-radius: 16px;

        img {
            display: inline;
            opacity: ${({active}) => (active == "true" ? "1" : "0.56")};
        }
    }

    span {
        letter-spacing: 0;
        font-size: 16px;
        opacity: ${({active}) => (active == "true" ? "1" : "0.56")};

    }
`

const ProfileContainer = styled.div`
    margin: 1.2rem 0;

    hr {
        margin-bottom: 2rem;
        opacity: 0.08;
    }
`

export default function Menu({setClickMenu}) {
    const width = useWindowSize()[0];

    const location = useLocation();
    const pathname = location.pathname;
    
    return(
        <MenuContainer>
            <span>MENU</span>
            <NavLink to="/" onClick = {() => {setClickMenu(false)}}>
                <MenuItem active = {pathname === "/" ? "true" : "false"}>
                    <div>
                        <img src = {CodeIcon} />
                    </div>
                    <span>Editor de código</span>
                </MenuItem>
            </NavLink>

            <NavLink to="/community" onClick = {() => {setClickMenu(false)}}>
                <MenuItem active = {pathname === "/community" ? "true" : "false"}>
                    <div>
                        <img src = {CommunityIcon} />
                    </div>
                    <span>Comunidade</span>
                </MenuItem>
            </NavLink>

            {width <= 1100 && 
            <ProfileContainer>
                <hr></hr>
                <ProfileNav />
            </ProfileContainer>
            }


        </MenuContainer>
    )
}