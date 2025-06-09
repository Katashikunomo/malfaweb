import { Layout } from "antd"
import Header from "../header"
import Footer from "../footer"

const { Content } = Layout

const MainLayout = ({ children, activePage }) => {
  return (
    <Layout className="min-h-screen">
      <Header activePage={activePage} />

      {/* 📏 Espaciado para el header fijo */}
      <Content className="pt-20">{children}</Content>

      <Footer />
    </Layout>
  )
}

export default MainLayout
