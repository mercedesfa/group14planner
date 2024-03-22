import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Planner
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}