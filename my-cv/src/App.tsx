import Aside from './Components/Aside'
import PhotoBar from './Components/PhotoBar'

const App = () => {
  return (
    <main className='w-screen font-poppins'>
      <Aside/>
      <div className='max-sm:hidden'><PhotoBar/></div>
    </main>
  )
}

export default App