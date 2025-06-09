
import  React from "react"
import { Row, Col } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const MapSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
        <Row gutter={[32, 32]} align="center">
          <Col xs={24} xl={16}>
            <motion.div className="rounded-lg overflow-hidden shadow-md" variants={itemVariants}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5240877215124!2d76.04315457607015!3d22.96774781837043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963172b725b9649%3A0xca9958ddaa36af60!2sPixelNX!5e0!3m2!1sen!2sin!4v1701171479634!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </Col>

          <Col xs={24} xl={8}>
            <motion.div className="bg-gray-50 p-6 rounded-lg shadow-sm" variants={itemVariants}>
              <div>
                <h2 className="text-3xl font-bold mb-4">Ponte en Contacto</h2>
                <p className="text-gray-600">
                  ¿Tienes un proyecto en mente? ¿Necesitas ayuda con tu sitio web o aplicación? Estoy aquí para ayudarte
                  a llevar tus ideas al mundo digital. Contáctame y conversemos sobre cómo puedo ayudarte a alcanzar tus
                  objetivos.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.div>
  )
}

export default MapSection
