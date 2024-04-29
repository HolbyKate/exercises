async function fetchUserData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

fetchUserData();