import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlueWave from './presentation/pages/home/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlueWave />   
  </StrictMode>,
)