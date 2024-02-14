import './globals.css'
import Footer from './(component)/Foooter'
import Navbar from './(component)/Navbar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
