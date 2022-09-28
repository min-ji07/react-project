// import logo from './logo.svg';
// import './App.css';
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
// 해당 파일내에서 다른 파일과 겹치는 클래스명을 사용해도 괜찮음
// html에서 랜덤 className으로 보여줄 것이기 때문에
import CleanUp from "./CleanUp";
import Todo from "./Todo";
import Coin from "./Coin";
import Movie from "./Movie";

function App() {
  // console.log("state 변경 / 리렌더링");
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // const iRunOnlyOne = () => {
    //   console.log("useEffect 안에 넣으면 한번만 실행");
    // }
    // useEffect(iRunOnlyOne, []);
    // 아래 코드와 같음
  useEffect(() => {
    console.log("useEffect 안에 넣으면 한번만 실행");
  }, []);
  // 근데 신기하게 뒤에 배열을 안넣어주니까 똑같이 계속 나옴 뭘까 -->
  // 아무것도 없는 배열을 넣었을 때 한번만 실행되는 것은
  // []안에 React가 확인할 내용이 없기 때문에 한번만 실행
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("search for", keyword);
    }
  }, [keyword]);
  // 원하는 요소가 변화했을 때 실행시키고 싶다면 [] 안에 넣어줌
  // keyword가 변화할 때 코드 실행시켜줘
  useEffect(() => {
    console.log("counter 변경 시 실행");
  }, [counter]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={onChange}
        placeholder="search here.."
        value={keyword}
      />
      <h1 className={styles.title}>New React Project!</h1>
      <p>{counter}</p>
      <button onClick={onClick}>클릭하세요!</button>
      <CleanUp/>
      <Todo/>
      <Coin/>
      <Movie/>
    </div>
  );
}

export default App;
