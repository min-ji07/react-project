import {
  BrowserRouter,
  // browserRouter란 우리가 아는 url 처럼 생김
  // HashRouter는 조금 다르게 생김 보통은 browserRouter 사용
  Router, // Router 사용하면 자꾸 오류남..ㅠ
  Route,
  Switch,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Deteil";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/dust">
        <h1>Dust</h1>
      </Route>
      <Route path="/movie/:id">
        {/* :id는 해당 값을 받을거라고 알려줌(변수명은 상관없음) */}
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    </BrowserRouter>
    )
}

export default App;
