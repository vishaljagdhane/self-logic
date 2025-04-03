import axios from 'axios';

export default function ApiServices() {
    const baseUrl = 'http://localhost:5000/';

    // Fetch user data
    const getUserData = async () => {
        try {
            const response = await axios.get(`${baseUrl}userData`);
            return response.data; // Return the data from the API call
        } catch (error) {
            console.error('Error fetching user data:', error);
            return []; // Return an empty array in case of an error
        }
    };

    // Post request to create a database
    const postCreateDatabase = async (createDatabase) => {
        try {
            const response = await axios.post(`${baseUrl}create-database`, { name: createDatabase });
            console.log('Database created successfully:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error during database creation:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    // Fetch user module data
    const getuserListData = async () => {
        try {
            const response = await axios.get(`${baseUrl}userModuleData`);  // Correct URL without double slashes
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    // Fetch admin menu items
    const getadminMenuItems = async () => {
        try {
            const response = await axios.get(`${baseUrl}adminMenuItems`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    // Fetch integration menu items
    const getintegrationMenuItems = async () => {
        try {
            const response = await axios.get(`${baseUrl}integrationMenuItems`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    // Fetch vendor types (TypeOfVendor)
    const getSelectVendor = async () => {
        try {
            const response = await axios.get(`${baseUrl}TypeOfVendor`);  // Corrected URL to fetch vendor types
            console.log("Data from getSelectVendor:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching TypeOfVendor data:", error);
            throw error;  // Make sure to throw the error if it fails
        }
    };

    return {
        getUserData,
        postCreateDatabase,
        getuserListData,
        getadminMenuItems,
        getintegrationMenuItems,
        getSelectVendor
    };
}
