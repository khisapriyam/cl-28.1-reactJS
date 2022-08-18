import React, { useState } from 'react'

const Input = () => {

   const [input, setInput] = useState({
        name : '',
        email : '',
        cell : '',
        uname : '',
        gender : ''

   })
   console.log(input);
    
   let {name, email, cell, uname } = input

   //alert

   const [alert, setAlert] = useState({

        msg: 'tor maire baap',
        type : 'danger',
        status: false

   });

   //validation using form-submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if( name === '' || email === '' || cell === '' || uname === ''){
            setAlert({
                msg : 'All fields are required',
                type: 'danger',
                status: true
            })
        }
        else{
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

            })
            
        }
    }
    //close button

    const handleCloseBtn = () => {
        setAlert({
            msg: 'tor maire baap',
            type : 'danger',
            status: false

        })
    }

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
                                alert.status && <p className={` alert alert-${alert.type} d-flex justify-content-between`}>{alert.msg} <button onClick={handleCloseBtn}className='btn-close'></button></p>

                            }

                            
                        
                            <form action="" onSubmit={ handleFormSubmit}> 
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className='form-control' value={name} onChange={ e => setInput( {...input,name: e.target.value} )}/>
                                </div> 
                                <div className="my-3">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className='form-control' value={email} onChange={ e => setInput( {...input,email:e.target.value} )}/>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Cell</label>
                                    <input type="text" className='form-control' value={cell} onChange={ e => setInput( {...input,cell:e.target.value} )}/>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Username</label>
                                    <input type="text" className='form-control' value={uname} onChange={ e => setInput( {...input,uname:e.target.value} )}/>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gender</label>
                                    <hr />
                                    <input name="gender" type="radio" value="Male" id="Male" onChange={ e => setInput( {gender:e.target.value} )}/><label htmlFor="Male">Male</label >
                                    <input name="gender" type="radio" value="Female" id="Female" onChange={ e => setInput( {gender:e.target.value} )} /><label htmlFor="Female">Female</label>
                                </div>
                                <div className="my-3">
                                   
                                    <input type="submit" className='btn btn-primary'  />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Input