// Bio Information
//==========================================================================
var bio = {
    "name": "Sage Elliott",
    "role": "Web Developer",
    "message": "Hello, World!",
    "contacts": {
        "mobile": "321.917.0306",
        "email": "hello@sageelliott.com",
        "github": "sageio",
        "twitter": "@sagecoder",
        "location": "Seattle, WA"
    },
    "skills": [
        "HTML", "CSS", "Javascript", "Python"
    ],
    "bioPic": "http://sageelliott.com/img/sage.jpg"
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedWelcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedBioPic);

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
};


// Work History
//==========================================================================

var work = {
    "jobs": [
        {
            "employer": "Transworld Advertising",
            "title": "Assistant teacher",
            "datesWorked": "October 2014 - July 2015",
            "location": "Melbourne, Florida",
            "description": "Prepared students for examinations with conversation and exercises"
        },
        {
            "employer": "ARGT Reliability Solutions",
            "title": "Senior Reliability Engineering Consultant",
            "datesWorked": "date - date",
            "location": "Melbourne, Florida",
            "description": "I did cool stuff!"
        },
        {
            "employer": "Lighting Science Group Corporation",
            "title": "Reliability Engineering Technician",
            "datesWorked": "date - date",
            "location": "Melbourne, Florida",
            "description": "I did cool stuff!"
        },
        {
            "employer": "Best Buy Geek Squad",
            "title": "In-store Computer repair and support",
            "datesWorked": "date - date",
            "location": "Melbourne, Florida",
            "description": "I did cool stuff!"
        },
        {
            "employer": "DRS Tactical Solutions",
            "title": "Assistant teacher",
            "datesWorked": "date - date",
            "location": "Melbourne, Florida",
            "description": "I did cool stuff!"
        }
    ]
};

// Projects
//==========================================================================

var projects = {
    "projects":[{
        "title": "Portfolio Project",
        "datesWorked": "Date",
        "description" : "Uses HTML, CSS and Bootstrap to create a website that showcases my work",
        "images":["images/197x148.gif"]
    },
    {
        "title": "Project 2",
        "datesWorked": "Date",
        "description" : "Cool stuff about project 2",
        "images":["images/197x148.gif"]
    },

    {
        "title": "Project 3",
        "datesWorked": "Date",
        "description" : "Cool Stuff about project 3",
        "images":["images/197x148.gif"]
    },

    {
        "title": "Project 4",
        "datesWorked": "Date",
        "description" : "Cool Stuff about Project 4",
        "images":["images/197x148.gif"]
    }
]};

// Education
//==========================================================================

var education = {
    "schools": [
        {
            "name": "Brevard Community College",
            "degree": "Associates Degree",
            "location": "Melbourne, Florida",
            "majors": [
                "Compsi"
            ],
            "datesAttended": "Date"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "Date",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "How to use Git and Github",
            "school": "Udacity",
            "dates": "Date",
            "url": "https://www.udacity.com/course/ud775"
        }
    ]
};

