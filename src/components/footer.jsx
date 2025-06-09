import { motion } from "framer-motion"
import { Row, Col } from "antd"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 z-10">
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <span className="text-2xl font-bold">MalfaWeb</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Desarrollador Full Stack especializado en crear experiencias digitales únicas y funcionales.
              </p>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6">Contacto</h4>
              <div className="space-y-3 text-gray-300">
                <p>📧 andres@malfaweb.com</p>
                <p>📱 +52 563 726 9723</p>
                <p>📍 México</p>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6">Sígueme</h4>
              <div className="flex space-x-4">
                {[
                  { icon: "🔗", href: "#", label: "LinkedIn" },
                  { icon: "🐙", href: "#", label: "GitHub" },
                  { icon: "📘", href: "#", label: "Facebook" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 MalfaWeb. Hecho con ❤️ y mucho café ☕</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
