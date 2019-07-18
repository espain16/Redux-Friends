import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        header: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

const login = () => {
    axios.post('/api/login', {username:'Lambda School', password: 'i<3Lambd4'})
        .then(res => {
            localStorage.setItem('token',res.data.token);
            props.history.push('/dashboard');
        });
}