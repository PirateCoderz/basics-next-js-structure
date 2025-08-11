import HomePage from '@/components/HomePage/HomePage'
import axios from 'axios';
import React from 'react'

const page = async () => {

  let response;

  try {

    console.log('hello');
    response = await axios.get('http://localhost:3000/api/hello');
    console.log(response.data.message);
  } catch (error) {
    console.log(error)
  }
  return (
    <div>
      <p>{response?.data?.message}</p>
      <HomePage />
    </div>
  )
}

export default page