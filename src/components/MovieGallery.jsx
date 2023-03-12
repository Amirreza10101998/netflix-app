import { Component } from "react";
import { Card, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

class MovieGallery extends Component {
    state = {
        movies: [],
        interval: null,
        isLoading: true,
        error: false
    };

    fetchMovies = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_BE_URL}/medias`);
            if (response.ok) {
                let data = await response.json();
                this.setState({ movies: data, isLoading: false });
                console.log(data);
            }
        } catch (error) {
            this.setState({ error: true, isLoading: false });
            console.error(error);
        }
    };

    componentDidMount() {
        this.fetchMovies();
    }

    render() {
        return this.state.isLoading ? (
            <div className="d-flex align-items-center justify-content-center">
                <h3 className="text-white">Loading...</h3>
            </div>
        ) : this.state.error ? (
            <div className="d-flex align-items-center justify-content-center">
                <h3 className="text-white">Error!!!</h3>
            </div>
        ) : (
            <Container fluid>
                <h3 style={{ fontSize: '22px' }} className="text-white mt-3">{this.props.query}</h3>
                <Carousel className="d-flex  align-items-center mb-5" interval={this.state.interval}>
                    <CarouselItem>
                        <Row>
                            {this.state.movies.map(movie => (
                                <Card className="mx-1 bg-transparent" key={movie.id} style={{ width: "214.02px", height: "120.5px" }}>
                                    <Card.Img className="img-fluid" style={{ width: '100%', objectFit: 'contain' }} variant="top" src={movie.poster} />
                                </Card>
                            ))}
                        </Row>
                    </CarouselItem>
                </Carousel>
            </Container>
        );
    }
}

export default MovieGallery;
