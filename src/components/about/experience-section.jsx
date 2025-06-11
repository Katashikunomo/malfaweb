import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  CodeOutlined,
  TeamOutlined,
  ToolOutlined,
  GlobalOutlined,
  RocketOutlined,
  StarFilled,
  CloudOutlined,
  ApiOutlined,
} from "@ant-design/icons"

const ExperienceSection = () => {
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

  const experienceItems = [
    {
      number: "01",
      title: "Desarrollador Full Stack Cloud Native",
      company: "Altán Redes",
      period: "Ago 2024 - Actual",
      icon: <CloudOutlined className="!text-2xl !text-white" />,
      color: "from-orange-500 to-red-500",
      description:
        "Desarrollo de soluciones cloud native con enfoque serverless y arquitecturas escalables en el área de telecomunicaciones.",
      isLatest: true,
    },
    {
      number: "02",
      title: "Desarrollador Web / Diseñador Web",
      company: "Freelance",
      period: "Feb 2019 - Actual",
      icon: <CodeOutlined className="!text-2xl !text-white" />,
      color: "from-blue-500 to-blue-600",
      description: "Desarrollo de sitios web personalizados, e-commerce y aplicaciones web para diversos clientes.",
    },
    {
      number: "03",
      title: "Desarrollador Web Full Stack",
      company: "FESE",
      period: "Ene 2023 - Jul 2024",
      icon: <RocketOutlined className="!text-2xl !text-white" />,
      color: "from-purple-500 to-purple-600",
      description: "Desarrollo de aplicaciones web completas con tecnologías modernas y metodologías ágiles.",
    },
    {
      number: "04",
      title: "Soporte Help Desk / DBA",
      company: "CNCPIE",
      period: "Jun 2022 - Ene 2023",
      icon: <ToolOutlined className="!text-2xl !text-white" />,
      color: "from-green-500 to-green-600",
      description: "Administración de bases de datos y soporte técnico especializado para sistemas empresariales.",
    },
    {
      number: "05",
      title: "Soporte Técnico",
      company: "Sanchez Devanny",
      period: "Ene 2021 - May 2021",
      icon: <TeamOutlined className="!text-2xl !text-white" />,
      color: "from-teal-500 to-teal-600",
      description: "Soporte técnico integral y mantenimiento de infraestructura tecnológica corporativa.",
    },
  ]

  const techStack = [
    // Frontend
    { name: "React.js", icon: "/images/react.svg", level: 90, category: "Frontend" },
    { name: "JavaScript", icon: "/images/js.svg", level: 88, category: "Frontend" },
    { name: "HTML5", icon: "/images/html.svg", level: 95, category: "Frontend" },
    { name: "CSS3", icon: "/images/css.svg", level: 90, category: "Frontend" },
    { name: "TailwindCSS", icon: "/images/tailwind.svg", level: 85, category: "Frontend" },
    { name: "Bootstrap", icon: "/images/bootstrap.svg", level: 80, category: "Frontend" },

    // Backend
    { name: "PHP", icon: "/images/php.svg", level: 90, category: "Backend" },
    { name: "Laravel", icon: "/images/laravel.svg", level: 85, category: "Backend" },
    { name: "Python", icon: "/images/python.svg", level: 80, category: "Backend" },
    { name: "Java", icon: "/images/java.svg", level: 75, category: "Backend" },

    // Databases
    { name: "MySQL", icon: "/images/mysql.svg", level: 85, category: "Database" },
    { name: "PostgreSQL", icon: "/images/postgresql.svg", level: 80, category: "Database" },
    { name: "MariaDB", icon: "/images/mariadb.svg", level: 85, category: "Database" },
    { name: "DynamoDB", icon: "/images/dynamodb.svg", level: 75, category: "Database" },

    // Tools & Cloud
    { name: "Git", icon: "/images/git.svg", level: 85, category: "Tools" },
    { name: "AWS", icon: "/images/aws.svg", level: 80, category: "Cloud" },
    { name: "Figma", icon: "/images/fig.svg", level: 75, category: "Design" },
  ]

  const awsServices = [
    { name: "AWS Lambda", description: "Funciones serverless" },
    { name: "API Gateway", description: "Gestión de APIs" },
    { name: "DynamoDB", description: "Base de datos NoSQL" },
    { name: "S3", description: "Almacenamiento" },
    { name: "Cognito", description: "Autenticación" },
    { name: "CloudWatch", description: "Monitoreo" },
    { name: "CloudFront", description: "CDN" },
    { name: "Route53", description: "DNS" },
    { name: "Amplify", description: "Desarrollo full-stack" },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br from-white to-gray-50"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row gutter={[24, 32]} align="stretch">
          {/* Experience Cards */}
          <Col xs={24} xl={14} className="order-2 xl:order-1">
            <motion.div variants={itemVariants} className="!mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-purple-500 to-blue-500 !rounded-full !mb-6"
              />
              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-8 !text-gray-800">
                Experiencia <span className="!text-purple-600">Profesional</span>
              </h2>
            </motion.div>

            <div className="!space-y-6">
              {experienceItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    className={`!shadow-lg hover:!shadow-2xl !transition-all hover:!-translate-y-2 !duration-500 !border-0 !overflow-hidden ${
                      item.isLatest ? "!ring-2 !ring-orange-200" : ""
                    }`}
                    // bodyStyle={{ padding: 0 }}
                  >
                    <div className="!p-6">
                      <div className="!flex !items-center !gap-4 !mb-4">
                        <motion.div
                          className={`!w-12 !h-12 !bg-gradient-to-r ${item.color} !rounded-xl !flex !items-center !justify-center !shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h2
                          className={`!text-3xl !font-bold !bg-gradient-to-r ${item.color} !bg-clip-text !text-transparent`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        >
                          {item.number}
                        </motion.h2>
                        {item.isLatest && (
                          <motion.div
                            className="!bg-orange-100 !text-orange-600 !px-3 !py-1 !rounded-full !text-xs !font-semibold"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            ACTUAL
                          </motion.div>
                        )}
                      </div>

                      <div>
                        <h3 className="!text-lg sm:!text-xl !font-semibold !mb-2 !text-gray-800">{item.title}</h3>
                        <h4 className="!text-base sm:!text-lg !text-gray-600 !mb-2 !font-medium">{item.company}</h4>
                        <h5 className="!text-sm !text-gray-500 !mb-3">{item.period}</h5>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Col>

          {/* Tech Stack & AWS Services */}
          <Col xs={24} xl={10} className="order-1 xl:order-2">
            <motion.div variants={itemVariants} className="!sticky !top-24 !space-y-6">
              {/* Professional Summary */}
              <div className="!bg-gradient-to-br from-gray-900 to-gray-800 !p-6 sm:!p-8 !rounded-2xl !shadow-2xl !text-white">
                <div className="!flex !items-center !gap-3 !mb-6">
                  <GlobalOutlined className="!text-2xl !text-teal-400" />
                  <h2 className="!text-xl sm:!text-2xl !font-bold !m-0">Perfil Profesional</h2>
                </div>

                <p className="!text-gray-300 !mb-6 !text-sm sm:!text-base !leading-relaxed">
                  Con una trayectoria como{" "}
                  <span className="!font-semibold !text-teal-400">Desarrollador Web Full Stack</span>, me he desempeñado
                  demostrando habilidades en desarrollo cloud native con enfoque serverless, impulsando modelos de
                  desarrollo profesional mediante plataformas tecnológicas innovadoras.
                </p>

                <motion.div
                  className="!bg-gradient-to-r from-teal-500 to-blue-500 !p-4 !rounded-xl !text-center !mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="!flex !items-center !justify-center !gap-2 !mb-2">
                    <StarFilled className="!text-yellow-400" />
                    <span className="!font-bold !text-lg">+5 Años</span>
                    <StarFilled className="!text-yellow-400" />
                  </div>
                  <p className="!text-sm !text-teal-50 !m-0">Experiencia en desarrollo web</p>
                </motion.div>
              </div>

              {/* AWS Services */}
              <div className="!bg-white !p-6 !rounded-2xl !shadow-lg !border !border-orange-100">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <ApiOutlined className="!text-2xl !text-orange-500" />
                  <h3 className="!text-lg !font-bold !text-gray-800 !m-0">Servicios AWS</h3>
                </div>
                <div className="!grid !grid-cols-1 !gap-2">
                  {awsServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="!flex !justify-between !items-center !p-2 !rounded-lg hover:!bg-orange-50 !transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span className="!font-medium !text-sm !text-gray-800">{service.name}</span>
                      <span className="!text-xs !text-gray-500">{service.description}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="!bg-white !p-6 !rounded-2xl !shadow-lg !border !border-teal-100">
                <h3 className="!text-lg !font-bold !text-gray-800 !mb-4">Stack Tecnológico</h3>
                <div className="!space-y-3">
                  {techStack.slice(0, 8).map((tech, index) => (
                    <motion.div
                      key={index}
                      className="!flex !items-center !gap-3"
                      initial={{ x: -50, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="!w-8 !h-8 !bg-gray-50 !rounded-lg !p-1 !flex !items-center !justify-center !shadow-sm"
                      >
                        <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="!w-5 !h-5" />
                      </motion.div>
                      <div className="!flex-1">
                        <div className="!flex !justify-between !items-center !mb-1">
                          <span className="!font-medium !text-sm">{tech.name}</span>
                          <span className="!text-xs !text-gray-400">{tech.level}%</span>
                        </div>
                        <div className="!w-full !bg-gray-200 !rounded-full !h-1">
                          <motion.div
                            className="!bg-gradient-to-r from-teal-400 to-blue-400 !h-1 !rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ delay: index * 0.1 + 1, duration: 1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default ExperienceSection
