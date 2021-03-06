"use strict";
exports.__esModule = true;
var name = 'Heather Till';
var career = 'Soon to be Junior Developer. Past elementary teacher. Full time student - there is too much in this world to ever be done learning.';
var aboutMe = 'I am a jack-of-all-trades. I am too curious, impatient, and cheap to pay some to do something I can do myself. Because of this I have learned how to find the information I need to solve most any problem that comes into my life. I have been married almost 21 years and have 3 children and 1 very spoiled black lab. They are 20, 17, and 13. I studied art all through high school and most of college. Because of this love of art and creating, I always have some creative project in the making.\n\n';
var interests = '\n* Knitting\n* Sewing\n* Photo editing\n* Graphic design\n* Travel\n\n';
var skills = "\n\* Painting\n* Baking and cooking\n* Appliance repair\n* Furniture making and reupholstery\n* Irrigation\n* General problem solving\n* Costume and stage design\n* Programming\n\n";
var companyName = [
    'Clear Lake YMCA, Clear Lake City, TX',
    'Garfield Elementary, Houston,TX',
    'Birmingham Early Learning Center, Birmingham, AL'
];
var jobTitle = [
    'Lifeguard', '3rd grade teacher', 'Preschool Teacher'
];
var description = [
    'I lifeguarded and taught swim lessons at a number of area pools for 3 years.',
    'I was the Gifted and Talented teacher for the 3rd grade for 2 years.',
    'I taught the 3K class at the center for 1 year.'
];
var skill1 = {
    skill: 'Painting',
    cool: 1
};
var skill2 = {
    skill: 'Baking and cooking',
    cool: 0
};
var skill3 = {
    skill: 'Appliance repair',
    cool: 0
};
var skill4 = {
    skill: 'Furniture making and reupholstery',
    cool: 0
};
var skill5 = {
    skill: 'Irrigation',
    cool: 0
};
var skill6 = {
    skill: 'General problem solving',
    cool: 1
};
var skill7 = {
    skill: 'Costume and stage design',
    cool: 1
};
var skill8 = {
    skill: 'Programming',
    cool: 1
};
function displaySkill(skill, cool) {
    if (cool === 1) {
        console.log('* BAM: ' + skill);
    }
    else if (cool == 0) {
        console.log('* ' + skill);
    }
}
var skillArray = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8];
for (var i = 0; i < skillArray.length; i++) {
    displaySkill(skillArray[i].skill, skillArray[i].cool);
}
console.log(skillArray[1].skill);
console.log('Name: ', name.toUpperCase());
console.log('Career: ', career);
console.log('About Me: ', aboutMe);
console.log('Interests: ', interests);
console.log('Skills: ', skills);
function displayPosition(companyName, jobTitle, description) {
    console.log('My Previous Experience:\n* ' + jobTitle + ' at ' + companyName + ' - ' + description);
}
;
displayPosition(companyName[0], jobTitle[0], description[0]);
displayPosition(companyName[1], jobTitle[1], description[1]);
displayPosition(companyName[2], jobTitle[2], description[2]);
