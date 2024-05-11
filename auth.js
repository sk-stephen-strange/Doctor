
const loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;

    try {
        
        const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
        
        // User successfully logged in
        const user = userCredential.user;
        console.log('User logged in:', user);

        
        if (username.includes('receptionist')) {
            
            document.getElementById('receptionist-portal').style.display = 'block';
            document.getElementById('doctor-portal').style.display = 'none'; 
        } else if (username.includes('doctor')) {
            
            document.getElementById('doctor-portal').style.display = 'block';
            document.getElementById('receptionist-portal').style.display = 'none'; 
        } else {
            
            await firebase.auth().signOut();
            console.error('Unknown user role');
            
        }

    } catch (error) {
        
        console.error('Error signing in:', error.message);
        
    }
});
