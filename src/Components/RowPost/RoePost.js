import React,{useEffect,useState} from 'react'
import {imageUrl} from '../Constants'
import axios from '../Axios'
import './Rowpost.css'
function RoePost(props) {
    const [banner,setBanner]=useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setBanner(response.data.results)
        },[])
            
    });
    return (
      
        <div className="row">
            <h2>{props.title}</h2>
            <div className="rowpost">
                {banner.map((obj)=>{
                    return(
                        <img className={props.isSmall?"smallban":"ban"} src={`${imageUrl+obj.backdrop_path}`} alt="post" />
                    )

                })}
               
            </div>
        </div>
    )
}

export default RoePost
