import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './installationdata.scss';

const Installationdata = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
          field: 'deviceserialnumber',
          headerName: 'Device Serial Number',
          width: 150,
          editable: true,
        },
        {
          field: 'installedby',
          headerName: 'Installed By',
          width: 150,
          editable: true,
        },
        {
          field: 'vehicle',
          headerName: 'Vehicle',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'vehiclestatus',
          headerName: 'Vehicle Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'devicesubscrip',
          headerName: 'Device Subscrip. Exp. Date',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'installedat',
          headerName: 'Installed At',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'uninstalledat',
          headerName: 'Uninstalled At',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'accountname',
          headerName: 'Account Name',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'accountemail',
          headerName: 'Account Email',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'client',
          headerName: 'Client',
          type: 'number',
          width: 110,
          editable: true,
        },        
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
  return (
    <div className="installdata"  style={{ height: 700, width: '100%' }}>
         <DataGrid
         className='datagrid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default Installationdata