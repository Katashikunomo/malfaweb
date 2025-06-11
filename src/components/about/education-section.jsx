import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOutlined, SafetyCertificateOutlined, TrophyOutlined } from "@ant-design/icons"

const EducationSection = () => {
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

  const cardVariants = {
    hidden: {
      x: -50,
      opacity: 0,
      rotateY: -15,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const educationItems = [
    {
      icon: <BookOutlined className="!text-2xl !text-blue-600" />,
      title: "Educación Media Superior",
      period: "2016 - 2019",
      degree: "Técnico Programador",
      description:
        "Desarrollo enfocado en tecnologías, administración de bases de datos, modelado de sistemas y principios de programación en Java y desarrollo web.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <TrophyOutlined className="!text-2xl !text-purple-600" />,
      title: "Educación Superior",
      period: "2020 - Actual",
      degree: "Lic. en Tecnologías y Sistemas de Información",
      description:
        "Enfocada en tecnologías web, desarrollo de software y metodologías de investigación para la mejora continua del desarrollo profesional.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <SafetyCertificateOutlined className="!text-2xl !text-teal-600" />,
      title: "Tecnologías Web",
      period: "2022",
      degree: "Desarrollo Web Full Stack",
      description:
        "Formación enfocada en tecnologías web basada en HTML, CSS, JavaScript, PHP y MySQL para desarrollo frontend y backend.",
      color: "from-teal-500 to-teal-600",
      certificates: [
        { name: "HTML5", url: "/certificados/html-course.pdf" },
        { name: "CSS3", url: "/certificados/css-course.pdf" },
        { name: "JavaScript", url: "/certificados/javascript-course.pdf" },
        { name: "PHP & MySQL", url: "/certificados/php-mysql-course.pdf" },
      ],
    },
    {
      icon: <BookOutlined className="!text-2xl !text-green-600" />,
      title: "Cursos Especializados",
      period: "2023 - 2024",
      degree: "Santander Open Academy",
      description:
        "Desarrollo profesional continuo con cursos en colaboración de ANUIES-FESE y Santander Universidades para habilidades digitales y competencias profesionales.",
      color: "from-green-500 to-green-600",
      certificates: [
        { name: "Habilidades Digitales", url: "/certificados/Habilidades_digitales.pdf" },
        { name: "Servicio al Cliente", url: "/certificados/Constancia_SSC.pdf" },
        { name: "Derechos Humanos", url: "/certificados/Certificado_Derechos_Humanos.pdf" },
        { name: "Competencias ASG", url: "/certificados/Certificado_Derechos_Humanos_asg.pdf" },
        { name: "Habilidades Competitivas", url: "/certificados/Certificado_de_finalizacin.pdf" },
      ],
    },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br from-gray-50 to-slate-100"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row gutter={[24, 32]} align="stretch">
          {/* Header Section */}
          <Col xs={24} xl={8}>
            <motion.div variants={itemVariants} className="!sticky !top-24">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-teal-500 to-blue-500 !rounded-full !mb-6"
              />

              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-6 !text-gray-800">
                Educación y <span className="!text-teal-600">Formación</span>
              </h2>

              <div className="!bg-white/80 !backdrop-blur-sm !p-6 !rounded-2xl !shadow-lg !border !border-teal-100/50 !mb-6">
                <p className="!text-gray-600 !mb-4 !text-sm sm:!text-base !leading-relaxed">
                  Egresado del Colegio de Bachilleres Plantel 20 Del Valle Matías Romero y próximo Licenciado en
                  Tecnologías y Sistemas de Información de la UAM Cuajimalpa.
                </p>
                <p className="!text-gray-600 !text-sm sm:!text-base !leading-relaxed">
                  Mi formación se ha enfocado en el desarrollo de software con tecnologías como
                  <span className="!font-semibold !text-teal-600"> Java, PHP, JavaScript, HTML, CSS</span> y bases de
                  datos <span className="!font-semibold !text-teal-600">MySQL y MariaDB</span>.
                </p>
              </div>

              <motion.div
                className="!bg-gradient-to-r from-teal-500 to-blue-500 !p-6 !rounded-2xl !text-white"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="!font-bold !mb-2 !text-lg">Filosofía de Aprendizaje</h3>
                <p className="!text-sm !text-teal-50">
                  "La formación institucional me dio las bases, pero mi determinación y ganas de seguir aprendiendo me
                  dieron la experiencia práctica."
                </p>
              </motion.div>
            </motion.div>
          </Col>

          {/* Education Cards */}
          <Col xs={24} xl={16}>
            <div className="!space-y-6">
              {educationItems.map((item, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card
                    className="!shadow-lg hover:!shadow-2xl !transition-all hover:!-translate-y-2 !duration-500 !border-0 !overflow-hidden"
                    // bodyStyle={{ padding: 0 }}
                  >
                    <div className="!p-6">
                      <div className="!flex !flex-col sm:!flex-row !gap-4 !mb-4">
                        <motion.div
                          className={`!w-12 !h-12 !bg-gradient-to-r ${item.color} !rounded-xl !flex !items-center !justify-center !shadow-lg !mx-auto sm:!mx-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {item.icon}
                        </motion.div>

                        <div className="!flex-1 !text-center sm:!text-left">
                          <h4 className="!text-lg sm:!text-xl !font-semibold !mb-1 !text-gray-800">{item.title}</h4>
                          <motion.h1
                            className={`!text-xl sm:!text-2xl !font-bold !bg-gradient-to-r ${item.color} !bg-clip-text !text-transparent`}
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {item.period}
                          </motion.h1>
                        </div>
                      </div>

                      <div className="!mb-4">
                        <span className="!text-base sm:!text-lg !font-medium !block !mb-3 !text-gray-700">
                          {item.degree}
                        </span>
                        <p className="!text-gray-600 !mb-4 !text-sm sm:!text-base !leading-relaxed">
                          {item.description}
                        </p>

                        {item.certificates && (
                          <motion.div
                            className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-3"
                            variants={containerVariants}
                          >
                            {item.certificates.map((cert, certIndex) => (
                              <motion.a
                                key={certIndex}
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                className={`!text-center !bg-gradient-to-r ${item.color} hover:!shadow-lg !text-white !py-3 !px-4 !rounded-xl !transition-all !font-semibold !text-sm !block`}
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                variants={itemVariants}
                              >
                                <SafetyCertificateOutlined className="!mr-2" />
                                {cert.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default EducationSection
