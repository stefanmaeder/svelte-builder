const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const token = core.getInput("repo-token");
    const issue = github.context.payload.issue.number;
    const octokit = new github.GitHub(token);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
