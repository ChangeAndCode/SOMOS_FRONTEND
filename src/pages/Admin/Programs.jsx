import AdminLayout from "./AdminLayout"
import DataGridTable from '../../components/DataGridTable/DataGridTable'
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";

export default function Programs () {
    const [programs, setPrograms] = useState([])

    const fields = [
        {name: "name", label: "Nombre del programa ", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},
        {name: "startDate", label: "Fecha de inicio", type: "date", placeholder: "dd/mm/yyyy", required: true},
        {name: "endDate", label: "Fecha de fin", type: "date", placeholder: "dd/mm/yyyy", required: true}, 
        //{name: "status", label: "Estado", type: "text", placeholder: "active", required: true}
    ]
    
    // Displayed fields (table form)
    const tableFields = ['name', 'startDate', 'endDate']

    const route = 'api/programs'

    useEffect(() => {
            fetchPrograms()
        }, [])
    
        const fetchPrograms = async () => {
            const data = await fetcher('api/programs', {
                method: 'GET',
            })
            console.log("Fetched projects: ", data)
            setPrograms(data);
        }

    
    return <>
        <AdminLayout>
            <DataGridTable data={programs} setData={setPrograms} fields={fields} tableFields={tableFields} route={route}></DataGridTable>
        </AdminLayout>
    </>
}