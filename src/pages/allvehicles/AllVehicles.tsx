
import Allvehiclesdata from '../../components/datatable/Allvehiclesdata';
import Navbar from '../../components/navbar/Navbar';
import './allvehicles.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Addvehicle from '../../components/addnewvehicles/Addvehicle';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:500,
  bgcolor: '#ffffff',

  boxShadow: 24,
  p: 5,
};
const AllVehicles = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="allvehicles">
      <Navbar/>
        <div className="info">
            <h1>All Vehicles</h1>
            <div>
            {/* <button className='mainbtn'>Bulk Upload</button> */}
            <button onClick={handleOpen} className='btnhead'>New Vehicle</button>
            </div>
        </div>
        <Allvehiclesdata/>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Vehicle
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
          <Addvehicle/>
        </Box>
      </Modal>
    </div>
  )
}

export default AllVehicles