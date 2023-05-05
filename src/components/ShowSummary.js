import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ShowSummary(props) {
    const navigate= useNavigate();
    function isObjEmpty (obj) {
        return Object.keys(obj).length === 0;
    }
    const{id}= useParams()
    const [sumary, setSummary] = useState({});
  
    useEffect(() => {
      (async()=>{
        await fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(data => setSummary(data));
      })();
    }, [id]);
    return (
      <div className="mx-48">
        <h1 className="text-cyan-400 text-2xl mt-5 text-center"><strong>{sumary.name}</strong></h1>
        {isObjEmpty(sumary) ?  <p className="text-cyan-400 text-2xl mt-6"><strong>Please Standby: we are getting summary</strong></p> : <div className="flex justify-center my-4"><img src={sumary.image.medium} alt={sumary.name} /></div>}
        <p className="text-left my-2">{sumary.summary}</p>
        <p className="font-bold">Type of Show: <strong className="text-cyan-400 font-serif">{sumary.type}</strong></p>
        <button className="bg-cyan-400 text-white rounded-xl p-1 my-2" onClick={()=> navigate(-1)}>Go Back</button>
      </div>
    );
  }
  export default ShowSummary