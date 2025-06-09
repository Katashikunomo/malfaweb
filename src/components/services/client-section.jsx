import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TeamOutlined, StarFilled } from "@ant-design/icons"

const ClientSection = () => {
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

  const clients = [
    {
      logo: "/images/client-1.png",
      name: "Cliente 1",
      testimonial: "Excelente trabajo y profesionalismo en todo momento.",
      stars: 5,
    },
    {
      logo: "/images/client-2.png",
      name: "Cliente 2",
      testimonial: "Soluciones innovadoras que superaron nuestras expectativas.",
      stars: 5,
    },
    {
      logo: "/images/client-3.png",
      name: "Cliente 3",
      testimonial: "Gran capacidad técnica y atención personalizada.",
      stars: 5,
    },
    {
      logo: "/images/client-4.png",
      name: "Cliente 4",
      testimonial: "Resultados de alta calidad entregados en tiempo récord.",
      stars: 4,
    },
    {
      logo: "/images/client-5.png",
      name: "Cliente 5",
      testimonial: "Implementación impecable de nuestra solución cloud.",
      stars: 5,
    },
    {
      logo: "/images/client-6.png",
      name: "Cliente 6",
      testimonial: "Excelente comunicación y resultados sobresalientes.",
      stars: 5,
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
        <Row gutter={[24, 32]} align="center">
          <Col xs={24} xl={8}>
            <motion.div variants={itemVariants} className="!mb-8 lg:!mb-0">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="!h-1 !bg-gradient-to-r from-blue-500 to-purple-500 !rounded-full !mb-6"
              />

              <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-6 !text-gray-800">
                Clientes y <span className="!text-blue-600">Colaboradores</span>
              </h2>

              <div className="!bg-white/80 !backdrop-blur-sm !p-6 !rounded-2xl !shadow-lg !border !border-blue-100/50">
                <div className="!flex !items-center !gap-3 !mb-4">
                  <TeamOutlined className="!text-2xl !text-blue-500" />
                  <h3 className="!text-xl !font-bold !text-gray-800 !m-0">Testimonios</h3>
                </div>

                <p className="!text-gray-600 !mb-4 !text-sm sm:!text-base !leading-relaxed">
                  He tenido el privilegio de trabajar con diversas empresas y organizaciones, ayudándoles a alcanzar sus
                  objetivos digitales a través de soluciones web innovadoras y efectivas.
                </p>

                <p className="!text-gray-600 !text-sm sm:!text-base !leading-relaxed">
                  Mi enfoque en la <span className="!font-semibold !text-blue-600">calidad</span> y la{" "}
                  <span className="!font-semibold !text-blue-600">satisfacción del cliente</span> ha sido clave para
                  construir relaciones duraderas y proyectos exitosos.
                </p>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} xl={16}>
            <Row gutter={[16, 16]}>
              {clients.map((client, index) => (
                <Col xs={12} sm={8} md={8} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className="!h-full !shadow-lg hover:!shadow-xl !transition-all !duration-300 !border-0 !overflow-hidden"
                      bodyStyle={{ padding: 0 }}
                    >
                      <div className="!p-4 !flex !flex-col !items-center !text-center">
                        <div className="!bg-white !p-3 !rounded-xl !shadow-sm !mb-3 !w-full">
                          <img
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            className="!w-full !h-16 !object-contain !grayscale hover:!grayscale-0 !transition-all"
                          />
                        </div>

                        <div className="!flex !mb-2">
                          {[...Array(client.stars)].map((_, i) => (
                            <StarFilled key={i} className="!text-yellow-400 !text-sm" />
                          ))}
                        </div>

                        <p className="!text-xs !text-gray-600 !italic">"{client.testimonial}"</p>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default ClientSection
