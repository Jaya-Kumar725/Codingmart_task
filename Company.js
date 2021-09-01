import React,{useState} from "react"
import "./styles.css";


export default function Company(){

  const[Details,setDetails]=useState({
    CompanyName:"",
    NatureOfBusiness:""
});
 
const handleSubmit = (e) => {
      var cName=Details.CompanyName
      var cBuisness=Details.NatureOfBusiness
        alert(cName);
        alert(cBuisness);
        e.preventDefault();

}
 
 
return(
  <div>
 <h3>Company details</h3>
 <form onSubmit={handleSubmit}>
      <div style={{ border: "1px solid black", padding: "2rem" }}>
        <lable>Company name :</lable>
        <input value={Details.CompanyName}
      onChange={e=>setDetails({CompanyName:e.target.value})}></input>
        <br />
        <br />
        <lable>Nature of Buisness :</lable>
        <input    value={Details.NatureOfBusiness}
      onChange={e=>setDetails({NatureOfBusiness:e.target.value})}></input>
         <br/>
      <button type="submit" style={{marginTop: "1rem"}}>Save</button>
      </div>
    </form>
  </div>
);
}

