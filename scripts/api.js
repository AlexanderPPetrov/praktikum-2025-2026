

export function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const matchedUsers = findEmailsForUsersWithLetter(data)
        const userEmails = getUserEmails(matchedUsers)
        console.log(userEmails)
    })
    .catch(error => {
        console.log("On error:", error)
    })
    .finally(() => {
        console.log("Always called")
    })
    
}


function findEmailsForUsersWithLetter(users, startLetter = "k") {
   const usersWithLetter = users.filter((user) => {
     const userName = user.username.toLowerCase()
     return userName.startsWith(startLetter.toLowerCase())
   })
   return usersWithLetter
}

function getUserEmails(users) {
    // Destruct user and extract it's email using { email }
    return users.map(({ email }) => email)
}
