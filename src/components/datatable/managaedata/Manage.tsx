import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './manage.scss'

const Manage = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
          field: 'serialnumber',
          headerName: ' Serial Number',
          width: 150,
          editable: true,
        },
        {
          field: 'vehicle',
          headerName: 'vehicle',
          width: 150,
          editable: true,
        },
        {
          field: 'account',
          headerName: 'Account',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'type',
          headerName: 'Type',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'status',
          headerName: 'status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'configstatus',
          headerName: 'Config.Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'phonenumber',
          headerName: 'Phone Number',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'franchisepartner',
          headerName: 'Franchise Partner',
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
          field: 'lastdatarecievedat',
          headerName: 'Last Data Recieved At',
          type: 'number',
          width: 110,
          editable: true,
        },    
        {
            field: 'simcard',
            headerName: 'Sim Card',
            type: 'number',
            width: 110,
            editable: true,
          }, 
          {
            field: 'creator',
            headerName: 'Creator',
            type: 'number',
            width: 110,
            editable: true,
          },
          {
            field: 'actions',
            headerName: 'Actions',
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
    <div className="manage"  style={{ height: 700, width: '100%' }}>
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

export default Manage