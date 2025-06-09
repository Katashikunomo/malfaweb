import { Link } from "react-router-dom"

const RouteLink = ({ to, children, preloadComponent, ...props }) => {
  const handleMouseEnter = () => {
    if (preloadComponent) {
      preloadComponent()
    }
  }

  return (
    <Link to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Link>
  )
}

export default RouteLink
