import React, { useState } from 'react'



const CreateEmploye = () => {
    const[formData, setFormdata] = useState({
        name:'',
        email:'',
        password:'',

    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>  {
        const {name , value} = e.target;
        setFormdata((prevData)=> ({
            ...prevData, 
            [name]:value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <>
<div className="min-h-screen flex items-center justify-center">
    <div className="w-1/2">
    <div className="min-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-6">
      Create User
    </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  </div>
    </div>
 
</div>

        
    </>
  )
}

export default CreateEmploye