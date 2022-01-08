import styled from 'styled-components';
import { Input } from '../styles/input';
import Logo from './../images/Logo.svg';
import ProfilePic from './../images/profile.jpg';
import MenuIcon from './../images/icon_hamburguer.svg';
import CloseIcon from './../images/icon_close.svg';
import Search from './../images/icon_search.svg';
import { useEffect, useState, useRef } from "react";
import Menu from './Menu';
import ProfileNav from './ProfileNav';
import useWindowSize from '../functions/useWindowSize';
import { useLocation } from 'react-router-dom';




const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;


`
const SearchInput = styled(Input)`
    height: 56px;
    width: 50vw;

    @media screen and (max-device-width : 421px) {
        width: 75vw;
    }

`


const ResponsiveNav = styled.div`
        display: none;
        margin-left: 0.8rem;
        @media screen and (max-device-width : 1100px) {
            display: flex;
            position: relative;
            gap: .8rem;
            align-items:center;
        }
`

const SearchImg = styled.img`
    @media screen and (max-device-width : 1100px) {
            display: none;
        }

    @media screen and (max-device-width : 421px) {
        display: inline;
        }

`

const MenuImg = styled.div`
    transition: all 1s ease-out;
    padding: 12px;
    border-radius: 1rem;

    :hover {
        background-color: rgba(80, 129, 251, 0,08);

    }

    :active, :focus {
        background: rgba(80, 129, 251, 0,16);

    }

    img {  
    @media screen and (max-device-width : 1100px) {
        
     }
    }
`

const MenuContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: #2D415B;
    padding: 1.5rem;
    border-radius: 8px;
    width: 15rem;
    height: calc(100vh - 56px - 5vw - 4rem);
    min-height: 20rem;
    z-index: 99999;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 30px 90px 15px;
`


export default function Navbar() {

    
    const [clickSearch, setClickSearch] = useState(false);
    const [clickMenu, setClickMenu] = useState(false);
    
    let windowRef = useRef();
    
    useEffect(() => {
        let handler = (event) => {
                {if(windowRef.current && !windowRef.current.contains(event.target)){
                  setClickMenu(false)
                }}
                }
        clickMenu && document.addEventListener("click", handler);
    
        return () => {
            clickMenu && document.removeEventListener("click", handler)
        }
    },[clickMenu])

    const width = useWindowSize()[0];

    return(
        <>
        <NavbarDiv>
            {!clickSearch && <img src = {Logo} />}
            {(width > 423 || clickSearch) && <SearchInput type="text" placeholder='Busque por algo'></SearchInput>}
            {width >= 1100 ? <ProfileNav /> : ""}
            <ResponsiveNav>
                <SearchImg src = {!clickSearch ? Search : CloseIcon} alt="Busca" onClick = {() => {setClickSearch(!clickSearch)}}/>
            {!clickSearch &&                
                <div  ref = {windowRef}>
                    <MenuImg>
                        <img src = {!clickMenu ? MenuIcon : CloseIcon} alt = "Menu" onClick = {() => {setClickMenu(!clickMenu) }}/>
                    </MenuImg>
                    {clickMenu &&
                    <MenuContainer>
                        <Menu setClickMenu = {setClickMenu}/>
                    </MenuContainer>
                    }
                </div>}
            </ResponsiveNav>
        </NavbarDiv>
        </>
    )
}