import React from 'react'

export const Input = ({ hanldeChange, lbl, isRequired, value, name, type, hasError, errorMsg, lblCols, inputCols, errMsgCols }: any) => {
    return <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
            <b>{lbl}{isRequired && <span className='text-danger'>*</span>}:</b>
        </div>
        <div className={`col-sm-${inputCols}`}>
            <input onChange={hanldeChange} name={name} type={type} className='form-control' />
        </div>
        <div className={`col-sm-${errMsgCols}`}>
            {hasError && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>

}
