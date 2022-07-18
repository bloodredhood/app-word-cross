import './App.css';
import TranslateArea from './components/TranslateArea';
import WordsArea from './components/WordsArea';
import {useSelector} from "react-redux"
import ProgressBar from './components/ProgressBar';
import ModalWindow from './components/ModalWindow'
import BackDrop from './components/BackDrop';


function App() {
  const words = useSelector(state => state.app)

  //<BackDrop words={words.wordsForApp}/>
  //<ModalWindow words={words.wordsForApp}/>
  return (
    <div className="App">
      <div className="container">
      <BackDrop words={words.wordsForApp}/>
      <ProgressBar words={words.wordsForApp}/>
      <TranslateArea words={words.wordsForApp} />
      <WordsArea words={words.wordsForApp} />
      </div>
    </div>
  );
}

export default App;
