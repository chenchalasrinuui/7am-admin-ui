import React from 'react'

export const Input = ({ hanldeChange, lbl, name, type, errorMsg, lblCols, inputCols, errMsgCols }: any) => {
    return <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
            <b>{lbl}:</b>
        </div>
        <div className={`col-sm-${inputCols}`}>
            <input onChange={hanldeChange} name={name} type={type} className='form-control' />
        </div>
        <div className={`col-sm-${errMsgCols}`}>
            <b className='text-danger'>{errorMsg}</b>
        </div>
    </div>

}
