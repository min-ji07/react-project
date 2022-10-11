import { useState } from "react";
import styles from "./css/App.module.css";

function Todo(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    // 비어있는 배열
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
            // toDo가 비었다면 종료 
            // 여기서의 return --> 종료시킴
        }
        // setToDos(function(currentArray){
            // 아래 내용은 이렇게 쓰는거와 같음
        // })
        setToDos(currentArray => [toDo, ...currentArray]); 
        // setToDos로 수정(받아온 값 => input value값, ... 기존에 입력된 input(Array안의 값))
        /*
         약간 이런 느낌 
        function sum(a, b){
            return a + b;
        }
        sum(10, 20);
        의 currentArray가 10인.. 느낌
        */

        // 후에 input 값 초기화
        // state는 직접적으로 수정 불가능 --> javascript 에서는 toDos.push() 가능
        setToDo("");
    }
    console.log(toDos);
    return(
        <div>
            <h1 className={styles.title}>my ToDos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={onChange}
                    placeholder="할일을 적어주세요."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            {/* array.map() --> 
            toDos.length 만큼 실행, 
            내가 원하는 item으로 바꿔주고 새로운 array로 return 해줌  
            <예전 array를 가져와 변형하고 return 함
            */}
            <ul>
                {/* value와 index를 넣어야한다고 함 안넣으면 콘솔창에서 오류남 */}
                {toDos.map((banana, index) => <li key={index}>{banana}</li>)}
                {/* toDos배열 내 모든 값 => li 태그 안에 넣어서 보여줌 */}
            </ul>
        </div>
    )
}

export default Todo;