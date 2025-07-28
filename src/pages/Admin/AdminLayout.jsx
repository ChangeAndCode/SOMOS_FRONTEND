import './style.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout({ children }) {

  const { user } = useAuth()

  return (
    <div className="article-flex">
      <Sidebar />
      <article className="adminsite">
        <h1>Bienvenido {user?.name} al panel de administracion</h1>
        {children}
      </article>
    </div>
  );
}