import FooterData from "../../../data/footer.json";
import { useTheme } from "../../context/ThemeContext";
import NavLinks from "../navLinks";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;
  const { darkMode } = useTheme();
  return (
    <>
      <footer className="bg-[var(--bright)] border-gradient text-[var(--light)] p-5 rounded-2xl shadow-md">
        <h2 className="font-letterpress  text-center xs:text-2xl  md:text-4xl xs:my-5 md:my-10">
          {FooterData.contact}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="grid xs:grid-none md:grid-rows-2">
            <div className="flex justify-around font-bold gap-5 py-2">
              {FooterData.socialMedia.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        darkMode
                          ? `${baseUrl}${item.image_black}`
                          : `${baseUrl}${item.image_white}`
                      }
                      alt="logo"
                      className="xs:w-10 md:w-15 hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
            <div className="xs:py-5 text-xl w-full">
              <NavLinks withIcons iconClass="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center gap-2 py-2 w-full justify-around">
            {FooterData.location.map((item, index) => {
              return (
                <p
                  key={index}
                  className="xs:text-sm text-xl text-center font-extrabold"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
