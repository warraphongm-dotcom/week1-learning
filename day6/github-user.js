async function getUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Name: ${data.name}`);
        console.log(`Bio: ${data.bio}`);
        console.log(`Repos: ${data.public_repos}`);
        console.log(`Followers: ${data.followers}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}
const username = process.argv[2];

if (!username) {
    console.log("Usage: node github-user.js <username>");
    process.exit(1);
}

getUser(username);