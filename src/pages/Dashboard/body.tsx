import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//props of component
export interface tableBodyProps {
    data?: any;
}

export type DirectoryType = {
    level1:string;
    level2:string;
    name: string;
    type: string; 
    date: string; 
    changed: string; 
    size: number;
};
/**
* @description <body of table (mapping the data coming from backend)>
* @author <ibtihal el maghraoui>
*/
const BodyTable: React.FC<tableBodyProps> = (props): JSX.Element => {
    const { data } = props;
    return (
        <>
            {data?.map((row: DirectoryType) => {
                return (
                    <TableRow key={row.size} >
                        <TableCell>
                            {row.level1}
                        </TableCell>
                        <TableCell>
                            {row.level2}
                        </TableCell>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell>
                            {row.date}
                        </TableCell>
                        <TableCell>
                            {row.type}
                        </TableCell>
                        <TableCell>
                            {row.changed}
                        </TableCell>
                        <TableCell>
                            {row.size}
                        </TableCell>
                    </TableRow>)
                })
            }


        </>
    );
}
export default BodyTable;

