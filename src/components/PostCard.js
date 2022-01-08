import styled from "styled-components"
import macButtons from "./../images/mac_buttons.svg"
import CommentIcon from "./../images/icon_comments.svg"
import LikeIcon from "./../images/icon_likes.svg"
import ProfileNav from "./ProfileNav"
import { useEffect, useState } from "react"



const CodeContainer = styled.div`
    width: calc(50vw - 9vw - 4rem);
    height: 366px;
    background-color: ${( {color} ) => (color)};
    border-radius: 8px;
    z-index: 999;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;


    @media screen and (min-device-width : 800px) and (max-device-width : 1100px) {
        width: calc(50vw - 4rem);
        height: 342px;
    }
    
    @media screen  and (max-device-width : 800px) {
        width: 90vw;
        height: 402px;
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
        
        @media screen and (min-device-width : 421px) and (max-device-width : ) {
            height: 100%;
        width: 100%;
        }

        @media screen  and (max-device-width : 420px) {
            height: 100%;
        width: 100%;
        }


        img{
            height: 16px;
            align-self: flex-start;
        }

        textarea {
            width: 100%;
            height: 234px;
            resize: none;
            font-family: Roboto Mono;
            color: white;
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

const InfoContainer = styled.div`
    color: white;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    span {
        opacity: 80%;
    }
`

const BaseContainer = styled.div`
    /* display: none; */
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    
`

const BaseButtons = styled.div`
        display: flex;
        gap: 18px;
        div {
            opacity: 1;
            padding: .6rem;
            display: flex;
            align-items: center;
            border-radius: 1rem;

            :hover {
                background: rgba(255, 255, 255, 0.08);
            }

            :active { 
                background: rgba(255, 255, 255, 0.16);
            }

            img {
                margin-right: 8px;
            }
        }
`

const BaseProfile = styled.div`
        display: flex;
        gap: 1rem;
        padding: .6rem;
        border-radius: 1rem;

        :hover {
            background: rgba(255, 255, 255, 0.08);
        }

        :active { 
            background: rgba(255, 255, 255, 0.16);
        }
        
        img {
            height: 24px;
            width: 24px;
            object-fit: cover;
            border-radius: 100%;
        }

        span {
            opacity: 1;
        }
`


const PostContainer = styled.div`
background-color: rgba(0, 0, 0, 0.16);
border-radius: 8px;

    @media screen and (min-device-width : 800px) {
        ${BaseContainer} {
            visibility: hidden;
        }

        :hover {
            ${BaseContainer} {
            visibility: visible;
            } 
        }

    }
`

export default function PostCard( {post} ) {

    const [profile, setProfile] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8000/users/${post.user_id}`)
            .then(res => res.json())
            .then(res => setProfile(res))
    }, [])


    return (
        <PostContainer>
            <CodeContainer color = {post.color}>
                <div>
                    <img src = {macButtons} />
                    <textarea readOnly>
                        {post.post_content}
                    </textarea>
                </div>
            </CodeContainer>
            <InfoContainer>
                <h2>{post.title}</h2>
                <span>{post.description}</span>
                <BaseContainer>
                    <BaseButtons>
                        <div>
                            <img src={CommentIcon} alt="comentários"/>
                            <span>9</span>
                        </div>
                        <div>
                            <img src={LikeIcon} alt="likes"/>
                            <span>9</span>
                        </div>
                    </BaseButtons>
                    <BaseProfile>
                        <img src={profile.profile_pic} />
                        <span>{profile.name}</span>
                    </BaseProfile>
                </BaseContainer>
            </InfoContainer>
        </PostContainer>
    )
}