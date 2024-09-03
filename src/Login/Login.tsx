import { Input } from '@/common/components/Input'
import { appCtx } from '@/context/appCtx'
import React, { useContext, useState } from 'react'
import config from './config.json'
export const Login = () => {
    const [data, setData] = useState({})
    const ctxData = useContext(appCtx)
    const fnLogin = () => {

        alert("sending request...")
        // ctxData.dispatch({
        //     type: "LOGIN",
        //     payload: true
        // })
    }
    const handleChange = (eve: any) => {
        const { name, value } = eve?.target
        let inputObj: any = config.find((obj) => {
            return obj.name === name
        })
        inputObj.hasError = false;
        inputObj.value = value
        if (!value) {
            inputObj.hasError = true
        }
        setData({
            ...data,
            [name]: value
        })
    }
    return (
        <div className='container-fluid'>
            <h3 className='mt-3 mb-3 text-center'>Login</h3>
            {
                config.map((obj) => {
                    return <Input {...obj} hanldeChange={handleChange} />
                })
            }
            <div className='row mb-3'>
                <div className='offset-sm-5 col-sm-7'>
                    <button className='btn btn-primary' onClick={fnLogin}>Login</button>
                </div>
            </div>

        </div>
    )
}
