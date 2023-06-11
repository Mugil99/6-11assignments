const Child=(props)=>{
    const {setShowModal}=props
    return(
       <div className="child">
         <h2>Child Modal</h2>
         <button onClick={()=>setShowModal(true)}>Show Modal</button>
       </div>
    )
}
export default Child;