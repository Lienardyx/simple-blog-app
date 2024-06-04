import { Link } from "react-router-dom";


const Card = (props) => {

    let carddata = props.carddata;
    const apiURL = 'http://localhost:3000/'

  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
        <Link to={`/blogsitesdiary/${carddata.id}`}>
        <div className="flex flex-col w-full">
            <img src={apiURL+carddata.image} alt="" />
            <div className="p-2">
                <h2 className="mt-1 text-xl text-left">{carddata.title}</h2>
                <p className="text-sm text-left opacity-70">{carddata.category}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Card