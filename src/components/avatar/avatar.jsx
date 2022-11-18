import React from 'react'

const avatar = (props) => {

    let style = {
        backgroundColor: props.backgroundColor,
        padding: `${props.px} ${props.py}`,
        color: props.color || "black",
        borderRadius: props.borderRadius,
        textAlign: "center",
        marginRight: "5px",
        fontSize: props.fontSize
    } 
  return (
    <div style={style}>
    {props.children}
    </div>
  )
}

export default avatar