// import the Octokit library
import { Octokit } from "octokit"
// import prompt-sync library
import promptSync from 'prompt-sync';

// prompt for personnel authentication token
const prompt = promptSync();
const token = prompt('Enter your GitHub personal access token: ');

// authenticate with personal access token
const octokit = new Octokit({
       auth: token
});

// display welcome message to the console
console.log("Authenticating with GitHub...");

// authenticate with GitHub App
const {
    data: { login },
} = await octokit.rest.users.getAuthenticated();

// display the login name of authenticated user
console.log("Hello, %s", login);


// use the oktokit request method to make GitHub REST API requests issues
// for a repository, limit the number of issues to 1 per page.

// use octokit to retrive code scanning alerts for an organization

const { data } = await octokit.request("GET /orgs/{org}/code-scanning/alerts", {
    org: "Atmosera-adv-sec-prep"
})

// display results to the console
console.log(data);
