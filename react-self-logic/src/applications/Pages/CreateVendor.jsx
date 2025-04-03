import { Box, MenuItem, Select, TextField, Typography, Button, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ApiServices from '../ApiServices/ApiServices';

export default function CreateVendor() {
  // State to manage vendor data and other form fields
  const [typeofVendor, setTypeofVendor] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // Country selection state initialized with empty string
  const [states, setStates] = useState([]); // States based on the country
  const [cities, setCities] = useState([]); // Cities based on the state
  const [selectedState, setSelectedState] = useState(''); // State initialized with empty string
  const [selectedCity, setSelectedCity] = useState(''); // City initialized with empty string
  const CountryData = [
    { label: 'India', id: 1 },
    { label: 'USA', id: 2 },
    { label: 'England', id: 3 },
    { label: 'China', id: 4 },
  ];
  
  // State to manage form data
  const [getUserData ,setGetUserData] = useState({
    typeofVendor: '',
    vendorName: '',
    VendorPAN: '',
    VendorPhone: '',
    VendorContactNumber: '',
    VendorEmail: '',
    VendorWebSite: '',
    VendorIFSC: '',
    VendorBank: '',
    VendorCurrency: '',
    VendorAddress1: '',
    VendorAddress2: '',
    selectedCountry: '',
    selectedState: '',
    selectedCity: '',
  });

  const { getSelectVendor } = ApiServices();

  // Fetch vendor data
  const fetchVendorData = async () => {
    try {
      const data = await getSelectVendor();
      console.log('Fetched vendor data:', data);
      setTypeofVendor(data); // Update the state with fetched vendor data
    } catch (error) {
      console.error('Error fetching vendor data:', error);
    }
  };

  // Handle Country selection change
  const handleCountryChange = (event, newValue) => {
    setSelectedCountry(newValue); // Update the selected country
    setSelectedState(''); // Reset selected state when country changes
    setSelectedCity(''); // Reset selected city when country changes
    setCities([]); // Reset cities when country changes

    if (newValue?.label === 'India') {
      setStates([
        { label: 'Maharashtra', id: 1 },
        { label: 'Delhi', id: 2 },
        { label: 'Tamil Nadu', id: 3 },
        { label: 'Uttar Pradesh', id: 4 },
      ]);
    } else if (newValue?.label === 'USA') {
      setStates([
        { label: 'California', id: 1 },
        { label: 'New York', id: 2 },
        { label: 'Texas', id: 3 },
        { label: 'Florida', id: 4 },
      ]);
    } else {
      setStates([]);
      setCities([]);
    }
  };

  // Handle State selection change
  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue); // Update the selected state
    setSelectedCity(''); // Reset selected city when state changes
    setCities([]); // Reset cities when state changes

    if (newValue?.label === 'Maharashtra') {
      setCities([{ label: 'Mumbai', id: 1 }, { label: 'Pune', id: 2 }]);
    } else if (newValue?.label === 'Delhi') {
      setCities([{ label: 'New Delhi', id: 1 }]);
    } else if (newValue?.label === 'California') {
      setCities([{ label: 'Los Angeles', id: 1 }, { label: 'San Francisco', id: 2 }]);
    } else if (newValue?.label === 'New York') {
      setCities([{ label: 'New York City', id: 1 }]);
    }
  };

  // Handle City selection change
  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue); // Update the selected city
  };

  // Handle change for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGetUserData({
      ...getUserData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Vendor Data:', getUserData); // Process form data or send to an API
  };

  useEffect(() => {
    fetchVendorData(); // Call the function to fetch data when component mounts
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '900px', height: 'auto', background: '#fff', padding: '20px', margin: '0px auto', overflowX: 'hidden', transition: 'all 0.3s ease' }}>
        <Typography
          variant="h5"
          sx={{
            position: 'relative',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: 2,
            borderBottom: '2px solid #ccc',
          }}
        >
          Create Vendor
        </Typography>

        {/* Vendor Select Dropdown */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={getUserData.typeofVendor}
            name="typeofVendor"
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          >
            {typeofVendor.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Vendor Name */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Vendor Name"
            fullWidth
            name="vendorName"
            value={getUserData.vendorName}
            onChange={handleInputChange}
          />
        </Box>

        {/* Other fields */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 1, justifyContent: 'space-between' }}>
          <TextField
            label="Vendor PAN Number"
            sx={{ width: '50%' }}
            name="VendorPAN"
            value={getUserData.VendorPAN}
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Person Name"
            sx={{ width: '50%' }}
            name="VendorContactPerson"
            value={getUserData.VendorContactPerson}
            onChange={handleInputChange}
          />
        </Box>

        {/* Other fields */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 1, justifyContent: 'space-between' }}>
          <TextField
            label="Vendor Contact Number"
            sx={{ width: '50%' }}
            name="VendorContactNumber"
            value={getUserData.VendorContactNumber}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            sx={{ width: '50%' }}
            name="VendorEmail"
            value={getUserData.VendorEmail}
            onChange={handleInputChange}
          />
          <TextField
            label="Website"
            sx={{ width: '50%' }}
            name="VendorWebSite"
            value={getUserData.VendorWebSite}
            onChange={handleInputChange}
          />
        </Box>

        {/* Bank details */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 1, justifyContent: 'space-between' }}>
          <TextField
            label="IFSC Code"
            sx={{ width: '50%' }}
            name="VendorIFSC"
            value={getUserData.VendorIFSC}
            onChange={handleInputChange}
          />
          <TextField
            label="Account Number"
            sx={{ width: '50%' }}
            name="VendorBank"
            value={getUserData.VendorBank}
            onChange={handleInputChange}
          />
          <TextField
            label="Currency"
            sx={{ width: '50%' }}
            name="VendorCurrency"
            value={getUserData.VendorCurrency}
            onChange={handleInputChange}
          />
        </Box>

        {/* Address */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 1, justifyContent: 'space-between' }}>
          <TextField
            label="Address 1"
            sx={{ width: '50%' }}
            name="VendorAddress1"
            value={getUserData.VendorAddress1}
            onChange={handleInputChange}
          />
          <TextField
            label="Address 2"
            sx={{ width: '50%' }}
            name="VendorAddress2"
            value={getUserData.VendorAddress2}
            onChange={handleInputChange}
          />
        </Box>

        {/* Country, State, City */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 1, justifyContent: 'space-between' }}>
          <Autocomplete
            disablePortal
            options={CountryData}
            value={selectedCountry}
            onChange={handleCountryChange}
            sx={{ width: '50%' }}
            renderInput={(params) => <TextField {...params} label="Country" />}
          />
          <Autocomplete
            disablePortal
            options={states}
            value={selectedState}
            onChange={handleStateChange}
            disabled={!selectedCountry}
            sx={{ width: '50%' }}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
          <Autocomplete
            disablePortal
            options={cities}
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
            sx={{ width: '50%' }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </Box>

        {/* Submit and Reset Buttons */}
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, mt: 2, justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={handleSubmit}>Create Vendor</Button>
        </Box>
      </Box>
    </Box>
  );
}
