import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const endpoint = 'https://api.spaceflightnewsapi.net/v4/articles'


export const SingleNewsPage = () => {

    const params = useParams();

    const [article, setArticle] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getSingleNews()
    }, [])

    useEffect(() => {
        if(article !== null){
            setIsLoading(false);
        }
    }, [article])

    const getSingleNews = async () => {
        try {
            const res = await fetch(`${endpoint}/${params.id}/`);
            if (!res.ok) {
                throw new Error('Network connection not ok');
            }
            const data = await res.json();
            setArticle(data);
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    return (
        <Container>
            {isLoading && (
                <Spinner
                    variant="danger"
                    className="mt-3 m-auto"
                />
            )}
            {!isLoading && (
                <>
                    <p className="mt-3">Published by {article.news_site}</p>
                    <h2 className="mt-3">{article.title}</h2>
                    <img
                        src={article.image_url}
                        alt='Image'
                        style={{
                            width: '100%'
                        }}
                    />
                    <p className="mt-3">{article.summary}</p>
                    <div className="d-flex justify-content-center align-items-center bottom-switches">
                        <a href={article.url} className="btn btn-danger">See complete article</a>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </>
            )}
        </Container>

    )
}