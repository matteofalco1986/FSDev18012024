import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FunctionalComponentProps {
    news?: any
}

export const SingleNews = (props: FunctionalComponentProps ) => {


    return (
        <Card>
            <Card.Img variant="top" src={props.news.image_url}/>
            <Card.Body>
                <Card.Title>{props.news.title}</Card.Title>
            </Card.Body>
            <Link to={"/" + props.news.id} className="btn btn-success">Vai all'articolo</Link>
        </Card>
    )
}