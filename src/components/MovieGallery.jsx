import { Component } from "react";
import { Card } from "react-bootstrap";

class MovieGallery extends Component {
    state = {
        movie: []
    };

    fetchMovies = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=48442ee&s=${this.props.query}`);
            if (response.ok) {
                let data = await response.json();
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
            <div>
                {this.state.movie.map(movie => (
                    <Card key={movie.imdbID} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={movie.Poster} />
                    </Card>
                ))}
            </div>
        );
    }
}

export default MovieGallery;