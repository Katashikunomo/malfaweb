import { Row, Col } from "antd"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { WhatsAppOutlined, DownloadOutlined, RocketOutlined } from "@ant-design/icons"
import Bannerimg from "../../images/banner.svg" // Assuming you have a CSS module for styles

const Banner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.1, once: false })
  const { scrollY } = useScroll()

  // Efectos de parallax
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 1800], [1, 0.2])

  // Efecto de typing
  const [typedText, setTypedText] = useState("")
  const fullText = "Andrés Malfavaun"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Elementos flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-3xl backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl backdrop-blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <Row gutter={[48, 48]} align="middle" className="min-h-[80vh]">
          {/* Imagen - Orden 2 en móvil, 1 en desktop */}
          <Col xs={24} lg={12} className="order-2 lg:order-1">
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative max-w-md mx-auto">
                {/* Imagen principal con efecto glassmorphism */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30"
                >
                  <img
                    src={ Bannerimg }
                    loading="lazy"
                    className="w-full h-auto"
                    alt="Andrés Malfavaun - Desarrollador Full Stack"
                  />

                  {/* Elementos decorativos flotantes */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    <RocketOutlined className="text-xl" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    💻
                  </motion.div>
                </motion.div>

                {/* Elementos decorativos de fondo */}
                <motion.img
                  src="/images/bnr-line.png"
                  className="absolute -z-10 hidden lg:block top-[20%] right-[10%] w-[100px] opacity-30"
                  alt="Decorative line"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.img
                  src="/images/bnr-star.png"
                  className="absolute -z-10 hidden lg:block top-[60%] left-[10%] w-[50px] opacity-40"
                  alt="Decorative star"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
            </motion.div>
          </Col>

          {/* Contenido - Orden 1 en móvil, 2 en desktop */}
          <Col xs={24} lg={12} className="order-1 lg:order-2">
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              {/* Badge de estado */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Disponible para proyectos</span>
              </motion.div>

              {/* Título principal */}
              <motion.h5 variants={itemVariants} className="text-blue-600 text-xl mb-4 font-semibold">
                Desarrollador Web Full Stack
              </motion.h5>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                ¡Hola!{" "}
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block"
                >
                  👋
                </motion.span>{" "}
                <span className="block mt-2">Soy</span>
              </motion.h1>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-8"
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-blue-600"
                >
                  |
                </motion.span>
              </motion.h1>

              {/* Botones de acción */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://wa.me/525637269723?text=Quiero%20contactarme%20contigo%20para%20una%20oferta%20laboral"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 !text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppOutlined className="text-lg" />
                  <span>¡Contrátame!</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 !bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold border !border-gray-200 !hover:bg-white !hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <DownloadOutlined className="text-lg" />
                  <span>Descargar CV</span>
                </motion.button>
              </motion.div>

              {/* Tarjeta de información */}
              <motion.div
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/30"
              >
                <h4 className="text-xl font-bold mb-3 text-gray-800">Freelancer Web, Desarrollador Full Stack</h4>
                <p className="text-gray-600 leading-relaxed">
                  Soy Andrés, también conocido como "MalfaWeb". Me especializo como desarrollador web full stack.
                  <br />
                  Tengo experiencia tanto en el front-end como en el back-end, lo que me permite diseñar y desarrollar
                  sitios web y aplicaciones web completas.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                  {[
                    { label: "Proyectos", value: "50+" },
                    { label: "Clientes", value: "30+" },
                    { label: "Años", value: "5+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default Banner
