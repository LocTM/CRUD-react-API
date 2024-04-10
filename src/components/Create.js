import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Create.css'

export default function Create(){
    const navigate = useNavigate()
    return(
        <>
            <div className={"containerCR"}>
                <h1>THÊM SINH VIÊN</h1>
            <Formik
                initialValues={{
                    name: '',
                    description:'',
                    score:'',
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:3001/students',values).then(()=>{
                        alert("Thanh cong")
                        navigate("/")
                    })
                }}>

                <Form>
                    <br/>
                    <br/>
                    <div className="mb-3" >
                        <span htmlFor="formGroupExampleInput" className="form-label"></span>
                        <Field name={"name"} type="text" className="form-control" id="formGroupExampleInput" placeholder="Tên sinh viên" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"></label>
                        <Field name={"description"} className="form-control" id="formGroupExampleInput2" placeholder="Mô tả" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label"></label>
                        <Field name={"score"} className="form-control" id="formGroupExampleInput2" placeholder="Điểm"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Add</button>
                </Form>
            </Formik>
            </div>
        </>
    )
}