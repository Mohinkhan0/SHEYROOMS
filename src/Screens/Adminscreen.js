// import React from 'react'
import axios from "axios";
import React, { useState, useEffect } from "react";

function Adminscreen() {

  const [name, setname] = useState()
  const [rentperday, setrentperday] = useState()
  const [maxcount, setmexcount] = useState()
  const [description, setdescription] = useState()
  const [phonenumber, setphonenumber] = useState()
  const [type, settype] = useState()
  const [imageurl1, setimageurl1] = useState()
  const [imageurl2, setimageurl2] = useState()
  const [imageurl3, setimageurl3] = useState()

  async function addRoom() {
    const newroom ={
      name ,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls:[imageurl1,imageurl2,imageurl3]
    }
    try {
      const result= await (await axios.post('/api/rooms/addroom' , newroom)).data
      console.log(result)
      window.location.href = '/home';
      alert(" Room Added Successfully ")
    } catch (error) {
      console.log(error); 
    }
    
  }

  return (
    <div className='text-center'>
      <h1 className='Admin-h1'> Admine pannel</h1>
      <div className='row ml-5'>

        <div className='col-md-5'>
          <input type='text' className='form-control' placeholder='Room name' 
            value={name} onChange={(e)=>{setname(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder='Rent par Day' 
          value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder='Max count' 
          value={maxcount} onChange={(e)=>{setmexcount(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder='Description' 
          value={description} onChange={(e)=>{setdescription(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder='Phone No.' 
          value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}
          />
        </div>

        <div className='col-md-5'>
          <input type='text' className='form-control' placeholder='Type' 
          value={type} onChange={(e)=>{settype(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder= 'Image URL 1'
          value={imageurl1} onChange={(e)=>{setimageurl1(e.target.value)}}
          />
          <input type='text' className='form-control' placeholder=' Image URL 2' 
          value={imageurl2} onChange={(e)=>{setimageurl2(e.target.value)}}/>
          <input type='text' className='form-control' placeholder=' Image URL 3' 
          value={imageurl3} onChange={(e)=>{setimageurl3(e.target.value)}}
          />


          <div className='text-right'>
          <button className='btn btn-primary mt-5' onClick={addRoom}>Add Room</button>
          </div>
          

        </div>

      </div>



    </div>
  )
}

export default Adminscreen
