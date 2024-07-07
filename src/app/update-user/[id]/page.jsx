'use client';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {

  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  const submitForm = async (values) => {
    const res = fetch('http://localhost:5000/user/update/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    console.log(res.status);
  }

  return (
    <div className='py-5 col-md-4 mx-auto'>
      <div className='shadow card'>
        <div className='card-body'>
          <h3 className='my-3 text-center'>Update User</h3>

          {
            userData !== null ? (
              <Formik initialValues={userData} onSubmit={submitForm} >
                {(userForm) => {
                  return (
                    <form onSubmit={userForm.handleSubmit}>
                      <label htmlFor="name">Name</label>
                      <input id="name" onChange={userForm.handleChange} value={userForm.values.name} type="text" className='form-control mb-3' />

                      <label htmlFor="email">Email Address</label>
                      <input id="email" onChange={userForm.handleChange} value={userForm.values.email} type="email" className='form-control mb-3' />

                      <label htmlFor="password">Password</label>
                      <input id="password" onChange={userForm.handleChange} value={userForm.values.password} type="password" className='form-control mb-3' />

                      <button className='mt-3 btn btn-primary'>Submit</button>
                    </form>
                  )
                }}
              </Formik>
            ) : (
              <p className='text-muted h1 text-center'>Loading ... </p>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default UpdateUser;