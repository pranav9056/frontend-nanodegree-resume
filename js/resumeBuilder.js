/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Pranav Jain")
var name = 'Pranav Jain';
var role = "Software Developer";
var bio ={
  name : name,
  role : role,
  skills : ["Python","Java","HTML","CSS","JavaScript"],
  contact : { mobile :"(716)-436-8316",
              email : "pranavjain3194@gmail.com",
              github : ["pranav9056","https://github.com/pranav9056"],
              location : "Buffalo"
            },
  picture : "images/fry.jpg",
  welcomeMessage : "I like to listen. I have learned a great deal from listening carefully. Most people never listen. - Ernest Hemingway"

}
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedGithub  = HTMLgithub.replace("%data%",bio.contact.github[0]);
formattedGithub = formattedGithub.replace("%href%",bio.contact.github[1]);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedPic);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill){
  var formattedSkill = HTMLskills.replace("%data%",skill);
  $("#skills").append(formattedSkill);
});


var work ={
  jobs : [
      {
        postion : "Intern",
        employer : "Xerox",
        duration : "Jan 2016 – June 2016",
        city : "Bangalore",
        description: "Independently created a web based stroke portal from conception to testing using Django and Bootstrap. Designed the database schema for the portal and created it using postgreSQL. Incorporated the functionality to upload medical reports for input as opposed to filling forms and maintained a comprehensive documentation for the portal for later maintenance"
      },
      {
        postion : "Intern",
        employer : "IIT Delhi",
        duration : "June 2015 – July 2015",
        city : "Delhi",
        description : "Learnt the Metasploit framework to perform penetration testing. Learnt to use meterpreter instead of sending singles for exploitation, also exploited a vulnerable windows xp machine and performed privilege escalation etc. on the exploited machine"
      }

    ]
};

work.jobs.forEach(function(job,ind){
  var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
  var formattedPosition = HTMLworkTitle.replace("%data%",job.postion);
  var formattedDates = HTMLworkDates.replace("%data%",job.duration);
  var formattedDescription = HTMLworkDescription.replace("%data%",job.description)
  formattedLocation = HTMLworkLocation.replace("%data%",job.city);
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:nth-of-type("+(ind+1)+")").append(formattedEmployer+formattedPosition);
  $(".work-entry:nth-of-type("+(ind+1)+")").append(formattedDates);
  $(".work-entry:nth-of-type("+(ind+1)+")").append(formattedLocation);
  $(".work-entry:nth-of-type("+(ind+1)+")").append(formattedDescription);
});


var education = {
  schools : [
    {
      name : "University at Buffalo",
      years : "2016 - Present",
      location : "Buffalo, NY, US",
      degree : "Master of Science",
      majors: "CS"
    },
    {
      name : "Manipal Instititute of Technology",
      years : "2012 - 2016",
      location : "Manipal, KA, India",
      degree : "Bachelor of Technology",
      majors: "CS"
    }
  ]
};

education.schools.forEach(function(school,ind){
  var formattedSchool = HTMLschoolName.replace("%data%",school.name);
  var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
  formattedDates = HTMLschoolDates.replace("%data%",school.years);
  formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
  var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
  $("#education").append(HTMLschoolStart);
  $(".education-entry:nth-of-type("+(ind+1)+")").append(formattedSchool+formattedDegree);
  $(".education-entry:nth-of-type("+(ind+1)+")").append(formattedDates);
  $(".education-entry:nth-of-type("+(ind+1)+")").append(formattedLocation);
  $(".education-entry:nth-of-type("+(ind+1)+")").append(formattedMajor);
});
