import './style.css';
import Sidebar from '../../components/sidebar/Sidebar';
import AdminNav from '../../components/AdminNav/AdminNav'

import { useAuth } from '../../context/AuthContext';

export default function AdminLayout({ children }) {

  const { user } = useAuth()

  return <>
    <AdminNav></AdminNav>
    <div className="article-flex">
      <Sidebar />
      <article className="adminsite">
        <h1>Bienvenido {user?.name}</h1>
        {children}
      </article>
    </div>
  </>
}