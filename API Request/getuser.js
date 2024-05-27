import axios from 'axios';

const API_URL = 'https://gorest.co.in/public-api/users';
const userId = '6919798'

describe ("GET USER", async() => {
    it ("should be getting user detail", async()=>{
    //Melakukan Get Request Gorest
    const res = await axios.get(`${API_URL}/${userId}`);
    //Mengeluarkan response dari hasil request
    console.log(res.data);
    })

    //Validasi Response
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property('data');
})

