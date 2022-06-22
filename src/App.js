import george from './images/george.jpg';
import './App.css';

function App() {
  return (
    <div className="main">
      {/* This is the title of the tribute page */}
      <h1 id="title">George Washington</h1>

      {/* This is a div containing an image and img caption */}
      <div id="img-div">
        <img src={george} id="image" />
        <p id="img-caption">A painting of George Washington</p>
      </div>

      {/* This is tribtue info div containing p tags */}
      <div id="tribute-info">
        <p>
          George Washington (February 22, 1732[b] – December 14, 1799) was an
          American military officer, statesman, and Founding Father who served
          as the 1st president of the United States from 1789 to 1797. Appointed
          by the Continental Congress as commander of the Continental Army,
          Washington led the Patriot forces to victory in the American
          Revolutionary War and served as the president of the Constitutional
          Convention of 1787, which created the Constitution of the United
          States and the American federal government. Washington has been called
          the "Father of the Nation" for his manifold leadership in the
          formative days of the country.[10]
        </p>

        <p>
          Washington's first public office was serving as the official surveyor
          of Culpeper County, Virginia from 1749 to 1750. Subsequently, he
          received his initial military training (as well as a command with the
          Virginia Regiment) during the French and Indian War. He was later
          elected to the Virginia House of Burgesses and was named a delegate to
          the Continental Congress. Here he was appointed Commanding General of
          the Continental Army. With this title, he commanded American forces
          (allied with France) in the defeat and surrender of the British at the
          Siege of Yorktown during the American Revolutionary War. He resigned
          his commission after the Treaty of Paris was signed in 1783.
        </p>

        <p>
          Washington played an indispensable role in adopting and ratifying the
          Constitution of the United States. He was then twice elected president
          by the Electoral College unanimously. As president, he implemented a
          strong, well-financed national government while remaining impartial in
          a fierce rivalry between cabinet members Thomas Jefferson and
          Alexander Hamilton. During the French Revolution, he proclaimed a
          policy of neutrality while sanctioning the Jay Treaty. He set enduring
          precedents for the office of president, including the title "Mr.
          President", and swearing the Oath of Office on the Bible. His Farewell
          Address is widely regarded as a pre-eminent statement on
          republicanism.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/George_Washington"
          id="tribute-link"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}

export default App;
