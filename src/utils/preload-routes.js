// Utilidades para precargar rutas cuando el usuario hace hover
export const preloadRoute = (routeImport) => {
    const componentImport = routeImport()
    return componentImport
  }
  
  // Funciones específicas para precargar cada ruta
  export const preloadHome = () => preloadRoute(() => import("../components/home/banner"))
  export const preloadAbout = () => preloadRoute(() => import("../components/about/about-section"))
  export const preloadServices = () => preloadRoute(() => import("../components/services/services-section"))
  export const preloadContact = () => preloadRoute(() => import("../components/contact/contact-form"))
  