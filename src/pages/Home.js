import { useEffect, useLayoutEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import styled, { useTheme } from 'styled-components'
import CodeEditor from '../components/CodeEditor'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import SaveProject from '../components/SaveProject'
import useWindowSize from '../functions/useWindowSize'
import Logo from './../images/Logo.svg'


const HomeContainer = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and  (max-device-width : 800px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`

function Home() {

    const [color, setColor] = useState('');
    const [content, setContent] = useState('');
    const width = useWindowSize()[0];
    const theme = useTheme();

    const [project, setProject] = useState(
        {
            "user_id":1,
            "post_content": "",
            "title": "",
            "description": "",
            "language": "Javascript",
            "color": theme.colors.firstCardColor
        }
    )
    
    return (
        <>
        <Navbar />
            
        <HomeContainer>
            {width>=1100 ? (<Menu />) : ""}
            <CodeEditor color = { color } project = { project } setProject = { setProject }/>
            <SaveProject setHomeColor = {setColor} project = { project } setProject = { setProject }/>
        </HomeContainer>
        </>
    )

}

export default Home