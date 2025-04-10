import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export const useCountdown = (targetUnixTime: number): Countdown => {
  const calculateTimeLeft = (): Countdown => {
    const now = Math.floor(Date.now() / 1000);
    const diff = targetUnixTime - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isFinished: true,
      };
    }

    const days = Math.floor(diff / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = diff % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isFinished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetUnixTime]);

  return timeLeft;
};
