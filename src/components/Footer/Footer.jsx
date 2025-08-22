import FooterData from "../../../data/footer.json";
import { useTheme } from "../../context/ThemeContext";
import NavLinks from "../navLinks";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;
  const { darkMode } = useTheme();
  return (
    <>
      <footer className="bg-[var(--bright)] border-gradient text-[var(--light)] p-5 rounded-2xl shadow-md">
        <h2 className="font-letterpress  text-center xs:text-xl  md:text-4xl xs:my-5 md:my-10">
          {FooterData.contact}
        </h2>
        <div className="flex xs:flex-col md:flex-row items-start">
          <div className="text-start">
            <div className="flex flex-col items-start gap-2  py-2">
              {FooterData.location.map((item, index) => {
                return (
                  <p key={index} className="xs:text-sm text-xl font-extrabold">
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="flex font-bold gap-5 py-2">
              {FooterData.socialMedia.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center justify-start gap-2"
                  >
                    <img
                      src={
                        darkMode
                          ? `${baseUrl}${item.image_black}`
                          : `${baseUrl}${item.image_white}`
                      }
                      alt="logo"
                      width={50}
                      height={50}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="xs:py-5 flex xs:justify-start  md:justify-end text-xl w-full">
            <NavLinks className=" flex-wrap" withIcons iconClass="w-6 h-6" />
          </div>
        </div>
      </footer>
    </>
  );
}
