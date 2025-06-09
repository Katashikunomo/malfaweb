import { useState } from "react"
import { Row, Col, Card, Form, Input, Button, message } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons"
import { HiSparkles, HiLightningBolt } from "react-icons/hi"
import { FaRocket, FaCode, FaGlobe } from "react-icons/fa"

const ContactSection = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
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

  const onFinish = async (values) => {
    setLoading(true)
    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form values:", values)
      message.success("¡Mensaje enviado correctamente! Te contactaré pronto.")
      form.resetFields()
    } catch (error) {
      message.error("Error al enviar el mensaje. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MailOutlined className="!text-2xl !text-blue-500" />,
      label: "Email",
      value: "andres@malfaweb.com",
      href: "mailto:andres@malfaweb.com",
      color: "from-blue-500 to-blue-600",
      description: "Respuesta en 24 horas",
    },
    {
      icon: <WhatsAppOutlined className="!text-2xl !text-green-500" />,
      label: "WhatsApp",
      value: "+52 563 726 9723",
      href: "https://wa.me/525637269723?text=Hola%20MalfaWeb,%20me%20interesa%20contactarte%20para%20un%20proyecto",
      color: "from-green-500 to-green-600",
      description: "Respuesta inmediata",
    },
    {
      icon: <PhoneOutlined className="!text-2xl !text-purple-500" />,
      label: "Teléfono",
      value: "+52 563 726 9723",
      href: "tel:+525637269723",
      color: "from-purple-500 to-purple-600",
      description: "Llamadas de 9AM - 6PM",
    },
    {
      icon: <EnvironmentOutlined className="!text-2xl !text-red-500" />,
      label: "Ubicación",
      value: "Ciudad de México, México",
      href: "#",
      color: "from-red-500 to-red-600",
      description: "Trabajo remoto disponible",
    },
  ]

  const socialLinks = [
    {
      icon: <LinkedinOutlined className="!text-xl" />,
      href: "https://linkedin.com/in/andres-malfavaun-559594186/",
      color: "from-blue-600 to-blue-700",
      label: "LinkedIn",
    },
    {
      icon: <GithubOutlined className="!text-xl" />,
      href: "https://github.com/Katashikunomo",
      color: "from-gray-700 to-gray-900",
      label: "GitHub",
    },
    {
      icon: <FacebookOutlined className="!text-xl" />,
      href: "https://facebook.com/profile.php?id=61558113805031",
      color: "from-blue-600 to-blue-800",
      label: "Facebook",
    },
  ]

  const services = [
    {
      icon: <FaCode className="!text-2xl !text-blue-500" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos",
    },
    {
      icon: <FaRocket className="!text-2xl !text-orange-500" />,
      title: "Cloud Native",
      description: "Soluciones serverless en AWS",
    },
    {
      icon: <FaGlobe className="!text-2xl !text-green-500" />,
      title: "Full Stack",
      description: "Frontend y backend completo",
    },
  ]

  return (
    <motion.section
      className="!py-8 sm:!py-12 lg:!py-20 !bg-gradient-to-br from-slate-50 to-blue-50/30 !relative !overflow-hidden !pt-40 " 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="!absolute !inset-0 !overflow-hidden">
        <motion.div
          className="!absolute !top-20 !right-20 !w-72 !h-72 !bg-blue-200/20 !rounded-full !blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="!absolute !bottom-20 !left-20 !w-96 !h-96 !bg-purple-200/20 !rounded-full !blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto !px-4 sm:!px-6 lg:!px-8 !relative !z-10">
        {/* Header */}
        <motion.div className="!text-center !mb-16" variants={itemVariants}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "80px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="!h-1 !bg-gradient-to-r from-blue-500 to-purple-500 !rounded-full !mx-auto !mb-6"
          />

          <h1 className="!text-3xl sm:!text-4xl lg:!text-5xl !font-bold !mb-6 !text-gray-800">
            ¿Tienes un <span className="!text-blue-600">Proyecto</span> en Mente?
          </h1>

          <p className="!text-lg sm:!text-xl !text-gray-600 !max-w-2xl !mx-auto !leading-relaxed">
            Estoy aquí para ayudarte a convertir tus ideas en realidad digital. ¡Hablemos sobre tu próximo proyecto!
          </p>

          <motion.div
            className="!flex !items-center !justify-center !gap-2 !mt-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <HiSparkles className="!text-yellow-500 !text-xl" />
            <span className="!text-sm !text-gray-500 !font-medium">Respuesta garantizada en 24 horas</span>
            <HiSparkles className="!text-yellow-500 !text-xl" />
          </motion.div>
        </motion.div>

        <Row gutter={[32, 32]} align="stretch">
          {/* Contact Information */}
          <Col xs={24} lg={8}>
            <motion.div variants={itemVariants} className="!h-full">
              <Card className="!h-full !shadow-2xl !border-0 !rounded-3xl !overflow-hidden !bg-gradient-to-br from-white to-gray-50/50 !backdrop-blur-sm">
                <div className="!p-2">
                  <div className="!flex !items-center !gap-3 !mb-8">
                    <motion.div
                      className="!w-12 !h-12 !bg-gradient-to-r from-blue-500 to-purple-500 !rounded-2xl !flex !items-center !justify-center !shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MessageOutlined className="!text-white !text-xl" />
                    </motion.div>
                    <h2 className="!text-2xl !font-bold !text-gray-800 !m-0">Información de Contacto</h2>
                  </div>

                  <div className="!space-y-6 !mb-8">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                        className="!block !p-4 !rounded-2xl !bg-white/80 !backdrop-blur-sm !shadow-lg hover:!shadow-xl !transition-all !duration-300 !border !border-gray-100/50"
                        whileHover={{ scale: 1.02, y: -2 }}
                        initial={{ x: -50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <div className="!flex !items-center !gap-4">
                          <motion.div
                            className={`!w-12 !h-12 !bg-gradient-to-r ${item.color} !rounded-xl !flex !items-center !justify-center !shadow-md`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div className="!flex-1">
                            <h4 className="!font-semibold !text-gray-800 !mb-1">{item.label}</h4>
                            <p className="!text-gray-600 !mb-1 !text-sm">{item.value}</p>
                            <p className="!text-xs !text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Services Preview */}
                  <div className="!mb-8">
                    <h3 className="!text-lg !font-bold !text-gray-800 !mb-4 !flex !items-center !gap-2">
                      <HiLightningBolt className="!text-yellow-500" />
                      Servicios Principales
                    </h3>
                    <div className="!space-y-3">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="!flex !items-center !gap-3 !p-3 !rounded-xl !bg-white/60 !backdrop-blur-sm"
                          initial={{ x: -30, opacity: 0 }}
                          animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                        >
                          {service.icon}
                          <div>
                            <h4 className="!font-semibold !text-gray-800 !text-sm">{service.title}</h4>
                            <p className="!text-xs !text-gray-600">{service.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="!text-lg !font-bold !text-gray-800 !mb-4">Sígueme en Redes</h3>
                    <div className="!flex !gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`!w-12 !h-12 !bg-gradient-to-r ${social.color} !rounded-xl !flex !items-center !justify-center !text-white !shadow-lg hover:!shadow-xl !transition-all !duration-300`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: index * 0.1 + 1 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col xs={24} lg={16}>
            <motion.div variants={itemVariants}>
              <Card className="!shadow-2xl !border-0 !rounded-3xl !overflow-hidden !bg-gradient-to-br from-white to-gray-50/50 !backdrop-blur-sm">
                <div className="!p-2 sm:!p-8">
                  <div className="!flex !items-center !gap-3 !mb-8">
                    <motion.div
                      className="!w-12 !h-12 !bg-gradient-to-r from-green-500 to-blue-500 !rounded-2xl !flex !items-center !justify-center !shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <SendOutlined className="!text-white !text-xl" />
                    </motion.div>
                    <h2 className="!text-2xl !font-bold !text-gray-800 !m-0">Envíame un Mensaje</h2>
                  </div>

                  <Form form={form} onFinish={onFinish} layout="vertical" size="large">
                    <Row gutter={[16, 0]}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="name"
                          label={
                            <span className="!font-semibold !text-gray-700 !flex !items-center !gap-2">
                              <UserOutlined className="!text-blue-500" />
                              Nombre Completo
                            </span>
                          }
                          rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
                        >
                          <Input
                            placeholder="Tu nombre completo"
                            className="!rounded-xl !border-gray-200 hover:!border-blue-400 focus:!border-blue-500 !transition-colors"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="email"
                          label={
                            <span className="!font-semibold !text-gray-700 !flex !items-center !gap-2">
                              <MailOutlined className="!text-green-500" />
                              Email
                            </span>
                          }
                          rules={[
                            { required: true, message: "Por favor ingresa tu email" },
                            { type: "email", message: "Ingresa un email válido" },
                          ]}
                        >
                          <Input
                            placeholder="tu@email.com"
                            className="!rounded-xl !border-gray-200 hover:!border-blue-400 focus:!border-blue-500 !transition-colors"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="subject"
                      label={
                        <span className="!font-semibold !text-gray-700 !flex !items-center !gap-2">
                          <HiLightningBolt className="!text-yellow-500" />
                          Asunto
                        </span>
                      }
                      rules={[{ required: true, message: "Por favor ingresa el asunto" }]}
                    >
                      <Input
                        placeholder="¿En qué puedo ayudarte?"
                        className="!rounded-xl !border-gray-200 hover:!border-blue-400 focus:!border-blue-500 !transition-colors"
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label={
                        <span className="!font-semibold !text-gray-700 !flex !items-center !gap-2">
                          <MessageOutlined className="!text-purple-500" />
                          Mensaje
                        </span>
                      }
                      rules={[{ required: true, message: "Por favor ingresa tu mensaje" }]}
                    >
                      <Input.TextArea
                        rows={6}
                        placeholder="Cuéntame sobre tu proyecto, ideas, presupuesto y cualquier detalle que consideres importante..."
                        className="!rounded-xl !border-gray-200 hover:!border-blue-400 focus:!border-blue-500 !transition-colors !resize-none"
                      />
                    </Form.Item>

                    <Form.Item className="!mb-0">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                          className="!w-full !h-14 !rounded-xl !bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 !border-0 !font-semibold !text-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300"
                          icon={<SendOutlined />}
                        >
                          {loading ? "Enviando..." : "Enviar Mensaje"}
                        </Button>
                      </motion.div>
                    </Form.Item>
                  </Form>

                  <motion.div
                    className="!mt-6 !p-4 !bg-blue-50 !rounded-xl !border !border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="!flex !items-center !gap-2 !mb-2">
                      <HiSparkles className="!text-blue-500" />
                      <span className="!font-semibold !text-blue-800 !text-sm">¿Necesitas una respuesta rápida?</span>
                    </div>
                    <p className="!text-blue-700 !text-sm !mb-3">
                      Para consultas urgentes, contáctame directamente por WhatsApp y te responderé de inmediato.
                    </p>
                    <motion.a
                      href="https://wa.me/525637269723?text=Hola%20MalfaWeb,%20tengo%20una%20consulta%20urgente"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="!inline-flex !items-center !gap-2 !bg-green-500 hover:!bg-green-600 !text-white !px-4 !py-2 !rounded-lg !transition-colors !font-medium !text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <WhatsAppOutlined />
                      Contactar por WhatsApp
                    </motion.a>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

export default ContactSection
