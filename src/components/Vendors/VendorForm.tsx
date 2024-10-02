import React, { useContext, useState } from 'react'
import config from './config.json'
import { Input } from '../shared/Input'
import { TextArea } from '../shared/TextArea'
import { handleFieldLevelValidation, handleFormLevelValidation } from '@/services/validations'
import Ajax from '@/services/ajax'
import { updateStoreData } from '@/services/functions'
import { appCtx } from '@/context/appCtx'
export const VendorForm = ({ setShowForm, fnGetVendors }: any) => {
    const [inputControls, setInputControls] = useState(config)
    const { dispatch } = useContext(appCtx)
    const handleChange = (eve: any) => {
        handleFieldLevelValidation(eve, inputControls, setInputControls)
    }
    const fnSubmit = async () => {
        try {
            const [isInValid, data]: any = handleFormLevelValidation(inputControls, setInputControls)
            if (isInValid) return;
            updateStoreData(dispatch, "LOADER", true)
            const res = await Ajax.post('vendor/save', { data })
            const { acknowledged, insertedId } = res?.data
            if (acknowledged && insertedId) {
                setShowForm(false)
                fnGetVendors();
                updateStoreData(dispatch, 'TOASTER', {
                    isShowToaster: true,
                    toasterMsg: 'Registered !!!',
                    color: 'green'
                })
            }
        } catch (ex) {
            console.error("VendorForm", ex)
            updateStoreData(dispatch, 'TOASTER', {
                isShowToaster: true,
                toasterMsg: 'Not Registered !!!',
                color: 'red'
            })
        } finally {
            updateStoreData(dispatch, "LOADER", false)
        }
    }
    return (
        <div className='container-fluid mt-5'>
            {
                inputControls.map((obj) => {
                    switch (obj.tag) {
                        case 'input':
                            return <Input {...obj} hanldeChange={handleChange} />
                        case 'textarea':
                            return <TextArea {...obj} hanldeChange={handleChange} />
                        default:
                            return <></>
                    }

                })
            }
            <div>
                <button onClick={fnSubmit} className='btn btn-primary form-control'>Submit</button>
            </div>
        </div>
    )
}
