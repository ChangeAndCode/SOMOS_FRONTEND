import AdminLayout from "./AdminLayout"
import DataGridTable from '../../components/DataGridTable/DataGridTable'

export default function Programs () {
    
    const dummyData = [
        { id: 1, name: 'Programa I', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 2, name: 'Programa II', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 1, name: 'Programa III', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
        { id: 1, name: 'Programa IV', description: 'Este es el primer projecto junto a change and code', status: 'active', startDate: '2025-07-01', endDate: '2025-07-25' },
    ];

    const fields = [
        {name: "name", label: "Nombre del programa ", type: "text", placeholder: "Ingrese nombre del proyecto", required: true},
        {name: "description", label: "Descripcion", type: "text", placeholder: "Insgrese descripcion del proyecto", required: true},
        {name: "startDate", label: "Fecha de inicio", type: "date", placeholder: "dd/mm/yyyy", required: true},
        {name: "endDate", label: "Fecha de fin", type: "date", placeholder: "dd/mm/yyyy", required: true}, 
        {name: "status", label: "Estado", type: "text", placeholder: "active", required: true
    }]
    
    const tableFields = ['name', 'startDate', 'endDate', 'status']

    return <>
        <AdminLayout>
            <DataGridTable dummyData={dummyData} fields={fields} tableFields={tableFields}></DataGridTable>
        </AdminLayout>
    </>
}