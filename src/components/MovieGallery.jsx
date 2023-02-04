import { Component } from "react";
import { Card, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

class MovieGallery extends Component {
    state = {
        movie: [],
        interval: null
    };

    fetchMovies = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=48442ee&s=${this.props.query}`);
            if (response.ok) {
                let data = await response.json();
                this.setState({ movie: data.Search });
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    componentDidMount(){
        this.fetchMovies()
    }
    
    render() {
        return (
            <Container fluid>
                <h3 style={{fontSize: '22px'}} className="text-white mt-3">{this.props.query}</h3>
                <Carousel className="d-flex  align-items-center mb-5" interval={this.state.interval}>
                    <CarouselItem>
                        <Row>
                            {this.state.movie.splice(0,6).map(movie => (
                            <Card className="mx-1 bg-transparent" key={movie.imdbID} style={{ width: "214.02px", height: "120.5px" }}  >
                                <Card.Img className="img-fluid" style={{width: '100%', objectFit: 'contain'}}  variant="top" src={movie.Poster} />
                            </Card>
                          ))}
                        </Row>
                    </CarouselItem>

                    <CarouselItem>
                        <Row>
                            {this.state.movie.map(movie => (
                            <Card className="mx-1 bg-transparent" key={movie.imdbID} style={{ width: "214.02px", height: "120.5px" }}  >
                                <Card.Img className="img-fluid" style={{width: '100%', objectFit: 'contain'}}  variant="top" src={movie.Poster} />
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

