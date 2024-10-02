import React from 'react'
import styles from './TextArea.module.css'

export const TextArea = ({ hanldeChange, lbl, isRequired, value, name, type, hasError, errorMsg, lblCols, inputCols, errMsgCols }: any) => {
    return <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
            <b>{lbl}{isRequired && <span className='text-danger'>*</span>}:</b>
        </div>
        <div className={`col-sm-${inputCols}`}>
            <textarea onChange={hanldeChange} name={name} className='form-control' />
        </div>
        <div className={`col-sm-${errMsgCols}`}>
            {errorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>

}
