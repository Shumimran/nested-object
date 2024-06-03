"use strict";
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer 
//programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific 
//skills from this list and show them.
let developerSkills = {
    Languages: ["javascript", "typescript", "python"],
    Framework: ["React", "Angular", "Vue"],
    Tools: ["Git", "Webpack", "Docker"]
};
let { Languages, Framework, Tools } = developerSkills;
console.log(`Languages: ${Languages}, Framework: ${Framework}, Tools: ${Tools}`);
