import React, { useState } from 'react';
import './datatable.css';
import Modal from '../../pages/contact/Modal';
export default function Datatable({ data }) {
    
    // Modal Send Success
    const [modal, showModal] = useState(false);
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState(true);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ title: 'React POST Request Example' })
    };
    function sendEmail(email) {
        // console.log(data.map(e=>e.email))
        console.log(email)
        // fetch(`http://192.168.15.166:3030/sendEmail?email=${email}`, requestOptions)
        // .then(res=>{
        //     res.json();
        //     if(response.status == 200) {
        //         setMsg('Email enviado com Sucesso!');
        //         setStatus(true);
        //         showModal(true);
        //         setInterval(() => {
        //             showModal(false);
        //         }, 3000);
        //     }else{
        //         setMsg('Houve um Erro ao Enviar Email')
        //         setStatus(false);
        //         showModal(true);
        //         setInterval(() => {
        //             showModal(false);
        //         }, 3000);
        //     }
        // })
    }

    const columns = data[0] && Object.keys(data[0])
    // console.log(columns);
    return(
        <section className="table-container">
        <h1 className="heading">Users Table</h1>
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && 
                columns.map((heading, index)=><th key={index}>{heading}</th>)}
                <th>Send Email</th>
                </tr>
            </thead>            
            <tbody>
            {data.map(row=>(<tr>
                {
                    columns.map((column, index)=><td key={index}>{row[column]}</td>)
                    // data.map((e, index)=><td key={index} onClick={()=> {sendEmail(e.email)}}>&#9993;</td>)
                }
                {
                  // <td onClick={sendEmail()}>&#9993;</td>
                }                
            </tr>))}
            </tbody>
        </table>
        <Modal show={modal} msg={msg} status={status}/>
        </section>
    );
} 