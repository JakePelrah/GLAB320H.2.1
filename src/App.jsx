import './App.css'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';


const contentData =
  [{ color: "blue", text: "This is my first React Application!" },
  { color: "red", text: "Wish me luck..." },
  { color: "green", text: "I think I've got it!" }
  ]



const renderedContent = contentData.map(({ color, text }) => <Content color={color} text={text} />)

function App() {
  return (
    <>
      <Header />
      {renderedContent}
      <Footer />
    </>
  );
}

export default App;
