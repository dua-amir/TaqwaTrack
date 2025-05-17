
import moment from 'moment-hijri'; // Import the moment-hijri library for Hijri date conversion

// Function to get today's Gregorian date
export const getTodayGregorianDate = () => {
  // Get today's Gregorian date
  return moment().format('dddd, MMMM Do YYYY');
};

// Function to get today's Hijri date
export const getTodayHijriDate = () => {
  // Get today's Hijri date
  return moment().format('iYYYY/iMM/iDD'); // Format as Hijri year/month/day (e.g., 1446/08/10)
};
