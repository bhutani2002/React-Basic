import List from "./List";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,setData}= useFetch();
    return (
    <div className="home">
       {blogs && <List blogs={blogs} title="All Blogs!" setData={setData}/>}
    </div>  
    );
}
 
export default Home