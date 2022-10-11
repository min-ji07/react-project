import Proptypes from "prop-types";
// import styles from "./Button.module.css";
import styles from "./css/Button.module.css"
// javascript object로 변환 시켜줌

function Button({text}){
// styles object의 btn 속성을 가져오는 것, className은 랜덤임
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    // 버튼 컴포넌트 사용 시 props로 string을 받고, 필수임
    text: Proptypes.string.isRequired,
}

// 다른 파일에서 Button.js를 가져올 수 있게 도와줌
export default Button;