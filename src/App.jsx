import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action-Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy-Moives" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror-Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic-Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

      
    </div>
  );
}

export default App;
