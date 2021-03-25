import {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'
import Portfolio from './components/Portfolio'
import About from './components/About';




function App() {

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [pageSelected, setPageSelected] = useState('about')


  return (
    <div className="App">


      <Header page={pageSelected} setPage={setPageSelected} />
      <main>
        {(pageSelected === "about") && <About />}
        {(pageSelected === "portfolio") && <Portfolio />}
        {(pageSelected === "contact") && <ContactForm />}
      </main>
      <Footer />

    </div>
  );
}

export default App;
