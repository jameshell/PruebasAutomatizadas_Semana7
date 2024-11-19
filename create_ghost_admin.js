const axios = require('axios');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Configuration
const GHOST_URL = 'http://localhost:3001';
const GHOST_EMAIL = 'admin@example.com';
const GHOST_PASSWORD = 'admin_password';
const GHOST_API_URL = `${GHOST_URL}/ghost/api/admin/users`;

const createGhostAdmin = async () => {
    try {
        await delay(10000);

        const response = await axios.post(GHOST_API_URL, {
            users: [{
                email: GHOST_EMAIL,
                password: GHOST_PASSWORD,
                roles: [1]
            }]
        });

        if (response.status === 201) {
            console.log('Admin user created successfully.');
        } else {
            console.error('Failed to create admin user:', response.data);
        }
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

createGhostAdmin().then(r => console.log('User created successfully.')).catch(e => console.error('Error creating user:', e));