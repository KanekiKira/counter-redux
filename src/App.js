import ClickButton from "./components/ClickButton";
import ClickCounter from "./components/ClickCounter";
import ClickNull from "./components/ClickNull";
import style from '../src/index.module.css'

function App() {
  return (
   <>
   <div>
  <ClickCounter/>
  
  <ClickButton/>
  <ClickNull/>
  </div>

   </>
  );
}

export default App;
