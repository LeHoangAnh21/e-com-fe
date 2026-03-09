import { useState, useEffect } from "react";

interface CountdownResult {
  hours: string;
  minutes: string;
  seconds: string;
  isReady: boolean;
}

export function useCountdown(durationMs: number): CountdownResult {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(0);

  // Only set endTime on the client after mount (avoids SSR/hydration mismatch)
  useEffect(() => {
    const end = Date.now() + durationMs;
    setEndTime(end);
    setRemaining(durationMs);
  }, [durationMs]);

  useEffect(() => {
    if (endTime === null) return;
    const interval = setInterval(() => {
      const left = endTime - Date.now();
      if (left <= 0) {
        setRemaining(0);
        clearInterval(interval);
      } else {
        setRemaining(left);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const totalSec = Math.floor(remaining / 1000);
  return {
    hours: String(Math.floor(totalSec / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0"),
    seconds: String(totalSec % 60).padStart(2, "0"),
    isReady: endTime !== null,
  };
}
