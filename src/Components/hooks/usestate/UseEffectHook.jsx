 // use effect is a hook that allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.


 // // syntax
 //import { useEffect } from 'react';

 //ueffect(() => {
    //code
    //},
//[dependencies]);



import react, { useEffect, useState } from "react"

const UseEffectHook = () => {
useEffect(() => {
    console.log("component mounted")
}, [])

return (
    <div> use effect hook </div>
)
}

export default UseEffectHook