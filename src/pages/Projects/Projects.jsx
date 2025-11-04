import './Projects.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CardCarrousel from '../../components/CardCarrousel/CardCarrousel';
import { fetcher } from '../../utils/fetcher';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    const data = await fetcher('api/projects', {
      method: 'GET',
    });
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Nav />
      <article className="first">
        <h2>Bienvenido a la seccion de proyectos</h2>
        <CardCarrousel array={projects}></CardCarrousel>
      </article>
      <Footer />
    </>
  );
}
