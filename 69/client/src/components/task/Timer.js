import { useEffect, useState } from "react";
import dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function Timer({ time }) {
  const [realtime, setRealtime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtime(dayjs(time).add(1, "second").fromNow());
    }, 1000);
    return () => clearInterval(interval);
  });

  return <>{realtime}</>;
}
