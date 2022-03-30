import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BodyTable, { DirectoryType } from './body';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SearchBar, SearchButton, SearchFiled,Content } from './styles';

//props of component
export interface DashboardProps {
}

/**
* @description <Dashboard page containe sortable table with data coming from backend>
* @author <ibtihal el maghraoui>
*/
const Dashboard: React.FC<DashboardProps> = (props): JSX.Element => {

  // states
  const [data,setData]=React.useState([]);
  const [searchValue,setSearchValue]=React.useState<string>();
  const [sort, setSort] = React.useState('up');

  /**
  * @description <fetching data from backend || filtring dada by (name, date, size) when click into search or "Enter">
  * @param <search> <value search>
  * @returns <value> <set the Data coming from the backend into loccal state> 
  * @author <ibtihal el maghraoui>
  */
  const getData = async (search?:string) =>{
    const response = await fetch(
      `http://localhost:3001/directory${
        search !== undefined ?`?term=${search}`:''}`
    );
   const data = await response.json();
   setData(data); 
  }

  
  React.useEffect(() => {
    getData();
  }, []);


  /**
  * @description <sort table>
  * @param <filed> <name of the filed you want to sort>
  * @returns <value> <sort the data by filed > 
  * @author <ibtihal el maghraoui>
  */
 const handleSort = (filed: any) => {
    if (sort === 'up') {
      data.sort((a:DirectoryType, b:DirectoryType) => {
        if(filed==='Name')
       { return a.name.localeCompare(b.name);}
       else if( filed==='Date'){
        return a.date.localeCompare(b.date);
       }else{
        return  a.size - b.size;
       } 
      });
      setSort('down');
    } else {
      data.sort((a:DirectoryType, b:DirectoryType) => {
        if(filed==='Name')
        { return b.name.localeCompare(a.name);}
        else if( filed==='Date'){
         return b.date.localeCompare(a.date);
        }else{
         return  b.size - a.size;
        } 
      });
      setSort('up');
    }
  };

  /**
  * @description <table Sort Cell>
  * @param <title> <title of the sortable filed>
  * @returns <TableCell> <title with icone sort (up || down) > 
  * @author <ibtihal el maghraoui>
  */
  const tableSortCellRender = (title :string) => {
    return (
      <TableCell key={title}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
          <div>{title}</div>
          {sort === 'up' ? (
            <div  onClick={()=>handleSort(title)} ><ArrowUpwardIcon style={{color:'gray'}}/></div>
          ) : (
            <div  onClick={()=>handleSort(title)} ><ArrowDownwardIcon style={{color:'gray'}}/></div>
          )}
        </div>
      </TableCell>
    );
  };

  React.useEffect(() => {
    setSort('up');
  }, []);

  return (
    <>
    <SearchBar>
      <SearchFiled  placeholder="Search ..." 
      type="search" 
      inputProps={{ style: { height: '8px' } }}
      onChange={(event)=> setSearchValue(event.target.value)}
      onKeyPress={(event: any) => {
        event.key === 'Enter' && getData(searchValue);
      }}
      />
      <SearchButton variant="contained" onClick={()=>getData(searchValue)}>Search</SearchButton>
    </SearchBar>
    <Content>
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="left">Level1</TableCell>
            <TableCell align="left">Level2</TableCell>
            {tableSortCellRender('Name')}
            {tableSortCellRender('Date')}
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Changed</TableCell>
            {tableSortCellRender('Size')}

          </TableRow>
        </TableHead>
        <TableBody>
          <BodyTable data={data}/>
        </TableBody>
      </Table>
    </TableContainer>
    </Content>
    </>
  );
}

export default Dashboard;
