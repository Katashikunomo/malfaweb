import React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Loader= () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        !isLoading ? "loader-hidden" : ""
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-center">
        <img src="/images/loader.webp" alt="loader" className="max-w-[100px] h-auto" />
      </div>
    </motion.div>
  )
}

export default Loader
