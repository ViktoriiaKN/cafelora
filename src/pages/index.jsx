import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Menu } from '../components/Menu';

// fetching drinks from API
const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  return json.data;
};

const drinks = await fetchDrinks();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>

    <Footer />
  </div>,
);

const orderForm = document.querySelectorAll('.drink__controls');
orderForm.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const ordered = drinks.find((drink) => drink.id === Number(id)).ordered;

    await fetch('http://localhost:4000/api/drinks/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !ordered },
      ]),
    });
    window.location.reload();
  });
});

const navBtnElement = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');

const navClosed = () => {
  rolloutNav.classList.toggle('nav-closed');
};
navBtnElement.addEventListener('click', navClosed);

rolloutNav.addEventListener('click', navClosed);
