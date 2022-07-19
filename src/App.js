import './App.css';
import {useSelector} from "react-redux"
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import SuccessPage from './components/pages/SuccessPage/SuccessPage';
import Onboarding from './components/pages/Onboarding/Onboarding';
import Game from './components/pages/Game/Game';

function App() {
  const words = useSelector(state => state.app)

  //<BackDrop words={words.wordsForApp}/>
  //<ModalWindow words={words.wordsForApp}/>
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/onboarding1" element={<Onboarding />} />
          <Route path="/onboarding2" element={<Onboarding />} />
          <Route path="/succesoboarding" element={<SuccessPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
