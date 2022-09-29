import {
  BrowerRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      {/* Switch는 Route를 찾음(Route란 url) */}
      {/* <Switch> */}
        {/* home 화면으로 갈 Route / 유저가 url의 /에 있다면 home으로 이동*/}
        <Route path="/">
          <Home/>
        </Route>
      {/* </Switch> */}
    </Router>
  )
}

export default App;
