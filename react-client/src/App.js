import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './components/ui/PageNavbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import aquarium from './video/aquarium.mp4';
import Welcome from './components/home/Welcome';
import Shop from './components/home/Shop';
import ShoppingCart from './components/home/ShoppingCart';
import {ShopProvider} from './components/home/ShopState';
import TransactionsList from './components/transactions/TransactionsList';
import Earnings from './components/statistics/Earnings';

function App() {
  return (
    <div className='App'>
      <Router>
        <PageNavbar />
        <Switch>
          <Route exact path='/'>
            <ShopProvider>
              <div className='home-container'>
                <video src={aquarium} muted autoPlay loop></video>
                <div className='overlay'></div>
                <Container>
                  <Welcome />
                  <Shop />
                </Container>
              </div>
              <ShoppingCart />
            </ShopProvider>
          </Route>
          <Route path='/transactions'>
            <div className='transactions-container'>
              <Container>
                <TransactionsList />
              </Container>
            </div>
          </Route>
          <Route path='/statistic'>
            <div className='statistic-container'>
              <Container>
                <Earnings />
              </Container>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
