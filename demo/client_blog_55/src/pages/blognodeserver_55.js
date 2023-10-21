import { useState,useEffect } from "react";

let api_url = `http://localhost:5000/api/card_55`

const BlogNodeServer_55 = () =>{
    const[blogs, setBlogs] = useState([]);

    const fetchBlogsFromNodeServer = async () => {
        try{
            const response = await fetch(api_url);
            const data = await response.json();
            console.log('blogs data',data);
            
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchBlogsFromNodeServer();
    },[]);

    return (
        <div>
            BlogNodeServer_55
        </div>
    )
}

export default BlogNodeServer_55;