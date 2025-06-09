import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  DesktopOutlined,
  AppstoreOutlined,
  BgColorsOutlined,
  CodeOutlined,
  CloudOutlined,
  ApiOutlined,
} from "@ant-design/icons"
import AwardSection from "./award-section"
import ProjectSection from "./project-section"
import SkillSection from "./skill-section"

const ServicesSection = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const services = [
    {
      icon: <DesktopOutlined className="!text-4xl !text-blue-500" />,
      title: "Desarrollo Web",
      description:
        "Desarrollo de sitios web modernos y responsivos utilizando las últimas tecnologías web como React, Next.js, PHP y MySQL.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <CloudOutlined className="!text-4xl !text-orange-500" />,
      title: "Soluciones Cloud Native",
      description:
        "Arquitecturas serverless y microservicios en AWS con Lambda, API Gateway, DynamoDB y servicios de automatización.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <AppstoreOutlined className="!text-4xl !text-purple-500" />,
      title: "Aplicaciones Web",
      description:
        "Creación de aplicaciones web completas con funcionalidades avanzadas, sistemas de gestión y paneles administrativos.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <BgColorsOutlined className="!text-4xl !text-teal-500" />,
      title: "Diseño UI/UX",
      description:
        "Diseño de interfaces de usuario atractivas y experiencias de usuario optimizadas utilizando Figma y principios de diseño moderno.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <CodeOutlined className="!text-4xl !text-green-500" />,
      title: "Desarrollo Full Stack",
      description:
        "Desarrollo completo tanto del frontend como del backend, incluyendo bases de datos, APIs y sistemas de autenticación.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <ApiOutlined className="!text-4xl !text-indigo-500" />,
      title: "APIs & Microservicios",
      description:
        "Desarrollo de APIs RESTful escalables y arquitecturas de microservicios con automatización de procesos empresariales.",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <motion.div
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br from-slate-50 to-blue-50/30 !pt-36 md:!pt-40 lg:!pt-48"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "visible"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row gutter={[24, 32]} align="center">
          <Col xs={24} xl={8}>
            <motion.div className="!mb-8" variants={itemVariants}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-blue-500 to-purple-500 !rounded-full !mb-6"
              />

              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-6 !text-gray-800">
                Mis <span className="!text-blue-600">Servicios</span>
              </h2>

              <div className="!bg-white/80 !backdrop-blur-sm !p-6 !rounded-2xl !shadow-lg !border !border-blue-100/50 !mb-6">
                <p className="!text-gray-600 !mb-4 !text-sm sm:!text-base !leading-relaxed">
                  Ofrezco servicios completos de desarrollo web y soluciones cloud native, desde el diseño hasta la
                  implementación. Mi enfoque se centra en crear soluciones digitales escalables que impulsen tu negocio.
                </p>
                <p className="!text-gray-600 !text-sm sm:!text-base !leading-relaxed">
                  Especializado en <span className="!font-semibold !text-blue-600">arquitecturas serverless</span> y
                  <span className="!font-semibold !text-blue-600"> desarrollo full stack</span> con tecnologías
                  modernas.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <img
                src="/images/do_img.webp"
                className="!w-full !max-w-md !mx-auto !rounded-2xl !shadow-2xl !border !border-blue-100"
                alt="Services"
              />
            </motion.div>
          </Col>

          <Col xs={24} xl={16}>
            <Row gutter={[24, 24]}>
              {services.map((service, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <motion.div variants={itemVariants}>
                    <Card
                      className="!h-full !shadow-lg hover:!shadow-2xl !transition-all hover:!-translate-y-2 !duration-500 !border-0 !overflow-hidden"
                      // bodyStyle={{ padding: 0 }}
                    >
                      <div className="!p-6 !h-full !flex !flex-col">
                        <motion.div
                          className={`!w-16 !h-16 !bg-gradient-to-r ${service.color} !rounded-2xl !flex !items-center !justify-center !shadow-lg !mb-4 !mx-auto`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {service.icon}
                        </motion.div>

                        <div className="!flex-1 !text-center">
                          <h4 className="!text-lg sm:!text-xl !font-semibold !mb-3 !text-gray-800">{service.title}</h4>
                          <p className="!text-gray-600 !text-sm sm:!text-base !leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>

      <AwardSection />
      <ProjectSection />
      <SkillSection />
    </motion.div>
  )
}

export default ServicesSection
