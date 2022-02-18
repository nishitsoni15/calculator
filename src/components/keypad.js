import { MainDiv, Button } from "./styled";

const Keypad = (props) => {
    return(
        <>
        <MainDiv>
        <Button name="(" type="Button" onClick={props.HandleClick}>(</Button>
        <Button name=")"  type="Button" onClick={props.HandleClick}>)</Button>
        <Button name="CE" type="Button" onClick={props.Backspace}>CE</Button>
        <Button name="C" type="Button" onClick={props.Reset}>C</Button>
        <Button name="1" type="Button" onClick={props.HandleClick}>1</Button>
        <Button name="2" type="Button" onClick={props.HandleClick}>2</Button>
        <Button name="3" type="Button" onClick={props.HandleClick}>3</Button>
        <Button name="+" type="Button" onClick={props.HandleClick}>+</Button>
        <Button name="4" type="Button" onClick={props.HandleClick}>4</Button>
        <Button name="5" type="Button" onClick={props.HandleClick}>5</Button>
        <Button name="6" type="Button" onClick={props.HandleClick}>6</Button>
        <Button name="-" type="Button" onClick={props.HandleClick}>-</Button>
        <Button name="7" type="Button" onClick={props.HandleClick}>7</Button>
        <Button name="8" type="Button" onClick={props.HandleClick}>8</Button>
        <Button name="9" type="Button" onClick={props.HandleClick}>9</Button>
        <Button name="*" type="Button" onClick={props.HandleClick}>*</Button>
        <Button name="." type="Button" onClick={props.HandleClick}>.</Button>
        <Button name="0" type="Button" onClick={props.HandleClick}>0</Button>
        <Button name="=" type="Button" onClick={props.Calculate}>=</Button>
        <Button name="/" type="Button" onClick={props.HandleClick}>/</Button>
        </MainDiv>
        </>
    )
}

export default Keypad;