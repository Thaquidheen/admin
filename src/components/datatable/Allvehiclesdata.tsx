import './allvehicledata.scss';
import { DataGrid, GridColDef,  } from '@mui/x-data-grid';

const Allvehiclesdata = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
          field: 'registrationnumber',
          headerName: 'Registration Number',
          width: 150,
          editable: true,
        },
        {
          field: 'displayname',
          headerName: 'Display Name',
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
          field: 'currentmotionstate',
          headerName: 'Current Motion State',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'deviceid',
          headerName: 'Device ID',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'devicesubscriptionexpiry',
          headerName: 'Device Subscription Expiry',
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
          field: 'tamperedreason',
          headerName: 'Tampered Reason',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'lastlocation',
          headerName: 'Last Location',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'lastlocatedat',
          headerName: 'Last Located At',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'laststatusreceivedat',
          headerName: 'Last Status Received At',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'usesimmobilization',
          headerName: 'Uses Immobilization',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'sosbutton',
          headerName: 'SOS Button',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'waslstatus',
          headerName: 'WASL Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'commercial',
          headerName: 'Commercial',
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

export default Allvehiclesdata