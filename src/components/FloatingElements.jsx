import { motion } from "framer-motion"

export const FloatingElements = () => {
  const elements = [
    {
      id: 1,
      size: "w-20 h-20",
      position: "top-20 left-10",
      gradient: "from-blue-400/10 to-purple-500/10",
      shape: "rounded-3xl",
      duration: 8,
    },
    {
      id: 2,
      size: "w-16 h-16",
      position: "top-40 right-16",
      gradient: "from-pink-400/10 to-red-500/10",
      shape: "rounded-full",
      duration: 10,
    },
    {
      id: 3,
      size: "w-12 h-12",
      position: "bottom-32 left-20",
      gradient: "from-green-400/10 to-blue-500/10",
      shape: "rounded-2xl",
      duration: 12,
    },
    {
      id: 4,
      size: "w-24 h-24",
      position: "bottom-20 right-32",
      gradient: "from-yellow-400/10 to-orange-500/10",
      shape: "rounded-full",
      duration: 15,
    },
    {
      id: 5,
      size: "w-14 h-14",
      position: "top-60 left-1/3",
      gradient: "from-indigo-400/10 to-purple-600/10",
      shape: "rounded-2xl",
      duration: 9,
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.position} bg-gradient-to-br ${element.gradient} ${element.shape} backdrop-blur-sm`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: element.id * 0.5,
          }}
        />
      ))}

      {/* Gradientes adicionales */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl" />
    </div>
  )
}
