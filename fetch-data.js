/**
 * Asynchronously fetches user data from a public API and displays the names in a list.
 * Implements try-catch block for robust error handling.
 */
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch Data Using try-catch: Fetch the response
        const response = await fetch(apiUrl);

        // Check for HTTP errors (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the completed list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling: Log the error and display a user-friendly message
        console.error('Error fetching data:', error);
        
        // Clear the existing content
        dataContainer.innerHTML = '';
        
        // Set its text content to the error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded:
document.addEventListener('DOMContentLoaded', fetchUserData);