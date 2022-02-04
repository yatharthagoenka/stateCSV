import React,{useEffect,useState} from 'react'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button,InputGroup,FormControl } from 'react-bootstrap';
import '../index.css';



export default function Index() {
    const [data, setData] = useState([])
    const [updateFieldToggle, setUpdateFieldToggle] = useState(false)
    const [updatedName,setUpdatedName] = useState("")
    const [updatedCode,setUpdatedCode] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/state/allStates")
        .then(resp => resp.json())
        .then(resp => {
            setData(resp)
        })
    }, [])

    axios.interceptors.request.use(
        config=>{
            config.headers.Authorization = `Bearer ${localStorage.getItem("scsvJWT")}`;
            return config;
        },
        error=>{
            console.log(error)
        }
    )

    const deleteState=(id)=>{
        axios.delete("http://localhost:5000/state/delete",{params: {stateID: id}}  
        )
        .then(res => {
            window.location.reload(false);
            console.log(res)
        }).catch(err => { 
           console.log(err)
        })
    }

    const toggleUpdateField=(id)=>{
        axios.put("http://localhost:5000/state/edit",{"name":updatedName,"code":updatedCode},{params: {stateID: id}}  
        )
        .then(res => {
            window.location.reload(false);
            console.log(res)
        }).catch(err => { 
           console.log(err)
        })
    }
    

    function JsonDataDisplay(){
        const DisplayData=data.map((e,i)=> {
            return (
                <tr>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.code}</td>
                    <td><Button variant="warning" onClick={()=>toggleUpdateField(e._id)}>Update</Button> <Button variant="danger" onClick={()=>deleteState(e._id)}>Delete</Button></td>
                </tr>
            )
        }
            
        )
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Code</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </Table>
        )
    }
    
    return (
        <>
        <div className='indexTable'>
            <div className='updatefields'>
                <p>Enter the updated information first and click Update for the record you want to set the information to.</p>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Update Field</InputGroup.Text>
                    <FormControl aria-label="name" placeholder='Name' onChange={e => setUpdatedName(e.target.value)}/>
                    <FormControl aria-label="code" placeholder='Code' onChange={e => setUpdatedCode(e.target.value)} />
                </InputGroup>
                {/* <Button onClick={updateState} variant='secondary'>Push Changes</Button> */}
            </div>
            <br/>
            {JsonDataDisplay()}
        </div>
        </>
    )
    

    
}