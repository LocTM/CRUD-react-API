import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Create(){
    const navigate = useNavigate()
    return(
        <>
            <h1>DAY LA CREATE</h1>
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
                    <Field name={"name"}></Field>
                    <Field name={"description"}></Field>
                    <Field name={"score"}></Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}