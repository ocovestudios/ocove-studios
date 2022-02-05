import { useEffect, useRef } from "react";
import { threeScene } from "./ThreeComponents/threeScene";

const ThreeBackground = (props) => {
    const threeContainer = useRef()
    useEffect(() => {
        threeScene(threeContainer.current)
    }, []);

    return ( 
        <div className="three--background--container" ref={e => threeContainer.current = e}></div>
    );
}
 
export default ThreeBackground;