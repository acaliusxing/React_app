import React from 'react';
// import ReactDOM from 'react-dom';

function Demo() {
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    //componentDidMount, componentDidUpdate
    // React.useEffect(()=>{
    //     let time = setInterval(()=>{
    //         setCount(count => count + 1)
    //     }, 1000)
    //     //componentWillUnmount
    //     return ()=> {
    //         clearInterval(time)
    //     }
    // },[])

    const addOne = () => {
        setCount(count => count + 1)
    }

    const alertInput = ()  => {
        alert(myRef.current.value)
    }

    // const unmount = () => {
    //     ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    // }

    return (
        <div>
            <input type="text" ref={myRef}></input>
            <h2>Current Count: {count}</h2>
            <button onClick={addOne}>Add one</button>
            {/* <button onClick={unmount}>Unmount Component</button> */}
            <button onClick={alertInput}>Alert input</button>
        </div>
    )
}

export default Demo
