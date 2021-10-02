import { message, danger, warn } from "danger";
import lint from "@commitlint/lint";
import { commitRules } from "./commitlint.config";

// Always ensure we assign a pull request to someone
if (danger.github.pr.assignee === null) {
  fail(
    "Please assign someone to merge this PR, and optionally include people who should review."
  );
}

// Branch Naming Convention
const featureBranchRegex = new RegExp("^feature/.+");
const fixBranchRegex = new RegExp("^hotfix/.+");
if (
  !featureBranchRegex.test(danger.gitlab.mr.source_branch) &&
  !fixBranchRegex.test(danger.gitlab.mr.source_branch)
) {
  fail(`The name of the branch should start with feature/ or fix/`);
}

// Branch Name Limit to 28
if (danger.gitlab.mr.source_branch.length > 28) {
  fail(
    `The name of the feature branch should not be longer than 28 characters. Please refer to [link](https://www.linkedin.com/pulse/why-we-limiting-git-branch-name-length-28-characters-sasidhar-vanga/)`
  );
}

// Commimt Lint Check
// https://www.npmjs.com/package/@commitlint/lint
for (const commit of danger.git.commits) {
  lint(commit.message, commitRules).then((commitReport) => {
    if (!commitReport.valid) {
      let message = `There is a problem with the ${commit.message}`;
      commitReport.errors.forEach((error) => {
        message = `${message}\n- ${error.message}`;
      });
      fail(message);
    }
  });
}

// Update yarn.lock
const packageChanged = danger.git.modified_files.includes("package.json");
const lockfileChanged = danger.git.modified_files.includes("yarn.lock");
if (packageChanged && !lockfileChanged) {
  const message = "Changes were made to package.json, but not to yarn.lock";
  const idea = "Perhaps you need to run `yarn install`?";
  warn(`${message} - <i>${idea}</i>`);
}

// Files Changed
const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);
