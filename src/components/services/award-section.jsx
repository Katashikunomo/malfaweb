import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrophyOutlined, ProjectOutlined, TeamOutlined, CloudOutlined } from "@ant-design/icons"

const AwardSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  })

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
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const awards = [
    {
      icon: <TeamOutlined className="!text-4xl !text-white" />,
      value: 30,
      title: "Clientes Satisfechos",
      suffix: "+",
      gradientClass: "from-blue-500 to-blue-600",
      gradientColors: "#3b82f6, #2563eb",
      textColor: "!text-blue-600",
    },
    {
      icon: <ProjectOutlined className="!text-4xl !text-white" />,
      value: 25,
      title: "Proyectos Completados",
      suffix: "+",
      gradientClass: "from-purple-500 to-purple-600",
      gradientColors: "#a855f7, #9333ea",
      textColor: "!text-purple-600",
    },
    {
      icon: <CloudOutlined className="!text-4xl !text-white" />,
      value: 5,
      title: "Soluciones Cloud",
      suffix: "+",
      gradientClass: "from-orange-500 to-red-500",
      gradientColors: "#f97316, #ef4444",
      textColor: "!text-orange-600",
    },
    {
      icon: <TrophyOutlined className="!text-4xl !text-white" />,
      value: 5,
      title: "Años de Experiencia",
      suffix: "+",
      gradientClass: "from-teal-500 to-teal-600",
      gradientColors: "#14b8a6, #0d9488",
      textColor: "!text-teal-600",
    },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-16 !bg-gradient-to-br from-gray-50 to-slate-100"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <motion.div variants={itemVariants} className="!text-center !mb-12">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="!h-1 !bg-gradient-to-r from-teal-500 to-blue-500 !rounded-full !mx-auto !mb-6"
          />
          <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-4 !text-gray-800">
            Logros y <span className="!text-purple-600">Estadísticas</span>
          </h2>
          <p className="!text-gray-600 !max-w-2xl !mx-auto !text-sm sm:!text-base">
            Números que reflejan mi compromiso con la excelencia y la satisfacción del cliente en cada proyecto.
          </p>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          {awards.map((award, index) => (
            <Col key={index} xs={12} sm={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  className="!h-full !shadow-lg hover:!shadow-2xl !transition-all hover:!-translate-y-2 !duration-500 !text-center !border-0 !overflow-hidden !bg-white/80 !backdrop-blur-sm"
                  bodyStyle={{ padding: 0 }}
                >
                  <div className="!p-6">
                    <motion.div
                      className={`!w-16 !h-16 !bg-gradient-to-r ${award.gradientClass} !rounded-2xl !flex !items-center !justify-center !shadow-lg !mb-4 !mx-auto`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {award.icon}
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8, ease: "backOut" }}
                      className="!mb-3"
                    >
                      <div className="!flex !items-center !justify-center !gap-1">
                        <motion.span
                          className={`!text-4xl sm:!text-5xl !font-bold ${award.textColor}`}
                          style={{
                            background: `linear-gradient(135deg, ${award.gradientColors})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            display: "inline-block",
                          }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          }}
                        >
                          {award.value}
                        </motion.span>
                        <span className={`!text-2xl sm:!text-3xl !font-bold ${award.textColor} !mt-2`}>
                          {award.suffix}
                        </span>
                      </div>
                    </motion.div>

                    <h4 className="!text-sm sm:!text-base !font-semibold !text-gray-700 !leading-tight">
                      {award.title}
                    </h4>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Sección adicional con más detalles */}
        <motion.div variants={itemVariants} className="!mt-16 !text-center">
          <div className="!bg-white/80 !backdrop-blur-sm !p-8 !rounded-3xl !shadow-xl !border !border-gray-100/50 !max-w-4xl !mx-auto">
            <h3 className="!text-xl sm:!text-2xl !font-bold !mb-6 !text-gray-800">
              ¿Por qué elegir <span className="!text-purple-600">MalfaWeb</span>?
            </h3>

            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <div className="!text-center">
                  <div className="!w-12 !h-12 !bg-gradient-to-r from-green-500 to-green-600 !rounded-xl !flex !items-center !justify-center !mx-auto !mb-3">
                    <span className="!text-white !text-xl">✓</span>
                  </div>
                  <h4 className="!font-semibold !text-gray-800 !mb-2">Calidad Garantizada</h4>
                  <p className="!text-sm !text-gray-600">Código limpio y optimizado</p>
                </div>
              </Col>

              <Col xs={24} sm={8}>
                <div className="!text-center">
                  <div className="!w-12 !h-12 !bg-gradient-to-r from-blue-500 to-blue-600 !rounded-xl !flex !items-center !justify-center !mx-auto !mb-3">
                    <span className="!text-white !text-xl">⚡</span>
                  </div>
                  <h4 className="!font-semibold !text-gray-800 !mb-2">Entrega Rápida</h4>
                  <p className="!text-sm !text-gray-600">Proyectos en tiempo récord</p>
                </div>
              </Col>

              <Col xs={24} sm={8}>
                <div className="!text-center">
                  <div className="!w-12 !h-12 !bg-gradient-to-r from-purple-500 to-purple-600 !rounded-xl !flex !items-center !justify-center !mx-auto !mb-3">
                    <span className="!text-white !text-xl">🚀</span>
                  </div>
                  <h4 className="!font-semibold !text-gray-800 !mb-2">Soporte 24/7</h4>
                  <p className="!text-sm !text-gray-600">Asistencia continua</p>
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AwardSection
