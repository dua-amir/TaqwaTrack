import axios from 'axios';

const BASE_URL = 'https://taqwatrack-project-default-rtdb.firebaseio.com/'; 

// ✅ Create or Replace Full Data (PUT)
export const setPrayerData = async (date, data) => {
  await axios.put(`${BASE_URL}/prayers/${date}.json`, data);
};

// ✅ Read Data (GET)
export const getPrayerData = async (date) => {
  const response = await axios.get(`${BASE_URL}/prayers/${date}.json`);
  return response.data;
};

// ✅ Update a Single Prayer Status (PATCH)
export const updatePrayerStatus = async (date, updates) => {
  await axios.patch(`${BASE_URL}/prayers/${date}.json`, updates);
};

// ✅ Delete All Prayers (DELETE)
export const deleteWeeklyData = async () => {
  await axios.delete(`${BASE_URL}/prayers.json`);
};
