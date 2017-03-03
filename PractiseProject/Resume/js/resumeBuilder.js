/*
This is empty on purpose! Your code to build the resume will go here.
 */



// var bio =  {
//     name: 'rookielzy',
//     role: 'WebDeveloper',
//     contact: 'Contact',
//     mobile: '18826224869',
//     email: '136464242@qq.com',
//     picture: 'images/fry.jpg',
//     welcome: 'Hello There',
//     skills: ['HTML', 'CSS', 'Javascrpit']
// }

// var formattedName = HTMLheaderName.replace('%data%', bio.name);
// var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
// var formattedContact = HTMLcontactGeneric.replace('%data%', bio.contact);
// var formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
// var formattedEmail = HTMLemail.replace('%data%', bio.email);
// var formattedbioPic = HTMLbioPic.replace('%data%', bio.picture);
// var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);

// $('#header').prepend(formattedName, formattedRole);
// $('#topContacts').prepend(formattedbioPic);
// $('#topContacts').append(formattedContact, formattedEmail, formattedMobile, formattedWelcome);


// var work = {
//     job: 'trainee',
//     employer: 'ZK',
//     years: 0,
//     location: 'GZ'
// }

// var education = {
//     "schools": [
//         {
//             "name": "XNYZ",
//             "location": "XN",
//             "dates": 2013
//         },
//         {
//             "name": "ZK",
//             "location": "GZ",
//             "majors": "Automatic",
//             "dates": 2017
//         }
//     ]
// }

var work = {

};

var projects = {
    "projects": [
        {
            "title": "Weather App",
            "dates": "2016-12",
            "description": "",
            "images": []
        }
    ]
},
    bio = {
        "name": "rookielzy",
        "role": "WebDeveloper",
        "welcomeMessage": "Hello There",
        "biopic": "images/fry.jpg",
        "contacts": {
            "mobile": "18826224869",
            "email": "136464242@qq.com",
            "github": "rookielzy",
            "location": "GuangZhou"
        },
        "skills": [
            "HTML",
            "CSS",
            "Javascrpit"
        ]
    },

    education = {
        "schools": [
            {
                "name": "XNYZ",
                "location": "XN",
                "degress": "High School",
                "dates": 2013,
                "url": "www.example.com"
            },
            {
                "name": "ZK",
                "location": "GZ",
                "degress": "Master",
                "dates": 2017,
                "url": "www.example.com",
                "majors": ["Automatic"]
            }
        ],
        "onlineCourses": [
            {
                "title": "",
                "school": "",
                "dates": "",
                "url": ""
            }

        ]
    };

if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.backgroundColor = "black";
}

