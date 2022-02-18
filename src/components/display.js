import { ResultDiv } from "./styled";

const Display = (props) => {
    return(
        <>
        <ResultDiv type="text" value={props.FinalValue} autoFocus onChange={(e) => props.HandleClick(e.target.value)}/>
        </>
    )
}

export default Display;