import { useEffect, useState } from 'react';

const CountUp = ({ start = 0, end, duration = 2000 }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const current = Math.floor(start + percent * (end - start));
      setValue(current);
      if (percent < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <>{value}</>;
};

export default CountUp;