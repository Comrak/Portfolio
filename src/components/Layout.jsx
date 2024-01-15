import Header from "./Header"; // Import the 'Header' component
import Footer from "./Footer"; // Import the 'Footer' component with correct casing
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content font-jost overflow-x-hidden">{children}</div>

      <Footer />
    </div>
  );
}
export default Layout;
