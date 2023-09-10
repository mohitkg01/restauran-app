import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
const Backdrop=(props)=>{
 return (<div className='backdrop' />)
}
const ModalOverlay=(props)=>{
    return(
        <div className='modal'>
        <div>{props.children}</div> 
     </div>
    )
   
}
const portalElement=document.getElementById('overlays');

const Modle = (props) => {
  return (
    <Fragment>
   {ReactDOM.createPortal(<Backdrop/>,portalElement)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modle