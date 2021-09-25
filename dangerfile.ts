const rules = {
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
    ],
  ],
};
