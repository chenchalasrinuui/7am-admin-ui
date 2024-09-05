import { Input } from '@/common/components/Input'
import { appCtx } from '@/context/appCtx'
import React, { useContext, useState } from 'react'
import config from './config.json'
export const Login = () => {
    const [inputControls, setInputControls] = useState(config)
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
        const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
        const dataObj: any = {}
        clonedInputControls.forEach((obj: any) => {
            dataObj[obj.name] = obj.value;
            obj.hasError = !obj.value
        })
        const isInValid = clonedInputControls.some((obj: any) => obj.hasError)
        if (isInValid) {
            setInputControls(clonedInputControls)
            return;
        }
        alert(JSON.stringify(dataObj))
        // ctxData.dispatch({
        //     type: "LOGIN",
        //     payload: true
        // })
    }
    const handleChange = (eve: any) => {
        const { name, value } = eve?.target
        const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
        let inputObj: any = clonedInputControls.find((obj: any) => {
            return obj.name === name
        })
        inputObj.value = value
        inputObj.hasError = !value

        setInputControls(clonedInputControls)

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
