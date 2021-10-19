require('dotenv').config();

const token = process.env.GITHUB_TOKEN

//gitHub header for authorization
const gitHubHeader = {
    'headers': {
        'Authorization': `token ${token}`
    }
}




module.exports= {gitHubHeader}


