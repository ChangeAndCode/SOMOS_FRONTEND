import './style.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function AdminLayout({ children }) {
  return (
    <div className="article-flex">
      <Sidebar />
      <article className="adminsite">
        <h1>Panel de administracion</h1>
        {children}
      </article>
    </div>
  );
}