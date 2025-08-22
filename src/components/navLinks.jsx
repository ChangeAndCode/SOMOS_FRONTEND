import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function NavLinks({
  className = "",
  withIcons = true,
  iconClass = "w-5 h-5",
}) {
  return (
    <ul className={`flex xs:flex-col lg:flex-row  gap-4 ${className}`}>
      {navLinks.map(({ to, label, Icon }) => (
        <li key={to}>
          <Link
            to={to}
            className="hover:underline font-semibold inline-flex gap-2"
          >
            {withIcons && Icon ? <Icon className={iconClass} /> : null}
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
