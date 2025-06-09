import { motion } from "framer-motion"
import { Spin, Progress } from "antd"

export const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
        M
      </div>
      <Spin size="large" />
      <p className="mt-4 text-gray-600">Cargando...</p>
    </motion.div>
  </div>
)

export const PublicPageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold mx-auto mb-4"
      >
        🚀
      </motion.div>
      <p className="text-gray-600">Preparando contenido...</p>
    </motion.div>
  </div>
)

export const ContentLoader = () => (
  <div className="animate-pulse space-y-4 p-8">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
)

export const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-64 w-full rounded-3xl mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
)

export const ProgressLoader = ({ message = "Cargando..." }) => (
  <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
    <Progress type="circle" percent={75} size={80} />
    <p className="text-gray-600">{message}</p>
  </div>
)
