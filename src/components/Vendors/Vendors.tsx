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
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState([])
    const [row, setRow] = useState({})
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
        setRow({});
        setIsEdit(false)
        setShowForm(true);
    }
    const fnEdit = (row: any) => {
        setRow(row);
        setIsEdit(true)
        setShowForm(true)
    }
    const fnDelete = () => {
        alert('del')
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
                handleEdit={fnEdit}
                handleDelete={fnDelete}
            />
            {showForm && <AppForm setShowForm={setShowForm}>
                <VendorForm setShowForm={setShowForm} fnGetVendors={fnGetVendors} row={row} isEdit={isEdit} />
            </AppForm>}
        </div>
    )
}
