import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function NavLinks({
  className = "",
  withIcons = true,
  iconClass = "w-5 h-5",
}) {
  return (
    <ul className={`grid xs:grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {navLinks.map(({ to, label, Icon }) => (
        <li key={to}>
          <Link
            to={to}
            className="hover:scale-110 hover:text-[var(--gold)] font-semibold flex gap-2"
          >
            {withIcons && Icon ? <Icon className={iconClass} /> : null}
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
