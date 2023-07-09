import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";


/*import { useTheme } from "@mui/material";*/


class PieRechartComponent extends React.Component {
   COLORS = [" #1C5555", "#347E7E", "#4AAAAA", "#8cc2c2"];
   /*pieData = [
      {
         name: "Court 1",
         value: 54.85
      },
      {
         name: "Court 2",
         value: 47.91
      },
      {
         name: "Court 3",
         value: 16.85
      },
      {
         name: "Court 4",
         value: 16.14
      },
      
   ];*/


   state = {
      pieData: [],
    };
  
    componentDidMount() {
      this.fetchPieData();
    }
  
    /*fetchPieData = async () => {
      try {
        const response = await axios.get("/api/payments");
        const pieData = response.data; // Assuming the API response is an array of pie data objects
        this.setState({ pieData });
      } catch (error) {
        console.error("Error fetching pie data:", error);
      }
    };*/

    fetchPieData = async () => {
      try {
        const response = await axios.get("/api/payments"); // Assuming the API endpoint is at /api/payments
        const pieData = response.data.map((payment) => ({
          name: payment._id,
          value: payment.totalAmount,
        }));
        this.setState({ pieData });
      } catch (error) {
        console.error("Error fetching pie data:", error);
      }
    };

   CustomTooltip = ({ active, payload, label }) => {
      /*const theme = useTheme();*/
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#f0f0f0",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label style={{ color: "#191919" }}>{`${payload[0].name} : Rs.${payload[0].value}`}</label>
         </div>
      );
   }
   return null;
};
render() {
   const { pieData } = this.state;

   return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "-20px" }}>
      <PieChart width={350} height={230}>
      <Pie
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={85}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      </div>
      );
   }
}
export default PieRechartComponent;