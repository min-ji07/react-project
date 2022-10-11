import { useState } from "react";
import styles from "../css/Nav.module.css";
import { Link } from "react-router-dom";


function Nav(){
    // const [change_w, setChange_w] = useState(false);
    // const onClick = () => {
    //     setChange_w(true);
    // }
    return(
        <div className={styles.nav_wrap}>
            <p><Link to={"/dust"}>먼지 소개</Link></p>
            {/* <p><Link to={"/clickMe"}>Click me!</Link></p> */}
            <p><Link to={"/todo"}>To Do List</Link></p>
            <p><Link to={"/movieHome"}>get Movie api</Link></p>
        </div>
    )
}

export default Nav;