import Nav from '../../components/Nav/Nav';
import './Events.css';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';
import CardCarrousel from '../../components/CardCarrousel/CardCarrousel';

export default function Events() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const data = await fetcher('api/events', {
      method: 'GET',
    });
    setEvents(data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Nav></Nav>
      <article className="first">
        <h2>Bienvenido a la pagina de eventos</h2>
        <CardCarrousel array={events}></CardCarrousel>
      </article>
      <Footer></Footer>
    </>
  );
}
