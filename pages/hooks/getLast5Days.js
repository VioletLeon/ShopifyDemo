import axios from 'axios';
import fiveDaysAgo from '../helperFunctions/calculateLast5Days';

export const getLast5Days = async () => {
  try {
    const { data } = await axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=' +
        `${process.env.NASAKEY}` +
        '&start_date=' +
        `${fiveDaysAgo}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
