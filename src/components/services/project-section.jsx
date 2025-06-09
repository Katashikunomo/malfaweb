import { Row, Col, Card, Button } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CalendarOutlined, EyeOutlined, CodeOutlined } from "@ant-design/icons"

const ProjectSection = () => {
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
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const projects = [
    {
      image: "/images/proj-1.webp",
      category: "Cloud Native",
      time: "2 Meses",
      title: "Plataforma Serverless AWS",
      description: "Arquitectura serverless con Lambda, API Gateway y DynamoDB",
      color: "from-orange-500 to-red-500",
    },
    {
      image: "/images/proj-2.webp",
      category: "E-commerce",
      time: "3 Meses",
      title: "Plataforma de Comercio Electrónico",
      description: "Sistema completo con React, Laravel y MySQL",
      color: "from-blue-500 to-blue-600",
    },
    {
      image: "/images/proj-3.webp",
      category: "Aplicación Web",
      time: "1 Mes",
      title: "Dashboard Administrativo",
      description: "Panel de control con React y visualización de datos",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-16 !bg-gradient-to-br from-white to-gray-50"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row>
          <Col span={24}>
            <motion.div className="!text-center !mb-12" variants={itemVariants}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-purple-500 to-blue-500 !rounded-full !mx-auto !mb-6"
              />

              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-4 !text-gray-800">
                Proyectos <span className="!text-purple-600">Recientes</span>
              </h2>

              <p className="!text-gray-600 !max-w-2xl !mx-auto !text-sm sm:!text-base !leading-relaxed">
                Estos son algunos de mis proyectos más recientes donde he aplicado las últimas tecnologías para crear
                soluciones innovadoras y escalables.
              </p>
            </motion.div>
          </Col>

          <Col span={24}>
            <Row gutter={[24, 24]}>
              {projects.map((project, index) => (
                <Col xs={24} md={8} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      className="!shadow-lg hover:!shadow-2xl !transition-all hover:!-translate-y-2 !duration-500 !overflow-hidden !border-0"
                      cover={
                        <div className="!relative !overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            className="!h-48 !w-full !object-cover !transition-transform !duration-500 hover:!scale-110"
                            alt={project.title}
                          />
                          <div className="!absolute !inset-0 !bg-black/40 !opacity-0 hover:!opacity-100 !transition-opacity !duration-300 !flex !items-center !justify-center">
                            <motion.div
                              className="!flex !gap-3"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Button
                                type="primary"
                                shape="circle"
                                icon={<EyeOutlined />}
                                size="large"
                                className="!bg-white/20 !border-white/30 hover:!bg-white/30"
                              />
                              <Button
                                type="primary"
                                shape="circle"
                                icon={<CodeOutlined />}
                                size="large"
                                className="!bg-white/20 !border-white/30 hover:!bg-white/30"
                              />
                            </motion.div>
                          </div>
                        </div>
                      }
                      // bodyStyle={{ padding: 0 }}
                    >
                      <div className="!p-6">
                        <div className="!flex !justify-between !items-center !mb-3">
                          <motion.span
                            className={`!px-3 !py-1 !rounded-full !text-xs !font-semibold !bg-gradient-to-r ${project.color} !text-white`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {project.category}
                          </motion.span>
                          <span className="!flex !items-center !text-gray-500 !text-sm">
                            <CalendarOutlined className="!mr-1" />
                            {project.time}
                          </span>
                        </div>

                        <h3 className="!text-lg !font-semibold !mb-2 !text-gray-800">{project.title}</h3>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">{project.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24}>
            <motion.div className="!text-center !mt-12" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-gradient-to-r from-purple-500 to-blue-500 !border-0 !px-8 !py-6 !h-auto !rounded-xl !font-semibold !shadow-lg hover:!shadow-xl"
                  href="/portfolio"
                >
                  Ver Más Proyectos
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default ProjectSection
