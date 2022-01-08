import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components"
import { BlueButton } from "../styles/button"
import { Input, Select, TextArea } from "../styles/input"

const SaveProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-width: 18vw;

    @media screen and (max-device-width : 800px) {
    width: 90vw;
  }



    div {
        display: flex;
        flex-direction: column;
        gap: 16px;

        span {
            color: white;
        }

        div {
            height: 56px;
            border-radius: 8px;
            padding: 8px;
            border: 1px solid white;

            button {
                cursor: pointer;
                width: 100%;
                height: 40px;
                background-color: ${({ color }) => (color)};
                border: none;
            }
        }
    }

    div:nth-of-type(2) {
        @media screen and (min-device-width : 421px) and (max-device-width : 800px) {
            display: grid;
            grid-template-columns: 1fr 1fr; 

            span {
                grid-column: span 2;
            }
        }
    }
`

const colorRelation = (color, theme) => {
    switch(color) {
        case 1: return(theme.colors.firstCardColor);
        case 2: return(theme.colors.secondCardColor);
        case 3: return(theme.colors.thirdCardColor);
        case 4: return(theme.colors.fourthCardColor);
        case 5: return(theme.colors.fifthCardColor); 
    }
}

export default function SaveProject( { project, setProject } ) {
    const [cardColorCode, setCardColorCode] = useState(1);
    const theme = useTheme();
    const [cardColor, setCardColor] = useState(theme.colors.firstCardColor)


    const handleColorClick = () => {
        cardColorCode == 5 ? setCardColorCode(1) : setCardColorCode(cardColorCode + 1)
    }

    useEffect(() => {
        setProject({...project, "color": colorRelation(cardColorCode, theme)})
    },[cardColorCode])

    useEffect(() => {console.log(project)}, [project])

    const saveProject = () => {
        fetch("http://localhost:8000/posts", {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => {console.log(res)})
    }

    return(
        <SaveProjectContainer color = {project.color}>
            <div>
                <span>SEU PROJETO</span>
                <Input type="text" placeholder='Nome do seu projeto' onChange = {(event) => {setProject({...project, "title": event.target.value })}}></Input>
                <TextArea placeholder="Descrição do seu projeto" onChange = {(event) => {setProject({...project, "description": event.target.value })}}></TextArea>
            </div>

            <div>
                <span>PERSONALIZAÇÃO</span>
                <Select placeholder="Javascript" onChange = {(event) => {setProject({...project, "language": event.target.value })}}>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="Javascript" selected>Javascript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C++">C++</option>
                    <option value="php">php</option>
                </Select>
                <div>
                    <button onClick = {handleColorClick}></button>
                </div>
            </div>

            <BlueButton onClick = {saveProject}>Salvar projeto</BlueButton>


        </SaveProjectContainer>
        
    )
}