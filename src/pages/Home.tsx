import { Link } from "react-router-dom"

export const Home: React.FC = () => {
  return <div>
    <h1>Home</h1>
    <Link to="dashboard"><h3>Go to Dashboard</h3></Link>
  </div>
}