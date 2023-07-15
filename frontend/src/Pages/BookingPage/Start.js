import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import moment from 'moment';
import './Start.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const columns = [
  { field: 'bookingid', headerName: 'ID', flex: 1 },
  {
    field: 'court',
    headerName: 'Court',
    flex: 1,
    align: 'left',
    format: (value) => formatDate(value),
    sortable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    align: 'left',
    format: (value) => formatDate(value),
    sortable: false,
  },
  {
    field: 'time',
    headerName: 'Time',
    flex: 1,
    align: 'left',
    format: (value) => moment.utc(value * 1000).format('HH:mm:ss'),
  },
  {
    field: 'duration',
    headerName: 'Duration',
    flex: 1,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    align: 'left',
    sortable: false,
    renderCell: StatusCell, // Use the custom hook function
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
          backgroundColor: '#f2f2f2',
        },
        columnHeader: {
          backgroundColor: '#1C5555',
          color: '#ffff',
          fontSize: 16,
        },
        footerContainer: {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});

function StatusCell(params) {
  const { value, row } = params;
  const [canceledBookings, setCanceledBookings] = useState([]);

  let cellStyle = {};

  if (value === 'Active') {
    cellStyle = {
      backgroundColor: '#8de5a9',
      color: 'black',
      border: '1px solid #53c312',
      backgroundColor: '#b3ef94',
      padding: '8px',
      borderRadius: '4px',
    };
  } else if (value === 'Past Booking') {
    cellStyle = {
      color: 'black',
      border: '1px solid #a8af28',
      backgroundColor: '#ecf45c',
      padding: '13px',
      borderRadius: '4px',
      width: '150px',
    };
  } else if (value === 'Canceled') { // Add this block for the "Canceled" status
    cellStyle = {
      backgroundColor: '#ff8080',
      color: 'black',
      border: '1px solid #ff3232',
      backgroundColor: '#ffc3c3',
      padding: '8px',
      borderRadius: '4px',
    };
  }

  const handleCancel = () => {
    setCanceledBookings([...canceledBookings, row.bookingid]);
    row.status = 'Canceled';
  };

  return (
    <div style={cellStyle}>
      {value}
      {value === 'Active' && !canceledBookings.includes(row.bookingid) && (
        <button className="cancelButton" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default function Start() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setBookings(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const rows = bookings.map((booking, index) => ({
    id: index,
    bookingid: booking._id,
    court: booking.selectedCourt,
    date: booking.selectedDate,
    time: booking.selectedTime,
    duration: booking.selectedDuration,
    status: moment(booking.selectedDate).isSameOrAfter(moment(), 'day') ? 'Active' : 'Past Booking',
  }));

  return (
    <div style={{ width: '100%' }}>
      <center>
        <h2 style={{ color: '#1C5555', fontWeight: '600' }}>Customer Bookings</h2>
      </center>
      <ThemeProvider theme={customTheme}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
        />
      </ThemeProvider>
    </div>
  );
}
