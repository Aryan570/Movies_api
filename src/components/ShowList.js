import { Link } from "react-router-dom";
function ShowList(props) {
    const { shows } = props;
  
    return (
      <div className="mx-48">
        <h1 className="text-center text-cyan-400 text-2xl my-6"><strong>List of Shows</strong></h1>
        {shows.map(shw => (
          <div key={shw.show.id}>
            <h2 className=" text-cyan-400 mt-3"><strong>{shw.show.name}</strong></h2>
            {shw.show.image!==null && <img src={shw.show.image.medium} alt={shw.show.name} />}
            <p className="mt-4">{shw.show.summary}</p>
            <Link to={`/show/${shw.show.id}`}>
              <button className="border-cyan-400 bg-cyan-400 p-1 rounded-2xl px-2 text-white my-4">View Summary</button>
              <hr/>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  export default ShowList