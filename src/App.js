import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Article from './components/Article/Article';
import TermsPage from './components/Terms/Terms';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';

import { travels } from './travels';

function App() {
  const location = useLocation();

  function Home() {
    const articles = travels.map((travel, index) => {
      return (
        <Article
          key={index}
          index={index}
          image={travel.image}
          title={travel.title}
          date={travel.date}
          description={travel.description}
        />
      );
    });

    return articles;
  }

  function TermsAndCondition() {
    return <TermsPage />;
  }

  function PrivacyPolicy() {
    return <PrivacyPolicyPage />;
  }

  return (
    <main className='flex flex-column justify-start'>
      <div className='content'>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route exact path='/' element={<Home />} />
            <Route
              path='/terms-and-condition'
              element={<TermsAndCondition />}
            />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}

export default App;
