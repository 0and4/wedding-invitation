import "./App.css";
import Main from "./component/Main";
import Invitation from "./component/Invitation";
import Calendar from "./component/Calendar";
import Location from "./component/Location";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div className="App">
      <main>
        <Main></Main>
        <Invitation></Invitation>
        <Calendar></Calendar>
        <Location></Location>
        <Gallery></Gallery>
      </main>
    </div>
  );
}

export default App;
