import { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import useWindowSize from "../functions/useWindowSize";


const CommunityContainer = styled.section`
    display: flex;
    justify-content: space-between;
`

const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: center;
`

export default function Community() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/posts")
        .then (res => res.json())
        .then(res => setPosts(res))
    },[])
    

    const width = useWindowSize()[0];
    return (
        <>
        <Navbar />
        <CommunityContainer>
            {width>=1100 ? (<Menu />) : ""}
            <PostsContainer>
                {
                    posts && posts.map(
                        (post) => (
                            <PostCard post = {post} />
                        )
                    )
                }
            </PostsContainer>
        </CommunityContainer>
        </>
    )
}