import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div>
      <h1>Login Page </h1>
      <Link to='/products'>
        <h3>Go to Dashboard</h3>
      </Link>
    </div>
  );
};
