/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'Pranav Jain',
    role: "Software Developer",
    skills: ["Python", "Java", "HTML", "CSS", "JavaScript"],
    contacts: {
        mobile: "(716)-436-8316",
        email: "pranavjain3194@gmail.com",
        github: ["pranav9056", "https://github.com/pranav9056"],
        location: "New York"
    },
    biopic: "images/fry.jpg",
    welcomeMessage: "I like to listen. I have learned a great deal from listening carefully. Most people never listen. - Ernest Hemingway",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github[0]);
        formattedGithub = formattedGithub.replace("%href%", this.contacts.github[1]);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(formattedWelcomeMsg, formattedPic);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#header").append(HTMLskillsStart);
        if (this.skills.length > 0) {
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};
bio.display();

var work = {
    jobs: [
        {
            title: "Software Engineer",
            employer: "Precision-Gx Inc.",
            dates: "Jun 2018 – Present",
            location: "Philadelphia",
            description: "Developing and building a platform and packages in Python which are responsible for pre-processing health-care data, training ML models using RNN's, and storing trained models for future use."
        },
        {
            title: "Intern",
            employer: "Xerox",
            dates: "Jan 2016 – June 2016",
            location: "Bangalore",
            description: "Independently created a web based stroke portal from conception to testing using Django and Bootstrap. Designed the database schema for the portal and created it using postgreSQL. Incorporated the functionality to upload medical reports for input as opposed to filling forms and maintained a comprehensive documentation for the portal for later maintenance"
        },
        {
            title: "Intern",
            employer: "IIT Delhi",
            dates: "June 2015 – July 2015",
            location: "Delhi",
            description: "Learnt the Metasploit framework to perform penetration testing. Learnt to use meterpreter instead of sending singles for exploitation, also exploited a vulnerable windows xp machine and performed privilege escalation etc. on the exploited machine"
        }

    ],
    display: function() {
        this.jobs.forEach(function(job, ind) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedPosition = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:nth-of-type(" + (ind + 1) + ")").append(formattedEmployer + formattedPosition, formattedDates, formattedLocation, formattedDescription);
        });
    }
};

work.display();


var education = {
    schools: [{
            name: "University at Buffalo",
            dates: "2016 - Present",
            location: "Buffalo, NY, US",
            degree: "Master of Science",
            majors: ["CS"]
        },
        {
            name: "Manipal Instititute of Technology",
            dates: "2012 - 2016",
            location: "Manipal, KA, India",
            degree: "Bachelor of Technology",
            majors: ["CS"]
        }
    ],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree Program",
            school: "Udacity",
            dates: "June 2017 - September 2017",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            title: "How to Use Git and GitHub",
            school: "Udacity",
            dates: "June 2017",
            url: "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            title: "Networking Concepts",
            school: "Nettech",
            dates: "February 2014 - March 2014",
            url: "http://www.nettech.in/notice/summer/training/2013/manipal/Nettech-Summer-Training-2013-results.html"
        },
    ],
    display: function() {
        this.schools.forEach(function(school, ind) {
            var formattedSchool = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:nth-of-type(" + (ind + 1) + ")").append(formattedSchool + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            var num = this.schools.length;
            this.onlineCourses.forEach(function(course, ind) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
                var formattedUrl = HTMLonlineURL.replace("%link%", course.url);
                formattedUrl = formattedUrl.replace('%data%', "More Details");
                $(".education-entry:nth-of-type(" + (num + ind + 1) + ")").append(formattedTitle + formattedSchool, formattedDates, formattedUrl);

            });

        }

    }
};

education.display();


var projects = {
    projects: [{
            title: 'Energy Efficient Coverage Path Planning Periodic connectivity (EECPP-PC) with Multiple Drones',
            dates: 'Ongoing Project',
            description: 'Working on adding Periodic connectivity constraints to the previously solved EECPP problem formulation. Work involves adding and testing constraints on UB-ANC testbed.',
            images: ['images/qt.png']
        },
        {
            title: 'Loop Closure',
            dates: 'Spring 2017',
            description: 'This implementation uses a Visual Bag of Words approach for detecting Loop Closures. The technique used relies on Bayesian filtering to find out the probability of a loop closure at each instant.',
            images: ['images/python.png', 'images/opencv.png']
        },
        {
            title: 'Database System',
            dates: 'Spring 2017',
            description: 'Developed a database system from scratch in Java that handles SQL based queries that belong to the TPCH benchmark.',
            images: ['images/java.png']
        },
        {
            title: 'Concepts in Distributed System',
            dates: 'Spring 2017',
            description: 'Designed a group messenger using Android, which supports Total-FIFO ordering. Developed a simple Chord Distributed Hash Table using Android programming. Designed a simple version of Amazon Dynamo that supports linear consistency through replication.',
            images: ['images/java.png', 'images/android.jpg']
        },
        {
            title: 'Grid Localization',
            dates: 'Fall 2016',
            description: 'Implemented Grid Localization using Bayes Filter. The project was done in ROS. Movements and obsevations were read from a ROSbag files',
            images: ['images/python.png', 'images/ros.jpg']
        },
        {
            title: 'Number recognition',
            dates: 'Fall 2016',
            description: 'Implemented Logistic Regression and a single layer neural network for classification of digits (MNIST dataset)',
            images: ['images/python.png']
        },
        {
            title: 'Simple Compiler',
            dates: '2015',
            description: 'Designed a Lexical, Semantic and Syntactical Analyser along with symbol table for C language',
            images: ['images/c++.jpg']
        }

    ],
    display: function() {
        this.projects.forEach(function(project, ind) {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
            $(".project-entry:nth-of-type(" + (ind + 1) + ")").append(formattedTitle, formattedDates, formattedDescription);
            project.images.forEach(function(im) {
                var formattedImage = HTMLprojectImage.replace('%data%', im);
                $(".project-entry:nth-of-type(" + (ind + 1) + ")").append(formattedImage);
            });
        });

    }
};

projects.display();
$('#mapDiv').append(googleMap);
