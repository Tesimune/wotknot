import './App.css';
import NewsCard from './components/Cards/NewsCard';
import Header from './components/Header/Header';
import News from './components/NewsDisplay/News';


function App() {
    const newsCardStyle = {
    backgroundColor: "gray",
    width: "auto"
  };

  return (
    <div className="App">
       <Header/>
       <News/> 
       <div style={newsCardStyle}>
       <NewsCard/>
       </div>
    </div>
  );
}

export default App;
