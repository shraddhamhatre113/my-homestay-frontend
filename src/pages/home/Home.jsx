
import Hero from '../../components/hero/hero';
import Search from '../../components/search/search';
import TopDestination from '../../components/topdestination/topdestination';
import TourPackages from '../../components/tourpackage/tourpackage';
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Search></Search>
      <TopDestination></TopDestination>
      <TourPackages></TourPackages>

    </div>
  )
}

export default Home