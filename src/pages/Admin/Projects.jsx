import AdminLayout from "./AdminLayout"
import DataGridTable from '../../components/DataGridTable/DataGridTable'

import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";


export default function Projects () {
    const [projects, setProjects] = useState([]);

    const fields = [
        {name: "name", label: "Nombre del proyecto", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},
        {name: "startDate", label: "Fecha de inicio", type: "date", placeholder: "dd/mm/yyyy", required: true},
        {name: "endDate", label: "Fecha de fin", type: "date", placeholder: "dd/mm/yyyy", required: true}, 
        {name: "status", label: "Estado", type: "text", placeholder: "active", required: true
    }]

    // Displayed fields (table form)
    const tableFields = ['name', 'startDate', 'endDate', 'status']

    const route = 'api/projects'

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        const data = await fetcher('api/projects', {
            method: 'GET',
        })
        console.log("Fetched projects: ", data)
        setProjects(data);
    }
    
    
    return <>
        <AdminLayout>
            <DataGridTable data={projects} setData={setProjects} fields={fields} tableFields={tableFields} route={route}></DataGridTable>
        </AdminLayout>
    </>
}