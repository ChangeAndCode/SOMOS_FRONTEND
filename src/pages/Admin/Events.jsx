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
        

    const dummyData = [
        { id: 1, name: 'Evento I', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 2, name: 'Evento II', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 1, name: 'Evento III', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 1, name: 'Evento IV', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },

    ];
    
        const fields = [
        {name: "name", label: "Nombre del proyecto", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},
        {name: "startDate", label: "Fecha de inicio", type: "date", placeholder: "dd/mm/yyyy", required: true},
        {name: "endDate", label: "Fecha de fin", type: "date", placeholder: "dd/mm/yyyy", required: true}, 
        {name: "status", label: "Estado", type: "text", placeholder: "active", required: true
    }]

    const tableFields = ['name', 'startDate', 'endDate', 'status']


    return <>
        <AdminLayout>
             <DataGridTable data={events} fields={fields} tableFields={tableFields}></DataGridTable>
        </AdminLayout>
    </>
}