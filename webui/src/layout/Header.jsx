import { useEffect, useState } from 'react';
import { Button, Switch } from '../components/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleThemeChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(
    () => {},
    [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document
        .querySelector('html')
        .classList.toggle('dark', checked),
    ],
    [checked]
  );

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (!auth) return;

    const user = JSON.parse(auth);

    if (user) {
      setUser(user);
    }
  }, [setUser, user]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className="p-4 border-b-2 mb-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white">
          Fake News Prediction
        </h1>
        {/* Authentication */}

        {/* Theme Toggle Switch */}
        <div className="flex">
          {user ? (
            <>
              <div className="inline mr-4 dark:text-white font-semibold">
                Welcome {user.username}!
              </div>
              <div className="inline mr-2">
                <Button size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="inline mr-4">
              <Link
                className="bg-primary-700 hover:bg-primary-800 text-white px-2 py-1 text-sm rounded-full font-bold transition duration-150"
                size="sm"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
          <div>
            <Switch
              onChange={handleThemeChange}
              label="Dark Mode"
              checked={checked}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
