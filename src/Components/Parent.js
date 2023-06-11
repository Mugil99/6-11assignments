import React, { useState } from 'react';
import Child from './Child';
const Parent=()=>{
   const[showModal,setShowModal]=useState(false);

    return(
        <div className='parent'>
            <h1>Parent Modal</h1>
            <Child setShowModal={setShowModal}/>
            {
                showModal && (<div className='child'>
                    <h3>Modal Content</h3>
                    <p>This is modal content</p>
                </div>)
            }
        </div>
    )
}
export default Parent