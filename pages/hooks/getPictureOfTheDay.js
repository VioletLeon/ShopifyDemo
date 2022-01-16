import axios from 'axios';

export const getPictureOfTheDay = async () => {
  try {
    const { data } = await axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=' + `${process.env.NASAKEY}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
