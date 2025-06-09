import { useState, useCallback } from "react"
import { Layout, Drawer, Badge } from "antd"
import { NavLink } from "react-router-dom"
import {
  MenuFoldOutlined,
  CloseOutlined,
  HomeOutlined,
  UserOutlined,
  ToolOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  BulbOutlined,
} from "@ant-design/icons"
import { motion, useScroll, useTransform } from "framer-motion"
import { HiSparkles } from "react-icons/hi2"
import { IoRocketSharp } from "react-icons/io5"
import { FaCode, FaGlobe } from "react-icons/fa"

const { Header: AntHeader } = Layout

const MENU_ITEMS = [
  { key: "home", label: "Inicio", to: "/", icon: <HomeOutlined />, mobileIcon: <IoRocketSharp /> },
  { key: "about", label: "Acerca", to: "/about", icon: <UserOutlined />, mobileIcon: <FaCode /> },
  { key: "services", label: "Servicios", to: "/services", icon: <ToolOutlined />, mobileIcon: <HiSparkles /> },
  { key: "contact", label: "Contacto", to: "/contact", icon: <PhoneOutlined />, mobileIcon: <FaGlobe /> },
]

const SOCIAL_LINKS = [
  {
    key: "linkedin",
    href: "https://linkedin.com/in/andres-malfavaun-559594186/",
    icon: <LinkedinOutlined />,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    key: "github",
    href: "https://github.com/Katashikunomo",
    icon: <GithubOutlined />,
    gradient: "from-gray-700 to-gray-900",
  },
  {
    key: "facebook",
    href: "https://facebook.com/profile.php?id=61558113805031",
    icon: <FacebookOutlined />,
    gradient: "from-blue-600 to-blue-700",
  },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { scrollY } = useScroll()

  // scroll effects
  const background = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.95)"])
  const blur = useTransform(scrollY, [0, 100], ["blur(8px)", "blur(20px)"])
  const shadow = useTransform(scrollY, [0, 100], ["none", "0 8px 32px rgba(0,0,0,0.12)"])

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  return (
    <>
      <motion.div
        style={{ background, backdropFilter: blur, WebkitBackdropFilter: blur, boxShadow: shadow }}
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-3xl border border-white/30   transition-all duration-300 !backdrop-blur-3xl !bg-white/30"
      >
        <AntHeader className="bg-transparent p-0 h-auto rounded-3xl overflow-hidden">
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <NavLink to="/" className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-white font-bold shadow-lg"
                  >
                    M
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white"
                    />
                  </motion.div>
                  <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-gray-300/90 to-white">
                    MalfaWeb
                  </span>
                </NavLink>
              </motion.div>

              {/* Desktop Navigation - usando clases responsive nativas de Tailwind */}
              <nav className="hidden md:block">
                <ul className="flex space-x-2">
                  {MENU_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          `relative flex items-center space-x-2 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-purple-500 to-blue-600 !text-white shadow-md shadow-teal-200/50"
                              : "!text-gray-50 !hover:bg-putple-100/70 hover:shadow-sm"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {item.icon}
                            <span>{item.label}</span>
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 -z-10 rounded-2xl border border-teal-400/30"
                                style={{
                                  boxShadow: "0 0 0 2px rgba(45, 212, 191, 0.1)",
                                }}
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button - usando clases responsive nativas de Tailwind */}
              <button
                onClick={openDrawer}
                className="md:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
              >
                <MenuFoldOutlined className="text-teal-600 text-lg" />
              </button>
            </div>
          </div>
        </AntHeader>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        placement="right"
        width={320}
        closeIcon={<CloseOutlined className="text-gray-500" />}
        headerStyle={{ background: "white" }}
        bodyStyle={{ padding: 0 }}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center !text-white font-bold">
              M
            </div>
            <span className="font-bold text-lg text-purple-700">Navegación</span>
          </div>
          {/* <CloseOutlined onClick={closeDrawer} className="!text-gray-500 cursor-pointer" /> */}
        </div>
        <div className="space-y-2 p-4">
          {MENU_ITEMS.map((item, i) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === "/"}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `flex items-center space-x-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 !text-white !shadow-md !shadow-purple-200/50"
                    : "!text-purple-600 !hover:bg-teal-50 !hover:shadow-sm"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-lg">{item.mobileIcon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    {isActive && (
                      <div className="text-xs text-teal-50 mt-1 flex items-center">
                        <HiSparkles className="mr-1" />
                        Página actual
                      </div>
                    )}
                  </div>
                  {isActive && <Badge dot className="ml-auto bg-white" />}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="p-6 border-t mt-4">
          <p className="mb-2 text-sm font-bold text-gray-700 flex items-center">
            <BulbOutlined className="mr-2 !text-yellow-500" /> ¿Tienes un proyecto?
          </p>
          <NavLink
            to="/contact"
            onClick={closeDrawer}
            className="inline-flex items-center rounded-xl !bg-purple-500 px-4 py-2 text-sm font-medium !text-white transition-colors !hover:bg-purple-600"
          >
            <IoRocketSharp className="mr-2" /> Contactar ahora
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="p-6 border-t">
          <h4 className="mb-4 font-bold text-gray-800 flex items-center">
            <FaGlobe className="mr-2 text-purple-600" />
            Sígueme
          </h4>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-2xl flex items-center justify-center !text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  )
}
