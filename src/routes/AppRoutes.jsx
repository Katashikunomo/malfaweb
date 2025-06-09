// export default AppRoutes;
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/header"
import Footer from "../components/footer"
import { ScrollToTop } from "../components/ScrollToTop"
import { FloatingElements } from "../components/FloatingElements"
import {
  LoadingFallback,
  PublicPageLoader,
  ContentLoader,
  SkeletonLoader,
  ProgressLoader,
} from "../components/loaders/LoadingComponents"

const Home = lazy(() => import("../components/home/banner"))
const About = lazy(() => import("../components/about/about-section"))
const Servicios = lazy(() => import("../components/services/services-section"))
const Contact = lazy(() => import("../components/contact/contact-form"))

const NotFound = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="text-8xl mb-4">🚀</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Página no encontrada</h1>
      <p className="text-gray-600">La página que buscas no existe</p>
    </div>
  </div>
)

const PublicLayout = ({ children }) => (
  <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <FloatingElements />
    <Navbar />
    <main className="relative z-10">
      <Suspense fallback={<PublicPageLoader />}>{children}</Suspense>
    </main>
    <Footer />
  </div>
)

const RouteWithLoader = ({ children, loaderType = "default", message }) => {
  const getLoader = () => {
    switch (loaderType) {
      case "content":
        return <ContentLoader />
      case "skeleton":
        return <SkeletonLoader />
      case "progress":
        return <ProgressLoader message={message} />
      case "public":
        return <PublicPageLoader />
      default:
        return <LoadingFallback />
    }
  }

  return <Suspense fallback={getLoader()}>{children}</Suspense>
}

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <PublicLayout>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWithLoader loaderType="public">
                <Home />
              </RouteWithLoader>
            }
          />
          <Route
            path="/about"
            element={
              <RouteWithLoader loaderType="public">
                <About />
              </RouteWithLoader>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteWithLoader loaderType="public">
                <Contact />
              </RouteWithLoader>
            }
          />
          <Route
            path="/services"
            element={
              <RouteWithLoader loaderType="public">
                <Servicios />
              </RouteWithLoader>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PublicLayout>
    </>
  )
}

const AppRoutes = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
)

export default AppRoutes
