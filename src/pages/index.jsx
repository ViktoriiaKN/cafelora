import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Menu } from '../components/Menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>

    <Footer />
  </div>,
);

const navBtnElement = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');

const navClosed = () => {
  rolloutNav.classList.toggle('nav-closed');
};
navBtnElement.addEventListener('click', navClosed);

rolloutNav.addEventListener('click', navClosed);
