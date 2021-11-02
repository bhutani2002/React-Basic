import { useState} from "react";
const useFetch=()=>
{
    const [data, setData] = useState([
               { title: 'My First Blog', body: 'lorem ipsum...', author: 'mario', id: 1 },
               { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
               { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
           ]);
  return {data,setData}
}
export default useFetch;