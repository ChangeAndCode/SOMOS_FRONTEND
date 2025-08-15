import CountUp from "../../../components/CountUp";

export default function Statistics({ data }) {
  return (
    <section>
      {data.map((statistic, index) => {
        const isNumber =
          typeof statistic.value === "number" ||
          (!isNaN(parseFloat(statistic.value)) && isFinite(statistic.value));

        return (
          <div key={index}>
            <p>{statistic.title}</p>
            <h1>
              {isNumber ? (
                <>
                  <CountUp end={statistic.value} duration={1700} />
                  {statistic.suffix}
                </>
              ) : (
                statistic.value
              )}
            </h1>
            <p>{statistic.comment_one}</p>
            <p>{statistic.comment_two}</p>
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
        );
      })}
    </section>
  );
}
