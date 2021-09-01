import React,{useState} from "react"
import "./styles.css";

export default function Branch(){

  const[BranchDetails,setBranchDetails]=useState({
    ComapanyName:"",
    BranchName:"",
    GstNo:"",
    Address:""
});
 
const handleSubmit = (e) => {
        e.preventDefault();
}
  return(
    <div>
     {/* branch details */}
      
     <div>
       <form onSubmit={handleSubmit}>
      <h3 style={{marginTop:"3rem"}}>branch details</h3>
        <div style={{border:"1px solid black",padding:"2rem"}}>
          <lable>Company name :</lable>
          <select  value={BranchDetails.CompanyName}
      onChange={e=>setBranchDetails({CompanyName:e.target.value})} name="cars" id="cars">
            <option value="codingmart">codingmart</option>
          
          </select>
          <br />
          <br />
          <lable>Branch Name :</lable>
          <input
          value={BranchDetails.BranchName}
          onChange={e=>setBranchDetails({BranchName:e.target.value})}></input>
          <br />
          <br />
          <lable>Gst No :</lable>
          <input
          value={BranchDetails.GstNo}
          onChange={e=>setBranchDetails({GstNo:e.target.value})}></input>
          <br />
          <br />
          <lable>Address :</lable>
          <input
          value={BranchDetails.Address}
          onChange={e=>setBranchDetails({Address:e.target.value})}></input>
          <br/>
          <button type="submit" style={{marginTop:"1rem"}}>Search</button>
        </div>
      </form>
      </div>
      

      {/* final output */}
      <div style={{border:"1px solid black",borderTop:"1px solid white",paddingTop:"2rem",paddingBottom:"2rem"}}>
        <h4 style={{marginRight:"35rem"}}>Company name:</h4>
  <table >
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
      </div>
    </div>
  );
  }
  
