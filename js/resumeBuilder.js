
var name = "Sage Elliott";

var role = "Web Developer";


var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);