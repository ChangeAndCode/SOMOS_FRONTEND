import "./style.css";
import FooterData from "../../../data/footer.json";

export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--bright)] text-[var(--light)] px-5 pb-10">
        <h2 className="text-center xs:text-lg md:text-2xl lg:text-4xl font-extrabold xs:my-5 md:my-10">
          {FooterData.contact}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 text-start">
          <div className="flex flex-col items-start gap-2  py-2">
            {FooterData.location.map((item, index) => {
              return (
                <p key={index} className="font-bold">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="grid lg:grid-cols-2 font-bold gap-2  py-2">
            {FooterData.socialMedia.map((item, index) => {
              const SvgIcon = (
                <svg
                  xmlns={item.xmlns}
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d={item.path}></path>
                </svg>
              );
              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-start gap-2"
                >
                  {SvgIcon}
                  <p>{item.value}</p>
                </a>
              ) : (
                <span
                  key={index}
                  className="flex items-center justify-start gap-2"
                >
                  {SvgIcon}
                  <p>{item.value}</p>
                </span>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
