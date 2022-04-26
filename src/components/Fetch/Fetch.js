import { useEffect, useState } from "react";

const useFetch = (url) =>{

    const [blogs, setBlogs] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then( res => res.json())
        .then( data => setBlogs(data));

    },[url]);

    return blogs;
}

export default useFetch;