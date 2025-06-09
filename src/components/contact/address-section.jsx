
import React from "react"
import { Row, Col, Card } from "antd"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons"

const AddressSection = () => {
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

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-4xl text-primary" />,
      title: "Teléfono",
      links: [
        { text: "+52 56 3726 9723", href: "tel:+525637269723" },
        { text: "01-202-555-0125", href: "tel:012025550125" },
      ],
    },
    {
      icon: <MailOutlined className="text-4xl text-primary" />,
      title: "Email",
      links: [
        { text: "malfaweb@gmail.com", href: "mailto:malfaweb@gmail.com" },
        { text: "contacto@malfaweb.com", href: "mailto:contacto@malfaweb.com" },
      ],
    },
    {
      icon: <EnvironmentOutlined className="text-4xl text-primary" />,
      title: "Dirección",
      links: [{ text: "Ciudad de México, México", href: "javascript:void(0);" }],
    },
  ]

  return (
    <motion.section
      className="py-16 bg-gray-50"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <Row gutter={[24, 24]} justify="center">
          {contactInfo.map((item, index) => (
            <Col key={index} xs={24} md={8}>
              <motion.div variants={itemVariants}>
                <Card
                  className="h-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                  bordered={false}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <div>
                      <h5 className="text-xl font-semibold mb-3">{item.title}</h5>
                      {item.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="block text-gray-600 hover:text-primary mb-2 transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  )
}

export default AddressSection
