import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react'; 
import { addusers,deleteusers,updateusers } from './reducers/users';
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Box from '@mui/material/Box';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
<link href="https://fonts.googleapis.com/icon?family=Material+Icon‌​s" rel="stylesheet"></link>

function App() {
  const list = useSelector((state) => state.users.value);
  const dispatch= useDispatch(); 
  const [name, setName] = useState(""); 
  const [newname, setNewname] = useState(""); 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div>
<AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Employee Management Dashboard
          </Typography>
          <TextField
          required
          id="outlined-required"
          label="Enter name"
          onChange={(e) => {setName(e.target.value);}}
        />



          <Button color="inherit" onClick={() => {
          dispatch(addusers({id:list[list.length-1].id+1,name:name}));}}>Add new Employee</Button>
        </Toolbar>
      </AppBar>
<div className="App">
   <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={3}
  margin={10}
>


</Grid>

<div className='usersdisplay'>
<Container>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={3}
>
      {list.map((user)=> (
        <Box className="box"
         key={user.id}>
          <p>
         
         <AccountCircleIcon style={{ color: '#1976d2', fontSize: 70, marginTop:30 }}/>
          </p>
        <h1>{user.name} </h1>
        <p>Id:{user.id}</p>
        

             
<TextField
          required
          id="outlined-required"
          onChange={(e) => {setNewname(e.target.value);}}
          label="Update Name"
          
        />
        

                <IconButton color="success" onClick={() => { dispatch(updateusers({ id:user.id,name:newname }));
                }}>
        <PersonAddAlt1Icon />
      </IconButton>


<IconButton aria-label="delete" color="error" onClick={() => dispatch(deleteusers({id: user.id}))}>
        <PersonRemoveIcon />
      </IconButton>

 </Box>
 
    ))}


       
</Grid>
      </Container>









</div>



    </div></div>
  );
}

export default App;
