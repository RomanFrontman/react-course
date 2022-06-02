import './App.css';
import { Header } from './Header.js';
import { Content } from './Content.js';
import { Footer } from './Footer.js';
import { Feedback } from './Feedback.js';

const studentsName = "Roman Chaus"

function App() {
  return (
    <div className="App">

        <Header name={studentsName}/>
        <Content/>
        <Feedback></Feedback>
        <Footer name={studentsName}/>


    </div>
  );
}

export default App;