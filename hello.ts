import $ from 'jquery';

const name: string = 'Heather Till';

const career: string =
    'Soon to be Junior Developer. Past elementary teacher. Full time student - there is too much in this world to ever be done learning.';

const aboutMe: string =
    'I am a jack-of-all-trades. I am too curious, impatient, and cheap to pay some to do something I can do myself. Because of this I have learned how to find the information I need to solve most any problem that comes into my life. I have been married almost 21 years and have 3 children and 1 very spoiled black lab. They are 20, 17, and 13. I studied art all through high school and most of college. Because of this love of art and creating, I always have some creative project in the making.\n\n';

const interests: string =
    '\n* Knitting\n* Sewing\n* Photo editing\n* Graphic design\n* Travel\n\n';

const skills: string =
    '\n* Painting\n* Baking and cooking\n* Appliance repair\n* Furniture making and reupholstery\n* Irrigation\n* General problem solving\n* Costume and stage design\n* Programming\n\n';

const companyName: string[] = [
    'Clear Lake YMCA, Clear Lake City, TX',
    'Garfield Elementary, Houston,TX',
    'Birmingham Early Learning Center, Birmingham, AL'
];

const jobTitle: string[] = [
    'Lifeguard',
    '3rd grade teacher',
    'Preschool Teacher'
];

const description: string[] = [
    'I lifeguarded and taught swim lessons at a number of area pools for 3 years.',
    'I was the Gifted and Talented teacher for the 3rd grade for 2 years.',
    'I taught the 3K class at the center for 1 year.'
];

interface SkillsArr {
    skill: string;
    cool: number;
}

let skill1: SkillsArr = {
    skill: 'Painting',
    cool: 1
};

let skill2: SkillsArr = {
    skill: 'Baking and cooking',
    cool: 0
};
let skill3: SkillsArr = {
    skill: 'Appliance repair',
    cool: 0
};
let skill4: SkillsArr = {
    skill: 'Furniture making and reupholstery',
    cool: 0
};
let skill5: SkillsArr = {
    skill: 'Irrigation',
    cool: 0
};
let skill6: SkillsArr = {
    skill: 'General problem solving',
    cool: 1
};
let skill7: SkillsArr = {
    skill: 'Costume and stage design',
    cool: 1
};
let skill8: SkillsArr = {
    skill: 'Programming',
    cool: 1
};

function displaySkill(skill: string, cool: number) {
    if (cool === 1) {
        console.log('* BAM: ' + skill);
    } else if (cool == 0) {
        console.log('* ' + skill);
    }
}

let skillArray: Array<SkillsArr> = [
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8
];

for (let i: number = 0; i < skillArray.length; i++) {
    displaySkill(skillArray[i].skill, skillArray[i].cool);
}

console.log('Name: ', name.toUpperCase());

console.log('Career: ', career);

console.log('About Me: ', aboutMe);

console.log('Interests: ', interests);

console.log('Skills: ', skills);

function displayPosition(
    companyName: string,
    jobTitle: string,
    description: string
) {
    console.log(
        'My Previous Experience:\n* ' +
            jobTitle +
            ' at ' +
            companyName +
            ' - ' +
            description
    );
}

displayPosition(companyName[0], jobTitle[0], description[0]);
displayPosition(companyName[1], jobTitle[1], description[1]);
displayPosition(companyName[2], jobTitle[2], description[2]);
