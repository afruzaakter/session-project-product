import React, { useState } from 'react';

const Test = (props) => {
    // const {count} = props;
    // console.log(props);
const [count, setCount] = useState(0)
// setCount('hello');

const plus = () => {
    // setCount('Moushomi')
    // step 1 
    // const oldCount = count;
    // const newCount = oldCount + 1;
    // setCount(newCount);
//  //step 2 
//  const newCount = count + 1;
//  setCount(newCount);
 //step 2 
 setCount(count + 1);

}
const minus = () => {
    // setCount('heroalam')
    // step-1
    // const oldCount = count;
    // const newCount = oldCount - 1;
    // setCount(newCount);

    //step 2 
//  const newCount = count - 1;
//  setCount(newCount);
 //step 2 
 setCount(count - 1);
}
console.log(count);

    return (
        <div>
            {/* <h1>My Country name is {country}</h1> */}

            <h1>{count}</h1>
            <div className='count mt-5'>
                <button onClick={plus} className='ms-3 p-3 '>+</button>
                <button onClick={minus} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;