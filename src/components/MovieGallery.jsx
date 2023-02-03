import { Component } from "react";

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
    
    render(){
        return(
            <div></div>
        )
    }
}

export default MovieGallery;