import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home(){
    let navigate = useNavigate()
    let [student, setStudent] = useState([])
    let [isDelete, setIsDelete] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res => {
            setStudent(res.data)
        })
    }, [isDelete]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
        if (confirm){
            axios.delete('http://localhost:3001/students/' + id).then(res =>{
                alert("Xóa thành công");
              setIsDelete(!isDelete)

            })
        }
    }
    return(
        <>
            <div className={"containerH"} >
            <h1>DANH SÁCH SINH VIÊN</h1>
            <Link to = {"/create"}><button type="button" className="btn btn-success">+ Thêm sinh viên</button></Link>
            <table className={"table"} >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sinh viên</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Điểm</th>
                    <th scope="col">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {student.map((student, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td ><Link to={"read/" + student.id} >{student.name}</Link></td>
                        <td>{student.description}</td>
                        <td>{student.score}</td>
                        <td>
                            <button type="button" className="btn btn-outline-danger" onClick={event => handleDelete(student.id)}>Delete</button>
                            <Link to={"edit/" + student.id}><button type="button" className="btn btn-outline-warning">Edit</button></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    )
}