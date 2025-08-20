import CountUp from "../../../components/CountUp";

export default function Statistics({ data }) {
  return (
    <section className="py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center space-y-10">
        {data.map((statistic, index) => {
          const isNumber =
            typeof statistic.value === "number" ||
            (!isNaN(parseFloat(statistic.value)) && isFinite(statistic.value));

          return (
            <div
              key={index}
              className="text-[var(--text)] font-montserrat text-lg font-bold flex-col justify-between space-y-2"
            >
              <p>{statistic.title}</p>
              <div className="flex justify-center items-center gap-2">
                <h1 className="flex gap-2 text-2xl text-[var(--gold)]">
                  {isNumber ? (
                    <>
                      <CountUp
                        end={statistic.value}
                        duration={1700}
                        className=""
                      />
                      {statistic.suffix}
                    </>
                  ) : (
                    statistic.value
                  )}
                </h1>
                <svg
                  xmlns={statistic.icon[0].xmlns}
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d={statistic.icon[0].path}></path>
                </svg>
              </div>

              <p>{statistic.comment_one}</p>
              <p>{statistic.comment_two}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
