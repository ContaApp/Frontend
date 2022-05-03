import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, january, february, march, april, may, 
  june, july, august, september, october, november, december) {
  return { name, january, february, march, april, may, 
    june, july, august, september, october, november, december };
}

const rows = [
  createData('IVA Cobrado', 5000.00, 6.0, 24, 4.0, 5000.00,5000.00,5000.00,5000.00, 5000.00, 5000.00,5000.00,5000.00),
  createData('IVA Pagado', 237, 9.0, 37, 4.3,237, 9.0, 37, 4.3,237, 9.0, 37, 4.3),
  createData('IVA Retenido', 262, 16.0, 24, 6.0,262, 16.0, 24, 6.0,262, 16.0, 24, 6.0),
  createData('IVA a Cargo (favor)', 305, 3.7, 67, 4.3,305, 3.7, 67, 4.3,305, 3.7, 67, 4.3),
  createData('IVA por Acreditar', 356, 16.0, 49, 3.9,356, 16.0, 49, 3.9,356, 16.0, 49, 3.9),
];

export default function TableResumenIVA() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="table-head-column">CONCEPTO</TableCell>
            <TableCell className="table-head-column" align="right">ENERO</TableCell>
            <TableCell className="table-head-column" align="right">FEBRERO</TableCell>
            <TableCell className="table-head-column" align="right">MARZO</TableCell>
            <TableCell className="table-head-column" align="right">ABRIL</TableCell>
            <TableCell className="table-head-column" align="right">MAYO</TableCell>
            <TableCell className="table-head-column" align="right">JUNIO</TableCell>
            <TableCell className="table-head-column" align="right">JULIO</TableCell>
            <TableCell className="table-head-column" align="right">AGOSTO</TableCell>
            <TableCell className="table-head-column" align="right">SEPTIEMBRE</TableCell>
            <TableCell className="table-head-column" align="right">OCTUBRE</TableCell>
            <TableCell className="table-head-column" align="right">NOVIEMBRE</TableCell>
            <TableCell className="table-head-column" align="right">DICIEMBRE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className="table-content-cell table-concept-cell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="table-content-cell" align="center">{row.january}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.february}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.march}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.april}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.may}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.june}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.july}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.august}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.september}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.october}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.november}</TableCell>
              <TableCell className="table-content-cell" align="center">{row.december}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}