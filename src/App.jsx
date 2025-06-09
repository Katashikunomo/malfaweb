// import AppRoutes from "./routes/AppRoutes"
import ErrorBoundary from "./components/error-boundary"
// import Header from "./components/header"
import  AppRoutes  from "./routes/AppRoutes"

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  )
}

export default App
