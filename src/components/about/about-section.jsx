import { Row, Col } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DownloadOutlined, WhatsAppOutlined, StarFilled } from "@ant-design/icons"
import EducationSection from "./education-section"
import ExperienceSection from "./experience-section"
import Aboutimg from "../../images/banner.svg" // Ensure you have the correct path to your image

const AboutSection = () => {
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
      y: 60,
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

  const imageVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      rotate: -10,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br !from-slate-50 !to-blue-50/30 !pt-36 md:!pt-40 lg:!pt-48"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "visible"}
      variants={containerVariants}
    >
      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8">
        <Row>
          <Col span={24}>
            <Row gutter={[24, 32]} align="middle">
              {/* Image Section */}
              <Col xs={24} lg={12} className="order-2 lg:order-1">
                <motion.div className="relative !flex !justify-center lg:!justify-start" variants={imageVariants}>
                  <motion.div variants={floatingVariants} animate="animate" className="relative">
                    <img
                      src={Aboutimg}
                      className="!w-full !max-w-sm lg:!max-w-md !mx-auto lg:!mx-0 !drop-shadow-2xl"
                      alt="About MalfaWeb"
                    />

                    {/* Floating Stats Card */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 lg:right-10 !bg-white !p-4 sm:!p-6 !rounded-2xl !shadow-2xl !border !border-teal-100"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                      transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
                    >
                      <div className="!flex !items-center !gap-3">
                        <motion.h2
                          className="!text-3xl sm:!text-4xl !font-bold !text-teal-600 !m-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          5+
                        </motion.h2>
                        <span>
                          <p className="!m-0 !font-semibold !text-gray-700 !text-sm sm:!text-base">AÑOS</p>
                          <p className="!m-0 !font-semibold !text-gray-700 !text-sm sm:!text-base">EXPERIENCIA</p>
                        </span>
                      </div>
                      <div className="!mt-3">
                        <span className="!flex !items-center !gap-2">
                          <div className="!flex !gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarFilled key={i} className="!text-yellow-400 !text-sm" />
                            ))}
                          </div>
                          <p className="!m-0 !text-gray-600 !text-xs sm:!text-sm">+20 Proyectos</p>
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Col>

              {/* Content Section */}
              <Col xs={24} lg={12} className="order-1 lg:order-2">
                <motion.div variants={itemVariants} className="!text-center lg:!text-left">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "60px" } : { width: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="!h-1 !bg-gradient-to-r from-teal-500 to-blue-500 !rounded-full !mx-auto lg:!mx-0 !mb-4"
                  />

                  <motion.h2
                    className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-6 !text-gray-800"
                    variants={itemVariants}
                  >
                    Acerca de <span className="!text-teal-600">MalfaWeb</span>
                  </motion.h2>

                  <motion.div
                    className="!bg-white/80 !backdrop-blur-sm !p-4 sm:!p-6 !rounded-2xl !shadow-lg !border !border-teal-100/50 !mb-6"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3 className="!text-xl sm:!text-2xl !font-semibold !mb-4 !text-teal-700">¿Quién es MalfaWeb?</h3>
                    <p className="!text-gray-600 !mb-4 !text-sm sm:!text-base !leading-relaxed">
                      Soy MalfaWeb, un desarrollador web con experiencia en tecnologías clave como
                      <span className="!font-semibold !text-teal-600"> PHP, JavaScript, React, Node.js</span>, HTML,
                      CSS, Git, GitHub, MySQL, Figma, Linux y metodologías ágiles. Mi enfoque es crear sitios web y
                      aplicaciones atractivas, funcionales y escalables.
                    </p>
                    <p className="!text-gray-600 !text-sm sm:!text-base !leading-relaxed">
                      Además, tengo experiencia en el desarrollo de aplicaciones web full-stack, priorizando la{" "}
                      <span className="!font-semibold !text-teal-600">seguridad, rendimiento y UX</span>. Implemento
                      metodologías ágiles para entregas eficientes y utilizo herramientas modernas de diseño para crear
                      interfaces intuitivas.
                    </p>
                  </motion.div>

                  <motion.div
                    className="!flex !flex-col sm:!flex-row !gap-4 !justify-center lg:!justify-start"
                    variants={itemVariants}
                  >
                    <motion.a
                      href="/certificados/CV_ANDRES_ALEXIS_MALFAVAUN_TAPIA.pdf"
                      className="!inline-flex !items-center !justify-center !gap-2 !bg-teal-600 hover:!bg-teal-700 !text-white !px-6 !py-3 !rounded-xl !transition-all !font-semibold !shadow-lg hover:!shadow-xl !text-sm sm:!text-base"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <DownloadOutlined className="!text-lg" />
                      Descargar CV
                    </motion.a>

                    <motion.a
                      href="https://wa.me/525637269723?text=Quiero%20contactarme%20contigo%20para%20una%20oferta%20laboral"
                      className="!inline-flex !items-center !justify-center !gap-2 !bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 !text-white !px-6 !py-3 !rounded-xl !transition-all !font-semibold !shadow-lg hover:!shadow-xl !text-sm sm:!text-base"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <WhatsAppOutlined className="!text-lg" />
                      ¡Contrátame!
                    </motion.a>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <EducationSection />
      <ExperienceSection />
    </motion.div>
  )
}

export default AboutSection
