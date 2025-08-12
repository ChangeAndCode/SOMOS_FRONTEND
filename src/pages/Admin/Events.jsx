import AdminLayout from './AdminLayout'
import DataGridTable from '../../components/DataGridTable/DataGridTable'
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";

export default function Events () {
    const [events, setEvents] = useState([])

    useEffect(() => {
            fetchEvents()
        }, [])
    
        const fetchEvents = async () => {
            const data = await fetcher('api/events', {
                method: 'GET',
            })
            console.log("Fetched events: ", data)
            setEvents(data);
        }
    
        const fields = [
            {name: "name", label: "Nombre del proyecto", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
            {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},
            {name: "location", label: "Ubicación", type: "text", placeholder: "Av. ejemplo #1234", required: true},
            {name: "startDate", label: "Fecha", type: "date", placeholder: "dd/mm/yyyy", required: true},
        ]

    const tableFields = ['name', 'location','date', /*'status'*/]

    const route = 'api/events'

    return <>
        <AdminLayout>
             <DataGridTable data={events} setData={setEvents} fields={fields} tableFields={tableFields} route={route}></DataGridTable>
        </AdminLayout>
    </>
}