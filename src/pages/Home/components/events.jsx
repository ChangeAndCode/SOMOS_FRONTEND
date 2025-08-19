// ./components/events.jsx
export default function Events({ data = [] }) {
  return (
    <section className="font-montserrat text-[var(--text)] space-y-5 px-5">
      {data.map((e, index) => {
        const Img = (
          <div className="flex justify-center items-center">
            <img
              className="lg:w-[70%] py-2"
              src={e.image?.[0]?.link}
              alt={e.image?.[0]?.name || "event"}
              width={320}
            />
          </div>
        );

        const Text = (
          <div className="flex-col justify-center items-center space-y-2 lg:text-xl">
            <h2 className="font-extrabold text-center">{e.subtitle}</h2>
            <div className="flex justify-center items-center">
              <p className="lg:w-[70%] text-justify">{e.content}</p>
            </div>
            <p className="text-center">{e.date}</p>
          </div>
        );

        // only applies in md+ screens
        const reverse = index % 2 === 1;
        const imgOrder = reverse ? "md:order-2" : "md:order-1";
        const textOrder = reverse ? "md:order-1" : "md:order-2";

        return (
          <div key={e.id ?? index}>
            <h1 className="py-5 font-extrabold text-center text-[var(--secondary)] text-xl lg:text-2xl">
              {e.title}
            </h1>

            <div className="grid md:grid-cols-2 md:gap-4 justify-center items-center">
              {/*
                On mobile, the order is Img -> Text.
                In md+ screens, we apply md:order-* to alternate.
               */}
              <div className={imgOrder}>{Img}</div>
              <div className={textOrder}>{Text}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
