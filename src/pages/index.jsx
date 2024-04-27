import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner/Index';
import { Contact } from '../components/Contact';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    
    <main>
      <Banner/>
      <section className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/espresso.png" />
                </div>
                <div className="drink__info">
                  <h3>Espresso</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/doppio.png" />
                </div>
                <div className="drink__info">
                  <h3>Doppio</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="1" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/lungo.png" />
                </div>
                <div className="drink__info">
                  <h3>Lungo</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#b0dee1' }} />
                    <div className="layer__label">voda</div>
                  </div>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value="2" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery__content">
            <h2>Nově otevřeno!</h2>
            <div className="gallery__cols">
              <p className="gallery__col">
                Máte chuť na trochu nostalgie? Rádi vás u nás uvidíme. Atmosféra podniku Vás pohltí a přivede do
                uvolněné nálady.
              </p>
              <p className="gallery__col">
                V přízemí Cafe Lóra se nachází nově vystavěný bar a restaurant, kde Vám nabízíme koktejly z nově
                navržené řady "Cocktails &amp; Desires". V suterénu najdete music club se světelnou disco podlahou,
                barem, VIP loungem, a hrají tam ti nejlepší DJ's!
              </p>
              <p className="gallery__col">
                Jsme podnik pro všechny generace. Součástí kavárny je dětský koutek, který zabaví vaše ratolesti
                abyste si mohli v klidu vychutnat šálek Vaší oblíbené kávy.
              </p>
            </div>
          </div>
        </div>
      </section>

<Contact/>
    </main>

    <footer>
      <div className="container">
        <div className="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  </div>
);
