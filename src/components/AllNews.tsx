import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { SingleNews } from "./SingleNews";

const endpoint = 'https://api.spaceflightnewsapi.net/v4/articles'


export const AllNews = () => {

    const [articles, setArticles] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getNews();
    }, [])

    useEffect(() => {
        if (articles !== null) {
            setIsLoading(false)
        }
    }, [articles])


    const getNews = async () => {
        try {
            const res = await fetch(endpoint);
            if (!res.ok) {
                throw new Error('Network connection not ok');
            }
            const data = await res.json();
            setArticles(data.results);
        } catch (err) {
            console.error('Error: ', err)
        }
    }


    return (
        <Container>
            <Row>
                {isLoading && (
                    <Spinner
                        variant="danger"
                        className="mt-3 m-auto"
                    />
                )}
                {!isLoading && (
                    articles.map((item: any) => {
                        return (
                            <Col xs={12} md={6} lg={4} xl={3} key={item.id}>
                                <SingleNews news={item} />
                            </Col>
                        )
                    })
                )}
            </Row>
        </Container>
    )
}