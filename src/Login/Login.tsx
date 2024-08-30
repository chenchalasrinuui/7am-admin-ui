import { appCtx } from '@/context/appCtx'
import React, { useContext } from 'react'

export const Login = () => {
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
        ctxData.dispatch({
            type: "LOGIN",
            payload: true
        })
    }
    return (
        <div>Login

            <button onClick={fnLogin}>Login</button>
        </div>
    )
}
