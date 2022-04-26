import BlogList from "../Bloglist/Bloglist";
import useFetch from "../Fetch/Fetch";

const Home = () =>{

    const blogs = useFetch('http://localhost:8000/blogs');

     return(
         <div className={'home'}>
             {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        </div>
    );
}

export default Home;