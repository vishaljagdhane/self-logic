import axios from 'axios';

export default function ApiServices() {
    // const baseUrl = process.env.REACT_APP_API_URL;  // Accessing the environment variable
    const baseUrl = 'http://localhost:4100/api'
    const getUserData = async () => {
        try {
            const response = await fetch(`${baseUrl}/userData`);
            const data = await response.json();
            return data; // Return the data from the API call
        } catch (error) {
            console.error('Error fetching user data:', error);
            return []; // Return an empty array in case of an error
        }
    };

const postCreateDatabase = async (createDatabase) => {
  try {
    const response = await axios.post(`${baseUrl}/create-database`, { name: createDatabase });
    console.log('Database created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during database creation:', error.response ? error.response.data : error.message);
    throw error;
  }
};

    return { getUserData, postCreateDatabase };
}
