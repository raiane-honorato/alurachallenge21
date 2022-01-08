import styled from "styled-components"
import { DarkButton } from "../styles/button"
import macButtons from "./../images/mac_buttons.svg"
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css';
import { useEffect, useState, useRef } from "react"

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-self: center;
`

const CodeContainer = styled.div`
    width: 50vw;
    height: 366px;
    background-color: ${ ( {color} ) => (color) };
    border-radius: 8px;
    padding: 2rem;

    
    @media screen and (min-device-width : 801px) and (max-device-width : 1100px) {
        width: 55vw;
    }

    @media screen and (min-device-width : 421px) and (max-device-width : 800px) {
        width: 90vw;
        height: 366px;
    }
    
    @media screen  and (max-device-width : 420px) {
        width: 90vw;
        height: 492px;
    }



    div {
        display: flex;
        flex-direction: column;
        padding: 16px;
        gap: 24px;
        background-color: #141414;
        border-radius: 8px;
        height: 100%;
        width: 100%;


        img{
            height: 16px;
            align-self: flex-start;
        }

        pre {
            white-space: pre-wrap;
        }

        code {
            width: 100%;
            height: 234px;
            resize: none;
            font-family: Roboto Mono;
            overflow: auto;
            white-space: pre-wrap;
            background-color: #141414;
            border: none;

            @media screen and (min-device-width : 421px) and (max-device-width : 800px) {
                max-width: 608px;
                height: 234px;
            }

            @media screen  and (max-device-width : 420px) {
                max-width: 247px;
                height: 360px;
            }

            :focus {
                outline: none !important;
            }
            ::-webkit-scrollbar {
                width: 5px;
                height: 5px;
            }
            ::-webkit-scrollbar-track {
                background: #141414;        
            }
            ::-webkit-scrollbar-thumb {
                background-color: white; 
            }
        }

    }

`

const Button = styled(DarkButton)`
    width: 100%;
    height: 56px;
`


export default function CodeEditor( {project, setProject} ) {
    
    const ref = useRef()

    useEffect(() => {hljs.highlightAll()}, [])

    return(
        <SessionContainer>
            <CodeContainer color = { project.color }>
                <div>
                    <img src = {macButtons} />
                    <pre>
                        <code 
                            className = {`hljs ${project.language}`} 
                            contenteditable = "true" 
                            ref = {ref} 
                            onKeyUp = {
                                (event) => {
                                    setProject({...project, "post_content": ref.current.innerText })
                                    }
                                    }
                        >
                            console.log(hello, world)
                        </code>
                    </pre>
                        
                </div>
            </CodeContainer>
            <Button onClick = {() => {hljs.highlightAll()}}>Visualizar com o highlight</Button>

        </SessionContainer>
    )

}