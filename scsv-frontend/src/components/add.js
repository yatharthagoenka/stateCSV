import React,{useState} from 'react'
import axios from 'axios';
import { Table,Button } from 'react-bootstrap';
import '../index.css';


export default function Add() {
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str) => {
        const headers = ["name","code"];
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(',');
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    axios.interceptors.request.use(
        config=>{
            config.headers.Authorization = `Bearer ${localStorage.getItem("scsvJWT")}`;
            return config;
        },
        error=>{
            console.log(error)
        }
    )

    const addState=(name,code)=>{
        axios.post("http://localhost:5000/state/post",{"name":name,"code":code})
        .then(res => {
            console.log(res.data)
        }).catch(err => { 
           console.log(err)
        })
    }

    return(
        <div className='indexTable'>
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <br/>
            <Button
            variant='primary'
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
                }}>Populate Table</Button>
            <br/>
            <br/>
            <p>Click Add for each row you wish to be added to the database. Once done, head back to the Home tab to view the updated data.</p>
            {csvArray.length>0 ? 
            <>
                <Table striped bordered hoverable>
                    <thead>
                        <th>State</th>
                        <th>Code</th>
                        <th>Add</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td><Button variant="success" onClick={()=>addState(item.name,item.code)}>Add</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </> : null}
        </form>
        </div>
    );
    
}