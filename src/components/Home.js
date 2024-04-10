import {Link, useNavigate} from "react-router-dom";
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
        const confirm = window.confirm("Ban muon xoa phai khong");
        if (confirm){
            axios.delete('http://localhost:3001/students/' + id).then(res =>{
                alert("Xoa thanh cong");
              setIsDelete(!isDelete)

            })
        }
    }
    return(
        <>
            <h1>DAY LA TRANG HOME</h1>
            <h1>DANH SACH SINH VIEN</h1>
            <Link to = {"/create"}><button>THEM SINH VIEN</button></Link>

            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Ten Sinh vien</th>
                    <th>Mo ta</th>
                    <th> Score</th>
                    <th> Action</th>
                </tr>
                </thead>
                <tbody>
                {student.map((student, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td><Link to={"read/" + student.id} >{student.name}</Link></td>
                        <td>{student.description}</td>
                        <td>{student.score}</td>
                        <td>
                            <button onClick={event => handleDelete(student.id)}>Delete</button>
                            <button>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}