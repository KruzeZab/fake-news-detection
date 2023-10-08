import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const result = {
      authenticated: true,
      username: values.username,
      password: values.password,
    };

    localStorage.setItem('auth', JSON.stringify(result));
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-36 max-w-lg border p-4 rounded">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded-md focus:ring-1 outline-none"
            required
            autoFocus
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:ring-1 outline-none"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md focus:ring-1 outline-none"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </div>
        <hr className="my-4" />
        <Link to="/login" className="text-blue-500 hover:underline">
          Click here to Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
