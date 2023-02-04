import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import './App.css';
import { Container} from 'react-bootstrap';
import MovieGallery from './components/MovieGallery';
import MyList from './components/MyList';



function App() {
  return (
  
  <Container fluid>
    <NavBar/>
    <MyList/>
    <MovieGallery query='Lord of the Rings'/>
    <MovieGallery query='James Bond'/>
    <MovieGallery query='Star Wars'/>
    <MovieGallery query='Pirates of the Caribbean'/>
    <Footer/>
    
  </Container>

  );
}

export default App;
