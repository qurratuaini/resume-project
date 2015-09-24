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
            "title": "Web & ad designer",
            "datesWorked": "October 2014 - Jan 2015",
            "location": "Melbourne, Florida",
            "description": "Create & implement web hosted content management system to radically increase product quality, consistency & workflow throughout company.<br> Create & post high volume of web based ads."
        },
        {
            "employer": "ARGT Reliability Solutions",
            "title": "Senior Reliability Engineering Consultant",
            "datesWorked": "Jan 2014 - Oct 2014",
            "location": "Melbourne, Florida",
            "description": "Implement and perform all reliability procedures and testing needed to create & maintain high quality products, reduce cost and improve customer satisfaction. <br>Manage operations to complete Testing, Failure Analysis, and Reporting. <br>Lead marketing and design to develop a professional presence and relationship with clients."
        },
        {
            "employer": "Lighting Science Group Corporation",
            "title": "Reliability Engineering Technician",
            "datesWorked": "Sept 2010 - Nov 2013",
            "location": "Melbourne, Florida",
            "description": "Develop, perform, & report Reliability Testing & Life Data Analysis procedures <br>Diagnose product failures to component level(Field & Engineerings units) <br>Create & Maintain Design Failure Mode & Effects Analysis (DFMEA) to improve quality of product"
        },
        {
            "employer": "Best Buy Geek Squad",
            "title": "In-store Computer repair and support",
            "datesWorked": "Jun 2009 - Oct 2010",
            "location": "Melbourne, Florida",
            "description": "Perform in-store diagnostic, maintenance & repair on consumer electronics <br>Provide exceptional customer service & tech support in-store & over phone"
        },
        {
            "employer": "DRS Tactical Solutions",
            "title": "Test Operator A",
            "datesWorked": "Jul 2010 - Sept 2010",
            "location": "Melbourne, Florida",
            "description": "Setup, test, calibrate, & diagnose tactical military computer systems"
        }
    ]
};

displayWork = function(){

    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
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



displayWork();

