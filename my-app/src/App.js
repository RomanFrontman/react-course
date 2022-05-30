import './App.css';
import { Header } from './Header.js';
import { Content } from './Content.js';
import { Footer } from './Footer.js';
import { Feedback } from './Feedback.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="Roman Chaus"/>
        <Content></Content>
        <Feedback></Feedback>
        <Footer name="Roman Chaus"/>
      </header>

    </div>
  );
}

export default App;