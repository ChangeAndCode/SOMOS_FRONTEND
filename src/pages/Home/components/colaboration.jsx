export default function Colaboration({ data }) {
  const logos = data?.logos ?? [];
  return (
    <>
      <section
        className="
          relative w-full box-border overflow-hidden bg-white border-gradient
          h-52
          items-center
      "
      >
        <p className="p-5 text-center font-bold">{data.title}</p>
        <div className="relative w-full h-full overflow-hidden edge-fade ">
          <div
            className="
            animate-marquee
            flex w-max items-center
            whitespace-nowrap gap-16
          "
          >
            <div className="flex items-center w-max gap-16">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.link}
                  alt={logo.name}
                  loading="eager"
                  className="shrink-0 h-32 w-[220px] object-contain"
                />
              ))}
            </div>
            <div className="flex items-center w-max gap-16" aria-hidden="true">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.link}
                  alt="" /* aria-hidden, no repetir texto */
                  loading="lazy"
                  className="shrink-0 h-32 w-[220px]  object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
