import {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'




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


  return (
    <div className="App">


      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />

    </div>
  );
}

export default App;
