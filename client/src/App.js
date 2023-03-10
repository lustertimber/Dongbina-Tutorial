import Customer from './components/Customer';
import './App.css';

import { Button, Paper } from '@mui/material';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

import { withStyles } from '@mui/material/styles';

// const styles = theme => ({
//   root : {
//     width : '100%',
//     marginTop : theme.spacing.unit * 3,
//     overflow : 'auto'
//   },
//   table : {
//     minwidth : 1080
//   }
// })

const customer = {
  'id'      : 1
  ,'image'  : 'https://placeimg.com/300/64/people/1'
  ,'name'   : 'KIM'
  ,'number' : '990199 Props'
  ,'gender' : 'male Props'
  ,'job'    : 'developer Props' 
}

const customers = [
  {
    'id'      : 1
    ,'image'  : 'https://placeimg.com/300/64/people/1'
    ,'name'   : 'KIM'
    ,'number' : '990199'
    ,'gender' : 'male'
    ,'job'    : 'developer'
  }
  ,{
    'id'      : 2
    ,'image'  : 'https://placeimg.com/300/64/people/2'
    ,'name'   : 'KANG'
    ,'number' : '050199'
    ,'gender' : 'female'
    ,'job'    : 'Web Designer'
  }
  ,{
    'id'      : 3
    ,'image'  : 'https://placeimg.com/300/64/people/3'
    ,'name'   : 'Ryu'
    ,'number' : '990100'
    ,'gender' : 'female'
    ,'job'    : 'Slave'
  }
  ,{
    'id'      : 4
    ,'image'  : 'https://placeimg.com/300/64/people/4'
    ,'name'   : 'Ryu'
    ,'number' : '990100'
    ,'gender' : 'female'
    ,'job'    : 'Slave'
  }
]

function App() {
  // const { classes } = this.props;
  return (
    // <Paper className={classes.root}>
    // <Table className={classes.table}>
      <Paper elevation={0}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert onClose={() => {}} severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
            </Alert>
          <Alert action={<Button color="inherit" size="small">UNDO</Button>} severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>
      <Table>
      <TableHead> 
        <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>작업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          customers.map( c =>
          { return (
              <Customer key     = {c.id}
                        id      = {c.id}
                        image   = {c.image}
                        name    = {c.name}
                        number  = {c.number}
                        gender  = {c.gender}
                        job     = {c.job}
              />
            );
          })
        }
      </TableBody>
    </Table>
    </Paper>
    
    /* <Customer id={customers[0].id}
              image={customers[0].image}
              name={customers[0].name}
              number={customers[0].number}
              gender={customers[0].gender}
              job={customers[0].job} />
    <Customer id={customers[1].id}
              image={customers[1].image}
              name={customers[1].name}
              number={customers[1].number}
              gender={customers[1].gender}
              job={customers[1].job} />
    <Customer id={customers[2].id}
              image={customers[2].image}
              name={customers[2].name}
              number={customers[2].number}
              gender={customers[2].gender}
              job={customers[2].job} /> */
    
  );
}
export default App;
// export default withStyles(styles)(App);
