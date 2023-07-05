import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import moment from 'moment';
import "./BookingsTable.css"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'



const columns = [
  { field: 'id', headerName: 'ID', flex:1, },
  { field: 'name', headerName: 'User', flex:1 },
  { field: 'court', 
  headerName: 'Court', 
  flex:1, 
  align: 'left',
  format: (value) => formatDate(value), 
  sortable: false, 
  },
  { field: 'date', 
    headerName: 'Date', 
    flex:1, 
    align: 'left',
    format: (value) => formatDate(value), 
    sortable: false, 
  },
  {
    field: 'time',
    headerName: 'Time',
    flex:1,
    align: 'left',
    format: (value) => moment.utc(value * 1000).format('HH:mm:ss'),
  },
  {
    field: "duration",
    headerName: "Duration",
    flex:1,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
};



const customTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#e8e8e8', 
        },
        columnHeader: {
          backgroundColor: 'lightgray', 
          fontSize: 14,
        },
        footerContainer: {
          backgroundColor: 'lightgray',
        },
        
      },
    },
  },
});

export default function BookingsTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/getbookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rows = bookings.map((booking) => ({
    id: booking.id,
    name: booking.name,
    court: booking.selectedCourt,
    date: booking.selectedDate,
    time: booking.selectedTime,
    duration: booking.selectedDuration,
  }));

  return (
    <div style={{width: '100%' }}>
      <ThemeProvider theme={customTheme}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,15,20]}
        checkboxSelection
      />
      </ThemeProvider>
    </div>
  );
}