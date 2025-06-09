import { Row, Col, Card, Tabs } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ToolOutlined,
  LayoutOutlined,
  ApiOutlined,
  RocketOutlined,
  GlobalOutlined,
} from "@ant-design/icons"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaAws,
  FaDatabase,
  FaLaravel,
} from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiMariadb, SiPostgresql } from "react-icons/si"
import {
  CloudFrontIcon,
  DynamoDBIcon,
  LambdaIcon,
  APIGatewayIcon,
  CognitoIcon,
  Route53Icon,
  S3Icon,
  CloudWatchIcon,
  AmplifyIcon,
} from "../icons/AWSIcons"

const { TabPane } = Tabs

const SkillSection = () => {
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

  const skillCategories = [
    {
      key: "frontend",
      title: "Frontend",
      icon: <LayoutOutlined className="!text-2xl !text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "HTML5", percentage: 95, icon: <FaHtml5 className="!text-orange-500" /> },
        { name: "CSS3", percentage: 90, icon: <FaCss3Alt className="!text-blue-500" /> },
        { name: "JavaScript", percentage: 90, icon: <FaJs className="!text-yellow-500" /> },
        { name: "React.js", percentage: 85, icon: <FaReact className="!text-blue-400" /> },
        { name: "TailwindCSS", percentage: 88, icon: <SiTailwindcss className="!text-teal-500" /> },
        { name: "Bootstrap", percentage: 85, icon: <FaBootstrap className="!text-purple-500" /> },
      ],
    },
    {
      key: "backend",
      title: "Backend",
      icon: <CodeOutlined className="!text-2xl !text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "PHP", percentage: 95, icon: <FaPhp className="!text-indigo-500" /> },
        { name: "Laravel", percentage: 85, icon: <FaLaravel className="!text-red-500" /> },
        { name: "Python", percentage: 80, icon: <FaPython className="!text-blue-500" /> },
        { name: "Java", percentage: 75, icon: <FaJava className="!text-red-600" /> },
        { name: "RESTful APIs", percentage: 90, icon: <ApiOutlined className="!text-green-500" /> },
        { name: "Microservicios", percentage: 85, icon: <RocketOutlined className="!text-blue-500" /> },
      ],
    },
    {
      key: "database",
      title: "Bases de Datos",
      icon: <DatabaseOutlined className="!text-2xl !text-green-500" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "MySQL", percentage: 90, icon: <SiMysql className="!text-blue-600" /> },
        { name: "MariaDB", percentage: 88, icon: <SiMariadb className="!text-orange-600" /> },
        { name: "PostgreSQL", percentage: 85, icon: <SiPostgresql className="!text-blue-500" /> },
        { name: "DynamoDB", percentage: 80, icon: <DynamoDBIcon className="!text-blue-400" /> },
        { name: "Modelado DB", percentage: 85, icon: <FaDatabase className="!text-gray-600" /> },
        { name: "Optimización", percentage: 80, icon: <RocketOutlined className="!text-green-500" /> },
      ],
    },
    {
      key: "aws",
      title: "AWS Cloud",
      icon: <CloudOutlined className="!text-2xl !text-orange-500" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Lambda", percentage: 85, icon: <LambdaIcon className="!text-orange-600" /> },
        { name: "API Gateway", percentage: 85, icon: <APIGatewayIcon className="!text-blue-500" /> },
        { name: "Cognito", percentage: 80, icon: <CognitoIcon className="!text-orange-500" /> },
        { name: "S3", percentage: 90, icon: <S3Icon className="!text-green-500" /> },
        { name: "CloudFront", percentage: 85, icon: <CloudFrontIcon className="!text-purple-500" /> },
        { name: "Route53", percentage: 80, icon: <Route53Icon className="!text-purple-500" /> },
        { name: "CloudWatch", percentage: 80, icon: <CloudWatchIcon className="!text-blue-400" /> },
        { name: "Amplify", percentage: 75, icon: <AmplifyIcon className="!text-orange-500" /> },
        { name: "DynamoDB", percentage: 80, icon: <DynamoDBIcon className="!text-blue-400" /> },
        { name: "Serverless", percentage: 85, icon: <FaAws className="!text-orange-600" /> },
      ],
    },
    {
      key: "tools",
      title: "Herramientas",
      icon: <ToolOutlined className="!text-2xl !text-teal-500" />,
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "Git/GitHub", percentage: 90, icon: <FaGitAlt className="!text-orange-600" /> },
        { name: "Figma", percentage: 80, icon: <FaFigma className="!text-purple-500" /> },
        { name: "Automatización", percentage: 85, icon: <RocketOutlined className="!text-blue-500" /> },
        { name: "CI/CD", percentage: 80, icon: <GlobalOutlined className="!text-green-500" /> },
      ],
    },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br from-slate-50 to-blue-50/30"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row gutter={[24, 32]} align="stretch">
          {/* Header Section */}
          <Col span={24}>
            <motion.div className="!text-center !mb-12" variants={itemVariants}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-green-500 to-blue-500 !rounded-full !mx-auto !mb-6"
              />

              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-4 !text-gray-800">
                Mis <span className="!text-green-600">Habilidades</span> Técnicas
              </h2>

              <p className="!text-gray-600 !max-w-2xl !mx-auto !text-sm sm:!text-base !leading-relaxed">
                A lo largo de mi carrera como desarrollador full stack, he adquirido experiencia en diversas tecnologías
                y herramientas. Estas son mis principales competencias técnicas organizadas por categorías.
              </p>
            </motion.div>
          </Col>

          {/* Skills Categories */}
          <Col xs={24} md={8} lg={6}>
            <motion.div variants={itemVariants} className="!sticky !top-24">
              <div className="!bg-white !p-6 !rounded-2xl !shadow-lg !border !border-green-100/50 !mb-6">
                <h3 className="!text-xl !font-bold !mb-4 !text-gray-800">Categorías</h3>
                <p className="!text-gray-600 !mb-6 !text-sm !leading-relaxed">
                  Mi stack tecnológico abarca desde desarrollo frontend y backend hasta servicios cloud y bases de
                  datos, con especialización en arquitecturas serverless.
                </p>

                <div className="!space-y-3">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.key}
                      className={`!p-3 !rounded-xl !bg-gradient-to-r ${category.color} !text-white !flex !items-center !gap-3 !cursor-pointer`}
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      onClick={() => document.getElementById(category.key).scrollIntoView({ behavior: "smooth" })}
                    >
                      {category.icon}
                      <span className="!font-medium">{category.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Skills Content */}
          <Col xs={24} md={16} lg={18}>
            <div className="!space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.key}
                  id={category.key}
                  className="!scroll-mt-24"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="!mb-6 !flex !items-center !gap-3">
                    <motion.div
                      className={`!w-12 !h-12 !bg-gradient-to-r ${category.color} !rounded-xl !flex !items-center !justify-center !shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="!text-xl sm:!text-2xl !font-bold !text-gray-800">{category.title}</h3>
                  </div>

                  <Row gutter={[16, 16]}>
                    {category.skills.map((skill, index) => (
                      <Col xs={24} sm={12} lg={8} key={`${category.key}-${index}`}>
                        <motion.div
                          variants={itemVariants}
                          custom={index}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className="!shadow-lg hover:!shadow-xl !transition-all hover:!-translate-y-1 !duration-300 !border-0"
                            // bodyStyle={{ padding: 0 }}
                          >
                            <div className="!p-4">
                              <div className="!flex !items-center !gap-4 !mb-3">
                                <div className="!w-10 !h-10 !bg-gray-50 !rounded-lg !flex !items-center !justify-center !shadow-sm">
                                  <span className="!text-2xl">{skill.icon}</span>
                                </div>
                                <div className="!flex-1">
                                  <div className="!flex !justify-between !items-center">
                                    <h4 className="!text-base !font-semibold !text-gray-800">{skill.name}</h4>
                                    <span
                                      className={`!text-sm !font-bold !bg-gradient-to-r ${category.color} !bg-clip-text !text-transparent`}
                                    >
                                      {skill.percentage}%
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="!w-full !bg-gray-200 !rounded-full !h-2">
                                <motion.div
                                  className={`!bg-gradient-to-r ${category.color} !h-2 !rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                                  transition={{
                                    delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                                    duration: 1,
                                    ease: "easeOut",
                                  }}
                                />
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Mobile View - Tabs */}
        <Row className="!mt-12 md:!hidden">
          <Col span={24}>
            <motion.div variants={itemVariants}>
              <Card className="!shadow-lg !border-0">
                <Tabs defaultActiveKey="frontend" centered>
                  {skillCategories.map((category) => (
                    <TabPane
                      tab={
                        <span className="!flex !items-center !gap-2">
                          {category.icon}
                          <span>{category.title}</span>
                        </span>
                      }
                      key={category.key}
                    >
                      <div className="!space-y-4 !py-4">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            className="!flex !items-center !gap-3 !p-3 !bg-gray-50 !rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="!w-10 !h-10 !bg-white !rounded-lg !flex !items-center !justify-center !shadow-sm">
                              <span className="!text-2xl">{skill.icon}</span>
                            </div>
                            <div className="!flex-1">
                              <div className="!flex !justify-between !items-center !mb-1">
                                <h4 className="!text-base !font-semibold !text-gray-800">{skill.name}</h4>
                                <span
                                  className={`!text-sm !font-bold !bg-gradient-to-r ${category.color} !bg-clip-text !text-transparent`}
                                >
                                  {skill.percentage}%
                                </span>
                              </div>
                              <div className="!w-full !bg-gray-200 !rounded-full !h-2">
                                <motion.div
                                  className={`!bg-gradient-to-r ${category.color} !h-2 !rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.percentage}%` }}
                                  transition={{ delay: 0.3, duration: 1 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </TabPane>
                  ))}
                </Tabs>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default SkillSection
