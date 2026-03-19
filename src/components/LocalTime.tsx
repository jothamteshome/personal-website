'use client';

import { useEffect, useState } from 'react';

interface LocalTimeProps {
  timezone: string;
}

export default function LocalTime({ timezone }: LocalTimeProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'short',
      timeZone: timezone,
    });

    const tick = () => {
      const parts = formatter.formatToParts(new Date());
      const get = (type: string) => parts.find(p => p.type === type)?.value ?? '';
      setTime(`${get('hour')}:${get('minute')}:${get('second')} ${get('timeZoneName')}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return <span className="font-mono">{time ?? '--:--:-- ---'}</span>;
}
