import './css/App.css';
import logo from './assets/logo.svg';
import background from './assets/background.svg';
import tablet from './assets/tablet.webp';
import computer from './assets/computer.svg';
import money from './assets/money.svg';
import people from './assets/people.svg';
import brand1 from './assets/brand1.webp';
import brand2 from './assets/brand2.webp';
import brand3 from './assets/brand3.webp';
import brand4 from './assets/brand4.webp';
import brand5 from './assets/brand5.webp';
import brand6 from './assets/brand6.webp';
import brand7 from './assets/brand7.webp';
import brand8 from './assets/brand8.webp';


function App() {
  return (
    <div className="App">
      <img id="background" src={background} />
      <header>
        <img id="logo" src={logo} />
      </header>
      <main>
        <div className="white">
          <h1>Sell online with Shopify</h1>
          <span>Trusted by over 1,000,000 businesses worldwide</span> 
          <form>
            <input placeholder="Enter your email address"/>
            <button className="dark-btn">Start free trial</button>
          </form> 
          <p>
            <small>
              Try Shopify free for 14 days, no credit card required. 
              By entering your email, you agree to receive marketing emails from Shopify.
            </small>
          </p>
        </div>
        <aside>
          <img id="hero" src={tablet} />
        </aside>
        <div className="flex-container">
          <section className="flex-item">
            <img src={computer}/>
            <b>Beautiful themes that are responsive and customizable</b>
            <p>
              No design skills needed. You have complete control over the look and feel of your website, 
              from its layout, to content and colors.  
            </p>
          </section>
          <section className="flex-item">
            <img src={money}/>
            <b>Pricing as low as $29/month</b>
            <p>
              Whether you sell online, on social media, 
              in store, or out of the trunk of your car, Shopify has you covered. 
              Start selling anywhere for just $29/month.
            </p>
          </section>
          <section className="flex-item">
            <img src={people}/>
            <b>Trusted by over 1,000,000 businesses worldwide</b>
            <p>
              Shopify handles everything from marketing and payments, 
              to secure checkout and shipping
            </p>
          </section>
        </div>
        <aside className="brands"> 
          <img src={brand1} />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand4} />
          <img src={brand5} />
          <img src={brand6} />
          <img src={brand7} />
          <img src={brand8} />
        </aside>
        <div className="call-to-action">
          <span>
            “Shopify is better than any other platform we’ve played with, 
            and we’ve played with them all.”
          </span>
          <div className="break"></div>
          <b>
            JONATHON BAYME, CEO OF THEORY11
          </b>
          <div className="break"></div>
          <button className="light-btn">Start free trial</button>
        </div>
        <footer>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
      </footer>
      </main>
    </div>
  );
}

export default App;
