import React from "react"
import styled from 'styled-components'

export  const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content:center;
    width: 400px;
    margin: 20px auto;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: minmax(120px, auto) repeat(5,100px);
    box-shadow: 2px 2px 10px #333;
    border-radius:10px; 
`
export const Screen = styled.div`
/**poore mai fail gya left to right */
grid-column: 1/-1; 
/* background-color: rgba(60,64,67,0.75); */
background-color: #293B5F;
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 10px;
/**agr humne type kia aur line bhar gyi nhyi line aagyi toh width apne aap aajayegi */
word-wrap: break-word;
word-break:break-all;
text-align: right;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
export const Previous = styled.div`
color:rgba(255,255,255,0.75);
font-size: 1.5rem;
`
export const Current = styled.div`
color:white;
font-size: 2.5rem;
`

export const Button = styled.button`
    /**mouse goes over so pointer aajaye arrow ki jagah */
    cursor: pointer;
    font-size: 2rem;
    /**thoda outset jaise baharrr dikhe */
    border:1px outset white;
    /**bahar na nikle parent ke */
    outline:none;
    background-color: rgba(255,255,255,0.75);
    &:hover{
        background-color: rgba(255,255,255,0.9);
    }

    ${function( {gridSpan} )
    {
        if(gridSpan)
        {
            return `grid-column:span ${gridSpan};`
        }
    }}
    /**if gridSpan is present to show grid-column */
    /* ${ ({gridSpan}) => gridSpan && `grid-column:span ${gridSpan};` } */

    ${ ({operation}) => operation && `background-color:gray;` }
    ${ ({control}) => control && `background-color:skyblue;` }
    ${ ({equals}) => equals && `border-bottom-right-radius:10px; background-color:gray;` }
    ${ ({period}) => period && `border-bottom-left-radius:10px; background-color:skyblue;` }



`