import './App.css'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import appData from './appData.json'


const renderedContent = appData.map(({ color, text, bg }, i) => <Content key={i} color={color} text={text} bg={bg} />)

function App() {
  return (
    <>
      <Header />
      <div id="app-content">
        {renderedContent}
      </div>
      <Footer />
    </>
  );
}

export default App;
