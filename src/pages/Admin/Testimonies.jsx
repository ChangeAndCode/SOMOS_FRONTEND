import AdminLayout from './AdminLayout'
import DataGridTable from '../../components/DataGridTable/DataGridTable'
import { useEffect, useState } from 'react'
import { fetcher } from '../../utils/fetcher'


export default function Testimonies () {
    const [testimonies, setTestimonies] = useState([])
    
    useEffect(() => {
        fetchTestimonies()
    }, [])

    async function fetchTestimonies () {
        const data = await fetcher('api/testimonies', {
            method: 'GET'
        })
        console.log('Fetched testimonies: ', data)
        setTestimonies(data)
    }

    const fields = [
        {name: "name", label: "Nombre del proyecto", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "message", label: "Mensaje del testimonio", type: "text", placeholder: "Agradecimiento especial a: ", required: false}
    ]

    // Displayed fields (table form)
    const tableFields = ['name', 'message']


    return <>
        <AdminLayout>
            <DataGridTable data={testimonies} setData={setTestimonies} fields={fields} tableFields={tableFields}></DataGridTable>
        </AdminLayout>
               
    </>
}