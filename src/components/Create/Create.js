import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [pending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const blog = {title, body, author}
        setPending(true);

        fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setPending(false);
            navigate("/");
            console.log("New blog added");
        })
    }

     return(
        <div className="create">
            <h2>Add New Blog:</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    value={title}
                    required
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                />

                <label>Blog Author:</label>
                <input 
                    type="text" 
                    value={author}
                    required
                    onChange={(e)=> setAuthor(e.target.value)}
                />

                <button>{!pending ? 'Add Blog' : 'Adding blog'}</button>
            </form>
        </div>
    );
}

export default Create;