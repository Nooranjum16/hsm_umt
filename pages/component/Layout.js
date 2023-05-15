import Sidebar from "../../pages/sidebar";
import Footer from "../../pages/About/footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="content">
        <Sidebar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
