/*import Article from "./components/Article";

function App() {
  return (
    <div>
      <Article
        title={'Football bets'}
        content={'Determine your primary choise'}
      />
    </div>
  );
}
*/
import Headers from "./myComponents/Headers"
import Bodies from "./myComponents/Bodies"

const App = () => {

  const onClickButton = () => {
    alert();
  }

  return (
    <div>
      <Headers/>
      <Bodies/>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
}

export default App;
