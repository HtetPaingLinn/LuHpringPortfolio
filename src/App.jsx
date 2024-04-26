
import {ThreeDCardDemo} from "./components/3d-Comp"
import {SparklesPreview} from "./components/Forheader"
import { LampDemo } from "./components/Forheader2"
import './App.css'

function App() {

  return (
    <section >
      <div className="mb-[80px] h-auto">
      <SparklesPreview text = "Lu Hpring" />
      </div>
      <div>
        <LampDemo />
      </div>

      <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 min-[1400px]:w-1/3 px-4 mb-4">
      <ThreeDCardDemo imageSrc="../src/img/p3.jpg" />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 min-[1400px]:w-1/3 px-4 mb-4">
      <ThreeDCardDemo imageSrc="../src/img/p1.jpg" />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 min-[1400px]:w-1/3 px-4 mb-4">
      <ThreeDCardDemo imageSrc="../src/img/p2.jpg" />
      </div>
      </div>
    </section>
  )
}

export default App
