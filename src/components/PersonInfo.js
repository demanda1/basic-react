import React, {useState} from 'react' //we need this because we are using JSX in this file

function PersonInfo(props){
    console.log(props)
    const {name, age} = props   //Destructuring , this can be done diretcly in the function arguments above as well.
    
    // passing any value to state. State always returns an array having 2 elements.
    // 1. Value which have given of the state.
    // 2. a function which allows you to change the state value. you can take any name
    const [new_age, setCount] = useState(Number(age))  
    const addValue=()=>{
        setCount(new_age+1);
        console.log(new_age);
    }
    return(
        <div className='pers'>
            <h2>Name: {name}</h2>
            <h2>Age: {new_age}</h2>
            <button onClick={addValue}> increase age</button>
        </div>
    )
}

export default PersonInfo;