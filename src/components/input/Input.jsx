

import axios from 'axios';
import React, { useEffect, useState } from 'react'
 
const Input = () => {
 
   //get form input value using state
   const [input, setInput] = useState({
       name : '',
       email: '',
       cell : '',
       uname : '',
       gender: '',
       photo : '',
   });

   //get all user data
   const [ users, setUsers] = useState([])


    
   //alert management
   const [ alert, setAlert] = useState({
       msg : 'This is an alert',
       type : 'danger',
       status: false
 
   });
 
 
   // validating the form
   const {name, email, cell, uname, photo} = input
 
   const handleFormSubmit = (e) => {
       e.preventDefault();
      
       if( name === '' || email === '' || cell === ''|| uname === ''){
           setAlert({
               msg : 'Al fielda are required',
               type: 'danger',
               status: true
           })
       }
       else{

            axios.post('http://localhost:5050/users', input).then( res => {

                setAlert({
                    msg : 'Data Stable',
                    type : 'success',
                    status: true
                })

                setInput({
                    name : '',
                    email : '',
                    cell : '',
                    uname : '',
                    photo : ''

                })

            }).catch( error => {
                console.log(error);
            })

  
       }
   }
   //Alert close
 
   const handleALertClose = () => {
       setAlert({
           msg : '',
           type: 'danger',
           status: false
       })
   }

   //user data delete

   const handleUserDelete = (id) => {
        axios.delete('http://localhost:5050/users/' + id)

   }
   //get all user data

   useEffect(() => {

        axios.get('http://localhost:5050/users').then( res => {

            setUsers(res.data);

        }).catch(err => {
            console.log(err);
        });
   },[users]);


 
 return (
  
   <>
       <div className="container">
           <div className="row">
               <div className="col-md-4">
                   <div className="card shadow-sm">
                       <div className="card-header">
                           <h2>Create New User</h2>
                       </div>
                       <div className="card-body">
 
                           {
                               alert.status && <p className={ `alert alert-${alert.type} d-flex justify-content-between` } >{ alert.msg } <button onClick={ handleALertClose }
                               className='btn-close' ></button></p>
                           }
 
                          
                           <form action="" onSubmit={ handleFormSubmit }>
                               <div className="my-3">
                                   <label htmlFor="">Name</label>
                                   <input type="text" className='form-control' value={ name } onChange={ e => setInput( {...input, name:e.target.value} )}/>
                               </div>
                               <div className="my-3">
                                   <label htmlFor="">Email</label>
                                   <input type="text" className='form-control' value={ email } onChange={ e => setInput( {...input, email:e.target.value} )}/>
                               </div>
                               <div className="my-3">
                                   <label htmlFor="">Cell</label>
                                   <input type="text" className='form-control' value={ cell } onChange={ e => setInput( {...input, cell:e.target.value} )}/>
                               </div>
                               <div className="my-3">
                                   <label htmlFor="">Username</label>
                                   <input type="text" className='form-control' value={ uname } onChange={ e => setInput( {...input, uname:e.target.value})}/>
                               </div>
                               <div className="my-3">
                                   <label htmlFor="">Photo</label>
                                   <input type="text" className='form-control' value={ photo } onChange={ e => setInput( {...input, photo:e.target.value})}/>
                               </div>
                               
                               <div className="my-3">
                                   <label htmlFor="">Gender</label>
                                   <hr />
                                   <input name="gender" type="radio" value="Male" id="Male" onClick={ e => setInput({...input, gender: e.target.value})}/><label htmlFor="Male">Male</label>
                                   <input name="gender" type="radio" value="Female" id="Female" onClick={ e => setInput({...input, gender: e.target.value})}/><label htmlFor="Female">Female</label>
                               </div>
                               <div className="my-3">
                                 
                                   <input type="submit" className='btn btn-primary'  />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
               <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h2>All users</h2>
                    </div>
                    <div className="card-body">
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Cell</th>
                                    <th>Username</th>
                                    <th>Gender</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map( (data, index) => 
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.cell}</td>
                                        <td>{data.uname}</td>
                                        <td>{data.gender}</td>
                                        <td><img style= {{ width:"50px", height:"50px", objectFit:"cover"}}src={data.photo} alt="" /></td>
                                        
                                        <td>
                                            <button onClick={ () => handleUserDelete(data.id)} className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                  
               </div>
           </div>
       </div>
   </>
 )
}
 
export default Input