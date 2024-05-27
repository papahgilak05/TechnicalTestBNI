import axios from 'axios';
import { expect } from 'chai';

const API_URL = 'https://gorest.co.in/public-api/users';
const ACCESS_TOKEN = '77d924b6063000c3575f02d5020fb6bdbc91ebcc8194ac70dc217974bb2acfcd';

describe('GoRest API - Create User', async() => {
    it('should create a new user', async() =>{
        // Data user yang akan dibuat
        const userData = {
            name: 'John Doe',
            gender: 'male',
            email: `john.son${Math.random().toString().substring(2, 10)}@gmail.com`,
            status: 'active'
        };

        try {
            // Melakukan POST request
            const response = await axios.post(`${API_URL}`, userData, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            // Validasi response
            expect(response.status).to.equal(200);
            expect(response.data).to.have.property('data');
            expect(response.data.data).to.include({
                name: userData.name,
                gender: userData.gender,
                email: userData.email,
                status: userData.status
            });
        } catch (error) {
            // Jika ada error dalam request, gagal pengujian
            console.error('Error in API request', error.response ? error.response.data : error.message);
            throw error;
        }
    });
});
