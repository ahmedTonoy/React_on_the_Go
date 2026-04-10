import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'
import ScrollToTopButton from './components/ScrollUpButton/ScrollUpButton';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());
function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>React on the Go</h1>
      <Suspense fallback={<p>Data is Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <ScrollToTopButton></ScrollToTopButton>
    </>
  )
}

export default App
