import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <Navigation />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
