import React from 'react';

function useCountdown(timeInSeconds) {
  const [time, setTime] = React.useState(timeInSeconds ?? 0);

  React.useEffect(() => {
    if (time === 0) return;
    setTimeout(() => {
      setTime(prevState => prevState - 1)
    }, 1000)
  }, [time]);

  return [time, setTime]
}

export default useCountdown;