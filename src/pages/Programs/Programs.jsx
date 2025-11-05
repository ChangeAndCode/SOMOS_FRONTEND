import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CardCarrousel from '../../components/CardCarrousel/CardCarrousel';
import { fetcher } from '../../utils/fetcher';
import { useEffect, useState } from 'react';

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  async function fetchPrograms() {
    const data = await fetcher('api/programs', {
      method: 'GET',
    });
    setPrograms(data);
  }

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <>
      <Nav />
      <article className="first">
        <h2>Bienvenido a la pagina programas</h2>
        <CardCarrousel array={programs}></CardCarrousel>
      </article>
      <Footer />
    </>
  );
}
