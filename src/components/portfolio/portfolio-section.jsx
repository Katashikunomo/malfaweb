import React from "react"
import { Row, Col, Typography } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const { Title } = Typography

// interface Project {
//   id: number
//   image: string
//   title: string
//   technologies: string[]
//   url: string
// }

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const projects= [
    {
      id: 1,
      image: "/images/proyectos/avivamiento.svg",
      title: "Desarrollo de Sistema Avivamiento Internacional",
      technologies: ["php", "mysql", "js", "html", "css", "git", "bootstrap", "fig"],
      url: "https://avivamientointernacional.website/",
    },
    {
      id: 2,
      image: "/images/proyectos/harvest.svg",
      title: "Desarrollo de Sistema escolar Harvest",
      technologies: ["php", "mysql", "js", "html", "css", "git", "bootstrap", "fig"],
      url: "https://harvestinterlomas.com/",
    },
    {
      id: 3,
      image: "/images/proyectos/veranos_uam.svg",
      title: "Desarrollo de Sistema EPV UAM",
      technologies: ["php", "mysql", "js", "html", "css", "git", "bootstrap", "fig"],
      url: "http://18.219.205.67",
    },
    {
      id: 4,
      image: "/images/proyectos/ece.svg",
      title: "Desarrollo de Sistema ECE (Entidad Certificadora)",
      technologies: ["js", "html", "css", "git", "bootstrap", "fig"],
      url: "https://entidadcertificadora.fese.mx/",
    },
    {
      id: 5,
      image: "/images/proyectos/fdv_2024.svg",
      title: "Desarrollo de Sistema Foros de Vinculación 2024",
      technologies: ["php", "mysql", "js", "html", "css", "git", "bootstrap", "fig"],
      url: "https://forosdevinculacion.anuies.mx/",
    },
    {
      id: 6,
      image: "/images/proyectos/fdv_2023.svg",
      title: "Desarrollo de Sistema Foros de Vinculación 2023",
      technologies: ["php", "mysql", "js", "html", "css", "git", "bootstrap", "fig"],
      url: "https://forosdevinculacion.anuies.mx/contanciasForos2023/FDV_2023.html",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="py-16 mt-20"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <Row>
          <Col span={24}>
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <Title level={2} className="text-3xl md:text-4xl font-bold">
                PORTAFOLIO
              </Title>
            </motion.div>

            <Row gutter={[24, 24]}>
              {projects.map((project) => (
                <Col xs={24} sm={12} lg={8} key={project.id}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg shadow-md h-64 md:h-80"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <h4 className="text-lg mb-2">Tecnologias:</h4>
                        <div>
                          <ul className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                              <li key={index}>
                                <img src={`/images/${tech}.svg`} className="w-8 h-8" alt={tech} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-light text-white text-center py-2 px-4 rounded-lg transition-colors"
                      >
                        Ver Sitio
                      </a>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </motion.div>
  )
}

export default PortfolioSection
