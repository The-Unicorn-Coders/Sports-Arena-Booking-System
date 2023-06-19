import React from "react";
import "../CSS/Owner.css";
import { AiOutlinePlusSquare,AiFillStar,AiOutlineStar} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import DataTable from "../Styles/Table.css";


export default function Owner() {
  return (
    <div className="main">
      <div className="upper">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "126px", marginTop: "90px",marginBottom:"25px" }}>
            <h3 style={{ display: "flex", flexDirection: "row",color:"#B7F500",fontSize:"25px",fontWeight:"700"}}>
              Grounds
              <div style={{ marginTop: "2px",marginLeft:"17vh" }}>
                <AiOutlinePlusSquare />
              </div>
            </h3>
            <div style={{marginTop:"-15px"}}>
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                style={{height:"40px",width:"250px"}}
              >
                <option selected>Select a Ground</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{backgroundColor:"white",width:"55vh",height:"14vh",marginTop:"14vh",marginLeft:"83vh",borderRadius:"10px"}}>
                <div style={{display:"flex",flexDirection:"row"}}><div><h3 style={{fontSize:"25px",marginLeft:"18px",color:"#1C5555",display:"flex",flexDirection:"row"}}>KHR Indoor Cricket  <div style={{marginTop:"4px",marginLeft:"8px"}}><BiEdit/></div></h3>
                <div style={{fontSize:"20px", color:"#1C5555",marginLeft:"18px",marginTop:"-22px"}}><MdOutlineLocationOn/> <h5 style={{display:"flex", flexDirection:"row", color:"#1C5555",fontSize:"12px",marginLeft:"18px",marginTop:"-22px"}}>NO. 112/3/E, Katubedda, Moratuwa</h5></div></div>
                <div style={{marginLeft:"5vh"}}><h1 style={{paddingLeft:"20px",color:"#1C5555"}}>4.2</h1><div style={{marginTop:"-15px"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div></div>
                </div>
               
            </div>
          </div>
        </div>
      </div>
      <div className="bellow">
        <h2 style={{marginLeft:"126px",marginTop:"20px",color:"#1C5555"}}>Bookings</h2>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"233px",height:"415px",backgroundColor:"green",marginLeft:"126px", borderRadius:"10px"}}>
                <div style={{width:"233px",height:"80px",backgroundColor:"#1C5555",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",marginTop:"-17px"}}><h3 style={{color:"white",textAlign:"center",paddingTop:"2.5vh"}}>Courts</h3></div>
                <div style={{width:"219px",height:"44px",backgroundColor:"white",borderRadius:"5px",marginLeft:"8px",marginTop:"-1vh"}}><h3 style={{color:"black",textAlign:"center",paddingTop:"8px"}}>List Items</h3></div>
                <div style={{width:"219px",height:"44px",backgroundColor:"white",borderRadius:"5px",marginLeft:"8px",marginTop:"-1vh"}}><h3 style={{color:"black",textAlign:"center",paddingTop:"8px"}}>List Items</h3></div>
                <div style={{width:"219px",height:"44px",backgroundColor:"white",borderRadius:"5px",marginLeft:"8px",marginTop:"-1vh"}}><h3 style={{color:"black",textAlign:"center",paddingTop:"8px"}}>List Items</h3></div>
            </div>
            <div style={{width:"1001px",height:"415px",marginLeft:"20px",border:"10px solid #E0E0E0",borderRadius:"10px"}}>
                <DataTable/>
            </div>
        </div>
      </div>
    </div>
  );
}
