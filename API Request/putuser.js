import axios from 'axios';
import { expect } from 'chai';

const API_URL = 'https://gorest.co.in/public-api/users';
const ACCESS_TOKEN = '77d924b6063000c3575f02d5020fb6bdbc91ebcc8194ac70dc217974bb2acfcd';

async function updateUser(userId) {
    const updatedUserData = {
        name: 'Jane Doe',
        email: `jane.doe${Math.random().toString().substring(2, 10)}@gmail.com`,
        status: 'inactive'
    };

    try {
        const response = await axios.put(`${API_URL}/${userId}`, updatedUserData, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('data');
        expect(response.data.data).to.include({
            id: parseInt(userId, 10),
            name: updatedUserData.name,
            email: updatedUserData.email,
            status: updatedUserData.status
        });

        console.log('User updated:', response.data.data);
    } catch (error) {
        console.error('Error in API request', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Contoh penggunaan updateUser dengan ID pengguna tertentu
const userId = '6919798'; 
updateUser(userId);
