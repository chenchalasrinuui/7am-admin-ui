"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AppTable } from '../shared/AppTable'
import Ajax from '@/services/ajax'
import { updateStoreData } from '@/services/functions'
import { appCtx } from '@/context/appCtx'
import { AppForm } from '../shared/AppForm'
import { VendorForm } from './VendorForm'
export const Vendors = () => {
    const [showForm, setShowForm] = useState(false)
    const [data, setData] = useState([])
    const { dispatch } = useContext(appCtx)

    /**
     * get vendros list
     */

    const fnGetVendors = async () => {
        try {
            updateStoreData(dispatch, 'LOADER', true)
            const res = await Ajax.get('vendor/get')
            setData(res?.data)
        } catch (ex) {
            setData([])
            console.error("Vendros", ex)
        } finally {
            updateStoreData(dispatch, 'LOADER', false)
        }

    }
    useEffect(() => {
        fnGetVendors()
    }, [])

    const fnAddVendor = () => {
        setShowForm(true);
    }
    return (
        <div>
            <div className='text-end my-2'>
                <button onClick={fnAddVendor} className='btn btn-primary'>Add Vendor</button>
            </div>
            <AppTable
                ths={["ID", "UID", "Password", "Phone", "Address"]}
                data={data}
                tds={['_id', 'uid', 'pwd', 'phone', 'address']}
            />
            {showForm && <AppForm setShowForm={setShowForm}>
                <VendorForm setShowForm={setShowForm} fnGetVendors={fnGetVendors} />
            </AppForm>}
        </div>
    )
}
