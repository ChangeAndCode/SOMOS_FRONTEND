import CountUp from "../../../components/CountUp";
import { useEffect, useState } from "react";
import { fetcher } from "../../../utils/fetcher";
import { dateFormatter } from "../../../utils/dateFormatter";

export default function Statistics({ data }) {
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    async function getNextEvent() {
      try {
        const events = await fetcher("api/events", { method: "GET" });
        const now = new Date();
        const futureEvents = events.filter(e => e.startDate && new Date(e.startDate) >= now);
        futureEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setNextEvent(futureEvents[0] || null);
      } catch (e) {
        setNextEvent(null);
      }
    }
    getNextEvent();
  }, []);

  // Clone data to avoid mutating prop
  const stats = [...data];
  // Replace 'Proximo evento' if there is a next event
  if (nextEvent) {
    const idx = stats.findIndex(s => s.title.toLowerCase().includes("proximo evento"));
    if (idx !== -1) {
      stats[idx] = {
        ...stats[idx],
        value: nextEvent.name,
        comment_one: dateFormatter(nextEvent.startDate),
        comment_two: nextEvent.location || "Ubicación pendiente"
      };
    }
  }

  return (
    <section className="py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center space-y-10">
        {stats.map((statistic, index) => {
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
