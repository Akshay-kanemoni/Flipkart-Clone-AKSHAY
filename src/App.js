import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Furniture from './Components/Furniture';
import Perfume from "./Components/Perfurme"
import Shoes from "./Components/Shoes"
import Watches from "./Components/Watches"
import Rakhi from "./Components/Rakhi"
import Glasses from "./Components/Glasses"
import Bag from "./Components/Bag"
import Laptop from "./Components/Laptop"
import Lacessories from "./Components/Laccesories"
import Headset from "./Components/Headset"
import Shirts from "./Components/Shirt"
import Dress from "./Components/Dress"
import Sandal from "./Components/Sandal"
import Earphones from "./Components/Earphones"
import FitnessBand from "./Components/Fitnessband"
import Eardopes from "./Components/Eardopes"
import Mask from "./Components/Mask"
import Webcam from "./Components/Webcam"
import Grocery from "./Components/Grocery"
import Toy from "./Components/Toys"
import Decor from "./Components/Decor"
import Tv from "./Components/Tv"
import Washingmachine from "./Components/Washingmachine"
import Topoffer from "./Components/Topoffer"
import Mobile from "./Components/Mobile"
import Cart from "./Components/Cart"
import Wishlist from "./Components/Wishlist"
import Payment from "./Components/Payment"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>

        <Route path='/furniture'>
          <Header></Header>
          <Furniture></Furniture>
          <Footer></Footer>
        </Route>

        <Route path='/perfume'>
          <Header></Header>
          <Perfume></Perfume>
          <Footer></Footer>
        </Route>

        <Route path='/shoes'>
          <Header></Header>
          <Shoes></Shoes>
          <Footer></Footer>
        </Route>

        <Route path='/watches'>
          <Header></Header>
          <Watches></Watches>
          <Footer></Footer>
        </Route>

        <Route path='/rakhi'>
          <Header></Header>
          <Rakhi></Rakhi>
          <Footer></Footer>
        </Route>

        <Route path='/glasses'>
          <Header></Header>
          <Glasses></Glasses>
          <Footer></Footer>
        </Route>

        <Route path='/bag'>
          <Header></Header>
          <Bag></Bag>
          <Footer></Footer>
        </Route>

        <Route path='/laptop'>
          <Header></Header>
          <Laptop></Laptop>
          <Footer></Footer>
        </Route>

        <Route path='/laccessories'>
          <Header></Header>
          <Lacessories></Lacessories>
          <Footer></Footer>
        </Route>

        <Route path='/headset'>
          <Header></Header>
          <Headset></Headset>
          <Footer></Footer>
        </Route>

        <Route path='/shirt'>
          <Header></Header>
          <Shirts></Shirts>
          <Footer></Footer>
        </Route>

        <Route path='/dress'>
          <Header></Header>
          <Dress></Dress>
          <Footer></Footer>
        </Route>


        <Route path='/sandal'>
          <Header></Header>
          <Sandal></Sandal>
          <Footer></Footer>
        </Route>

        <Route path='/band'>
          <Header></Header>
          <FitnessBand></FitnessBand>
          <Footer></Footer>
        </Route>

        <Route path='/earphones'>
          <Header></Header>
          <Earphones></Earphones>
          <Footer></Footer>
        </Route>

        <Route path='/eardopes'>
          <Header></Header>
          <Eardopes></Eardopes>
          <Footer></Footer>
        </Route>

        <Route path='/mask'>
          <Header></Header>
          <Mask></Mask>
          <Footer></Footer>
        </Route>

        <Route path='/webcam'>
          <Header></Header>
          <Webcam></Webcam>
          <Footer></Footer>
        </Route>

        <Route path='/grocery'>
          <Header></Header>
          <Grocery></Grocery>
          <Footer></Footer>
        </Route>


        <Route path='/toy'>
          <Header></Header>
          <Toy></Toy>
          <Footer></Footer>
        </Route>

        <Route path='/decor'>
          <Header></Header>
          <Decor></Decor>
          <Footer></Footer>
        </Route>

        <Route path='/tv'>
          <Header></Header>
          <Tv></Tv>
          <Footer></Footer>
        </Route>

        <Route path='/washing'>
          <Header></Header>
          <Washingmachine></Washingmachine>
          <Footer></Footer>
        </Route>

        <Route path='/topoffer'>
          <Header></Header>
          <Topoffer></Topoffer>
          <Footer></Footer>
        </Route>

        <Route path='/Mobile'>
          <Header></Header>
          <Mobile></Mobile>
          <Footer></Footer>
        </Route>

        <Route path='/cart'>
          <Header></Header>
          <Cart></Cart>
          <Footer></Footer>
        </Route>

        <Route path='/wishlist'>
          <Header></Header>
          <Wishlist></Wishlist>
          <Footer></Footer>
        </Route>

        <Route path='/payment'>
          <Header></Header>
          <Payment></Payment>
          <Footer></Footer>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
