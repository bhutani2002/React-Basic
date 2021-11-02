import { Link } from "react-router-dom";
const BlogList= ({blogs, title,setData})=>{
return(
    <div className="blog-list">
        <h2 className="blog-title">{title}</h2>
       {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            <Link to={`/Data/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            </Link>
        </div>
        
        ))}
    </div>)
    }

export default BlogList