import "./App.css";
import Account from "./component/Account";
import GuestBook from "./component/GuestBook";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <main>
        <Main></Main>
        <Account></Account>
        <GuestBook></GuestBook>
      </main>
    </div>
  );
}

export default App;
