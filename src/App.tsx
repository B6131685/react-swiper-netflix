import CHeader from "./components/CHeader"
import Slide from "./components/Slide"

function App() {

  return (
    <div className="min-h-full min-h-full h-auto w-full bg-nf-black-150">
      <CHeader/>
      <article className="text-white mt-11 px-[40px] grid gap-3">
        <div className="text-5xl font-bold">TV Shows</div>
        <div className="w-5/5 sm:w-4/5 md:w-3/5 font-medium ">These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</div>
      </article>
      <Slide title="Popular on Nefilx"/>
      <Slide title="Anime"/>
      <Slide title="New Releases"/>
      <Slide title="TV show"/>
      <Slide title="Watch in one weekedn"/>
      <footer className="h-36"></footer>
    </div>
  )
}

export default App
