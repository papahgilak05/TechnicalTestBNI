import axios from 'axios';
import { expect } from 'chai';

const API_URL = 'https://gorest.co.in/public-api/users';
const ACCESS_TOKEN = '77d924b6063000c3575f02d5020fb6bdbc91ebcc8194ac70dc217974bb2acfcd';

async function deleteUser(userId) {
    try {
        const response = await axios.delete(`${API_URL}/${userId}`, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        expect(response.status).to.equal(204); // Status 204 No Content Mengindikasikan delete sukses

        console.log(`User with ID ${userId} deleted successfully.`);
    } catch (error) {
        console.error('Error in API request', error.response ? error.response.data : error.message);
        throw error;
    }
}


const userId = '6919796'; 
deleteUser(userId);
