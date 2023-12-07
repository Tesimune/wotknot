import './App.css';
import NewsCard from './components/Cards/NewsCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MorePage from './components/MorePage/MorePage';
import News from './components/NewsDisplay/News';
import ShopDetail from './components/ShoppingDetails/ShopDetail';


function App() {
  return (
    <div className="App">
       <Header/>
       <News/> 
       <NewsCard/>
       <ShopDetail/>
       <MorePage/>
       <Footer/>
    </div>
  );
}

export default App;
