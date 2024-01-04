import { Link, useNavigate} from "react-router-dom";

function Card(props) {
  const {item } = props;


    return (
        <div className="service-card">
            <h1>{item.name}</h1>
            <Link state={item} to={"/services/"+item.id} ><button>more</button></Link>
        </div>
        )
}

export default Card