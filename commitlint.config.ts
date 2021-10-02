import type { UserConfig } from "@commitlint/types";
import type { QualifiedRules } from "@commitlint/types";

export const commitRules: QualifiedRules = {
  "subject-empty": [2, "never"],
  "type-empty": [2, "never"],
  "header-max-length": [2, "always", 72],
  "type-enum": [
    2,
    "always",
    [
      // Modules
      "Init",
      "Release",
      "Timer",
      "Random",
      "Assistant",
      "Housekeeping",
      "Config",
    ],
  ],
};

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: commitRules,
};

module.exports = Configuration;
