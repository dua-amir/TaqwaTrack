// Sample static prayer time (for Islamabad)
export const prayerTimes = {
    Fajr: '04:30 AM',
    Dhuhr: '12:15 PM',
    Asr: '04:45 PM',
    Maghrib: '06:45 PM',
    Isha: '08:00 PM',
  };
  
  export const getNextPrayer = () => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
    const timings = Object.entries(prayerTimes);
    for (let i = 0; i < timings.length; i++) {
      const [name, time] = timings[i];
      const [hour, minutePart] = time.split(':');
      const minute = parseInt(minutePart);
      const isPM = time.includes('PM');
  
      let timeInMinutes = parseInt(hour) % 12 * 60 + minute;
      if (isPM && name !== 'Fajr') timeInMinutes += 12 * 60;
  
      if (currentMinutes < timeInMinutes) {
        return `${name} at ${time}`;
      }
    }
  
    return 'Fajr (tomorrow)';
  };
  