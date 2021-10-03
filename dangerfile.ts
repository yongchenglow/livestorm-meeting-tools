import lint from "@commitlint/lint";
import { commitRules } from "./commitlint.config";
import { message, danger, warn } from "danger";

// Always ensure we assign a pull request to someone
if (danger.github.pr.assignee === null) {
  fail(
    "Please assign someone to merge this PR, and optionally include people who should review."
  );
} else {
  message("✅ Pull request is assigned");
}

// Commimt Lint Check
// https://www.npmjs.com/package/@commitlint/lint
let passCommitLint = true;
for (const commit of danger.git.commits) {
  lint(commit.message, commitRules).then((commitReport) => {
    if (!commitReport.valid) {
      let message = `There is a problem with the ${commit.message}`;
      commitReport.errors.forEach((error) => {
        message = `${message}\n- ${error.message}`;
      });
      passCommitLint = false;
      fail(message);
    }
  });
}
if (passCommitLint) {
  message("✅ Passed commit linting rules");
}

// Update yarn.lock
const packageChanged = danger.git.modified_files.includes("package.json");
const lockfileChanged = danger.git.modified_files.includes("yarn.lock");
if (packageChanged && !lockfileChanged) {
  const message = "Changes were made to package.json, but not to yarn.lock";
  const idea = "Perhaps you need to run `yarn install`?";
  warn(`${message} - <i>${idea}</i>`);
} else {
  message("✅ Yarn lock file is up to date");
}
