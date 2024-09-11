import { Input } from '@/common/components/Input'
import { appCtx } from '@/context/appCtx'
import React, { useContext, useState } from 'react'
import config from './config.json'
import axios from 'axios'
import { handleFieldLevelValidation, handleFormLevelValidation } from '@/common/services/validations'
export const Login = () => {
    const [inputControls, setInputControls] = useState(config)
    const ctxData = useContext(appCtx)
    const fnLogin = async () => {
        const [isInValid, data]: any = handleFormLevelValidation(inputControls, setInputControls)
        if (isInValid) return;
        const res = await axios.post("http://localhost:2020/auth/login", {
            data
        })
        if (res?.data?.length > 0) {
            ctxData.dispatch({
                type: "LOGIN",
                payload: true
            })
        } else {
            alert("Please check ented uid or pwd")
        }
    }
    const handleChange = (eve: any) => {
        handleFieldLevelValidation(eve, inputControls, setInputControls)
    }

    return (
        <div className='container-fluid'>
            <h3 className='mt-3 mb-3 text-center'>Login</h3>
            {
                inputControls.map((obj) => {
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
