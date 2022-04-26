import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useFetch from "../Fetch/Fetch";


function BlogDetails(){
    const {id} = useParams();
    const navigate = useNavigate();
    const blogs =  useFetch('http://localhost:8000/blogs/' + id);

    const handleDelte = ()=>{
        fetch('http://localhost:8000/blogs/' + blogs?.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');
            console.log("Blog Deleted");
        })
    }
    return(
        <div>
            { blogs && 
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.body}</p>
                    <span>Written By: {blogs.author}</span>

                    <button onClick={handleDelte}>Delete</button>
                </article>
            }
        </div>
    )
}

export default BlogDetails;