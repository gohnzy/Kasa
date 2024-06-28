import { Link } from "react-router-dom";

const Article = ({ datas }) => {


    return (
        <Link as="article" to={`/places/${datas.id}`}>
            <img src={datas.cover} alt='Cover'></img>
            <h2>{datas.title}</h2>
        </Link>
    );
}

export default Article



