import { useState, useEffect } from "react";

const Home = () => {
    const [data,setData] = useState(null);
    const url = '/api';

    useEffect(() => {
        fetch(url).then(res => {
            if(res.status === 200){
                return res.json();
            }
        }).then(data => setData(data))
        console.log("data " + data)
    },[])
    return(
        <div>
            <h1>{data ? data.channel : "null"}</h1>
            <h1>{data ? data.author : "null"}</h1>
            <h1>Hi</h1>
        </div>
    )
}

export default Home;