import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-pink-200 p-8 shadow-md rounded-md h-[500px] w-[500px]">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
