import AdminLayout from './AdminLayout'
import CloudinaryTestForm from '../../components/CloudinaryTestForm/CloudinaryTestForm'
import { useEffect, useState } from 'react'
import { fetcher } from '../../utils/fetcher'
import DataGridTable from '../../components/DataGridTable/DataGridTable'

export default function Notes () {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    const fetchNotes = async () => {
        const data = await fetcher('api/notes', {
            method: 'GET', auth: true
        })
        console.log('Fetched notes: ', data)
        setNotes(data)
    }
    
    const fields = [
        {name: "title", label: "Titulo", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "content", label: "Contenido", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},          
    ]

    const tableFields = ['title', 'content']

    const route = 'api/notes'

    return <>
        <AdminLayout>
            Bienvenido al penel de notas
            <DataGridTable data={notes} setData={setNotes} fields={fields} tableFields={tableFields} route={route}></DataGridTable>
        </AdminLayout>
    </>
}