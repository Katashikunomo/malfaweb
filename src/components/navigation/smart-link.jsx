import { Link } from "react-router-dom"
import { preloadHome, preloadAbout, preloadServices, preloadContact } from "../../utils/preload-routes"

const SmartLink = ({ to, children, className, preload = true, ...props }) => {
  const handleMouseEnter = () => {
    if (!preload) return

    // Precargar componente según la ruta
    switch (to) {
      case "/":
        preloadHome()
        break
      case "/about":
        preloadAbout()
        break
      case "/services":
        preloadServices()
        break
      case "/contact":
        preloadContact()
        break
      default:
        break
    }
  }

  return (
    <Link to={to} className={className} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Link>
  )
}

export default SmartLink
