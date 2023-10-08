import { useNavigate } from 'react-router-dom';
import Header from './layout/Header';
import NewsForm from './layout/NewsForm';
import { useEffect, useState } from 'react';

const initialState = {
  LR: '',
  GB: '',
  DT: '',
  RF: '',
};

const App = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);

    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: value }),
    });

    const data = await response.json();
    setResult(data);
    setValue('');
  };

  return (
    <div className="min-h-screen dark:bg-[#101827] duration-500">
      <Header />
      <main className="mx-6 lg:mx-0 mb-10">
        <div className="container mx-auto text-center max-w-screen-lg">
          <h2 className="text-2xl font-bold lg:text-3xl text-gray-700 dark:text-white mb-8">
            Check if news is real or fake!
          </h2>

          <NewsForm
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {/* Result */}
          {result.LR || result.GB || result.DT || result.RF ? (
            <div className="text-xl text-left max-w-sm mx-auto flex flex-col gap-4 uppercase font-bold text-gray-700 mb-4 dark:text-white">
              <p>Logistic Regression: {result.LR}</p>
              <p>Random Forest: {result.RF}</p>
              <p>Gradient Bososting: {result.GB}</p>
              <p>Decisiton Tree: {result.DT}</p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default App;
