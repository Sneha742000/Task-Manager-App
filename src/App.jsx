import { BrowserRouter, Routes, Route, Navigate,  } from "react-router-dom";
import Home from "./pages/Home" ;
import Form from "./pages/Form";
// import { useState } from "react";
// import Table from "./pages/Table";
// import useForm from "./hooks/useForm";


function App()  {
  // const {formVal, handleChange} = useForm();
  // const [users, setUsers] = useState([]);
  // const pathName = location.pathname;
  // return <>{pathName == "/form" ? <Form /> : <Home />}</>;

//   const [formData, setFormData] = useState ({
//     title: "",
//     description: "",
//     priority: "",
//     date: "",
//   });

//   const [tableData, setTableData] = useState([]);

//   const handleFormData = (e) => {
//     let value = e.target.value;
//     let key = e.target.name;


// let form = {
//   ...formData,
//   [key]: value,
// };

// formData(form);
//   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setUsers([...users, formVal]);
  //   // setTableData({
  //   //   title: "",
  //   //   description: "",
  //   //   priority: "",
  //   //   date: "",
  //   // })
  // };

// console.log("Form data changed", {formData, tableData});
  
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/form" element={<Form />} />
      {/* <Route path="/table" element={<Table handleSubmit={handleSubmit} />} /> */}
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
