import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../CSS/Owner.css";


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'User', headerName: 'User', width: 130 },
  { field: 'date', headerName: 'Date', width: 200 },
  {
    field: 'time',
    headerName: 'Time',
    type: 'number',
    width: 200,
    headerAlign: 'right',
  },
  {
    field: 'hour',
    headerName: 'Duration',
    type: 'number',
    width: 250,
    headerAlign: 'right',
  },
];

const rows = [
  { id: 1, date: '2023-10-28', User: 'Jon', time: 35, hour: '1hr' },
  { id: 2, date: '2023-10-29', User: 'Cersei', time: 42, hour: '2hr'},
  { id: 3, date: '2023-10-30', User: 'Jaime', time: 46, hour: '3hr'},
  { id: 4, date: '2023-11-1', User: 'Jaime', time: 45,  hour: '4hr'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}