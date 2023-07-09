import * as React from 'react';
import { useTheme, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Label, ResponsiveContainer,Legend } from 'recharts';

export default function OverviewChart(){
  const theme = useTheme();
  // Sample data
  const data = [
    { name: 'JAN', Court1: 0, Court2: 0, Court3: 10, Court4: 0 },
    { name: 'FEB', Court1: 0, Court2: 30, Court3: 0, Court4: 0 },
    { name: 'MAR', Court1: 25, Court2: 0, Court3: 0, Court4: 0 },
    { name: 'APR', Court1: 0, Court2: 0, Court3: 5, Court4: 0 },
    { name: 'MAY', Court1: 15, Court2: 25, Court3: 12, Court4: 23 },
    { name: 'JUN', Court1: 40, Court2: 25, Court3: 12, Court4: 23 },
    { name: 'JUL', Court1: 30, Court2: 10, Court3: 55, Court4: 30 },

  ];

  return (
    <React.Fragment>
      <Typography variant="h5" style={{ fontWeight: 600, color: '#1C5555' }}>
        Income Summary
      </Typography>

      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <BarChart data={data} >
            <XAxis dataKey="name" stroke="#1E293B" style={theme.typography.body2}>
              <Label
               position="insideBottom"
               offset={-5}
                style={{
                  textAnchor: 'middle',
                  fill: '#1E293B',
                  ...theme.typography.body1,
                }}
              >
                Month
              </Label>
            </XAxis>
            <YAxis stroke="#1E293B" style={theme.typography.body2}>
              <Label
                position="insideLeft"
                angle={-90}
                style={{
                  textAnchor: 'middle',
                  fill: '#1E293B',
                  ...theme.typography.body1,
                }}
              >
                Income (Rs.)
              </Label>
            </YAxis>
            <Bar dataKey="Court1" stackId="a" fill="#1C5555" />
            <Bar dataKey="Court2" stackId="a" fill="#347E7E" />
            <Bar dataKey="Court3" stackId="a" fill="#4AAAAA" />
            <Bar dataKey="Court4" stackId="a" fill="#8cc2c2" />
            <Legend verticalAlign="top" align="center" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
}
