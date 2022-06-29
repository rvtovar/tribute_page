import george from './images/george.jpg';
import './App.css';

import Header from './Components/Header';
import TributeInfo from './Components/TributeInfo';
import ImageDiv from './Components/ImageDiv';

function App() {
  return (
    <div className="main">
      {/* This is the title of the tribute page */}
      <Header name="Americas First President" />

      {/* This is a div containing an image and img caption */}
      <ImageDiv
        caption='Painting of Americas First President "Geroge Washington"'
        image={george}
      />
      <TributeInfo url="https://en.wikipedia.org/wiki/George_Washington" />
    </div>
  );
}

export default App;
