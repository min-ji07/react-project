import { useEffect, useState } from "react";

function Hello(){
    useEffect(() => {
        console.log("created!");

        // cleanup function ? 
        // return 까지 나온 후 종료되는 줄 알았는데 왜 ..? 
        return () => console.log("destroyed..")
    }, []);
    return(
        <h1>Hello</h1>
    );
}

function CleanUp(){
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return(
        <div>
            {/* javascript사용시 중괄호 */}
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default CleanUp;