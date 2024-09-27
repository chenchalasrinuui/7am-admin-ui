import React from 'react'
import { AppTable } from '../shared/AppTable'

export const Vendors = () => {
    return (
        <div>
            <div className='text-end my-2'>
                <button className='btn btn-primary'>Add Vendor</button>
            </div>
            <AppTable
                ths={["Name", "Phone"]}
                data={[{ name: "v1", phone: '343434' }]}
                tds={['name', 'phone']}
            />
        </div>
    )
}
