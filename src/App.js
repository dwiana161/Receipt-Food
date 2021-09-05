import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Header />
      <Category />
      <Trending />
    <Footer />
    </div>
  );
}

export default App;
