import styled, {css, styledComponent} from "styled-components";

export const MainDiv = styled.div`
    display:inline-grid;
    grid-template-columns:auto auto auto auto;
    grid-gap:10px 10px;
    background-color:black;
    border:2px solid grey;
    margin-left:400px;
`
export const Button = styled.button`
    border:1px solid black;
    text-align:center;
    font-size:30px;
    width:100px;
    height:60px;
    background-color:grey;
    margin:10px;
`
export const ResultDiv = styled.input`
    width:490px;
    height:100px;
    background-color:grey;
    margin-left:398px;
    margin-top:50px;
    border:2px solid black;
    box-shadow:inset 2px 2px 3px 5px black;
    text-align:right;
    padding-right:20px;
    color:black;
    font-size:30px;
`