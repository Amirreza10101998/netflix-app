import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import './App.css';
import { Container} from 'react-bootstrap';
import MovieGallery from './components/MovieGallery';
import MovieList from './components/MyList'
import MyList from './components/MyList';



function App() {
  return (
  
  <Container fluid>
    <NavBar/>
    <MyList/>
    <MovieGallery query='Harry Potter'/>
    <Footer/>
    
  </Container>

  );
}

export default App;
