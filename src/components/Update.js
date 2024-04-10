import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Update() {
    let navigate = useNavigate()
    let {id} = useParams()
    let [data, setData] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3001/students/" + id).then(res => {
            setData(res.data)
            console.log(res.data)
        })
    }, []);
    return(
        <>
            <h1>Sửa thông tin sinh viên</h1>
           <Formik
               initialValues={data}
               onSubmit={values => {
                   console.log(values)
                   axios.put("http://localhost:3001/students/" + id, values).then(res => {
                       setData(res.data)
                       console.log(res.data)
                       alert("Sửa thành công")
                       navigate("/")
                   })
               }}
               enableReinitialize={true}
           >
               <Form>
                   <label htmlFor="exampleFormControlInput1">Id</label>
                   <Field name={'id'} type="text" className="form-control" id="exampleFormControlInput1"/>
                       <label htmlFor="exampleFormControlInput1">Tên sinh viên</label>
                       <Field name={'name'} type="text" className="form-control" id="exampleFormControlInput1"/>
                           <label htmlFor="exampleFormControlInput1">Mô tả</label>
                           <Field name={'description'} type="text" className="form-control" id="exampleFormControlInput1"/>
                               <label htmlFor="exampleFormControlInput1">Điểm</label>
                               <Field name={'score'} type="text" className="form-control" id="exampleFormControlInput1"/>
<br/>
<br/>

                   <button type="submit" className="btn btn-warning">Save</button>
               </Form>

           </Formik>
        </>
    )
}