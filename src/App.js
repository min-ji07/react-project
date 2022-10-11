import {
  BrowserRouter as Router,
  // browserRouter란 우리가 아는 url 처럼 생김
  // HashRouter는 조금 다르게 생김 보통은 browserRouter 사용
  // Router 사용하면 자꾸 오류남..ㅠ
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import MovieHome from "./routes/MovieHome";
import Detail from "./routes/Deteil";
import Todo from "./Todo";
import Coin from "./Coin";
import CleanUp from "./CleanUp";


function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Switch>
        <Route path="/dust">
          <h1>hi my nick name is dust!</h1>
        </Route>
        <Route path="/todo">
          <Todo/>
        </Route>
        <Route path="/coin">
          <Coin/>
        </Route>
        <Route path="/cleanup">
          <CleanUp/>
        </Route>
        <Route path="/movieHome">
          <MovieHome />
        </Route>
        <Route path="/movie/:id">
          {/* :id는 해당 값을 받을거라고 알려줌(변수명은 상관없음) */}
          <Detail/>
        </Route>
        {/* ..? 홈이 제일 밑에 있어야 다른 url이 적용됨.. 뭐지 ? */}
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    // </BrowserRouter>
    )
}

export default App;
