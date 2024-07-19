import React from 'react'
import Index from '../../container/Index'

const PrimaryButton = (props) => {
  return (
    <Index.Box className='gradient-btn-main'>
        <Index.Button 
        disabled={props?.loading}
        className={`gradient-btn ${props.classname} ` } onClick={props?.onClick} disableRipple {...props}>{props.btnLabel}</Index.Button>
      </Index.Box>
  )
}

export default PrimaryButton