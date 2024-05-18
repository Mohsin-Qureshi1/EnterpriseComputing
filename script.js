function HomeOpen() {   
     window.location.replace('home.html')
}

function ContactOpen() {   
    window.location.replace('Contact.html')
}

function TutorOpen() {   
    window.location.replace('Tutor.html')
}

function MathsOpen() {   
    window.location.replace('Maths.html')
}

function EnglishOpen() {   
    window.location.replace('English.html')
}

function ScienceOpen() {   
    window.location.replace('Science.html')
}


function defaultSubjects() {
    document.getElementById("MY7").style.backgroundColor = '#eee'
    document.getElementById("MY8").style.backgroundColor = '#eee'
    document.getElementById("MY9").style.backgroundColor = '#eee'
    document.getElementById("MY10").style.backgroundColor = '#eee'
    document.getElementById("MY11").style.backgroundColor = '#eee'
    document.getElementById("MY12").style.backgroundColor = '#eee'
    document.getElementById("MY12").style.backgroundColor = '#eee'
    document.getElementById("MY12").style.backgroundColor = '#eee'

    document.getElementById("yrM7content").style.display = "none"
    document.getElementById("yrM7content").style.animationPlayState = "paused"
    document.getElementById("yrM8content").style.display = "none"
    document.getElementById("yrM8content").style.animationPlayState = "paused"
    document.getElementById("yrM9content").style.display = "none"
    document.getElementById("yrM9content").style.animationPlayState = "paused"
    document.getElementById("yrM10content").style.display = "none"
    document.getElementById("yrM10content").style.animationPlayState = "paused"
    document.getElementById("yrM11content").style.display = "none"
    document.getElementById("yrM11content").style.animationPlayState = "paused"
    document.getElementById("yrM12content").style.display = "none"
    document.getElementById("yrM12content").style.animationPlayState = "paused"
}

function MY7(){
    defaultSubjects()
    document.getElementById("yrM7content").style.display = "block"
    document.getElementById("yrM7content").style.animationPlayState = "running"
    document.getElementById("MY7").style.backgroundColor = '#fecd62'
}

function MY8(){
    defaultSubjects()
    document.getElementById("yrM8content").style.display = "block"
    document.getElementById("yrM8content").style.animationPlayState = "running"
    document.getElementById("MY8").style.backgroundColor = '#fecd62'
}

function MY9(){
    defaultSubjects()
    document.getElementById("yrM9content").style.display = "block"
    document.getElementById("yrM9content").style.animationPlayState = "running"
    document.getElementById("MY9").style.backgroundColor = '#fecd62'
}

function MY10(){
    defaultSubjects()
    document.getElementById("yrM10content").style.display = "block"
    document.getElementById("yrM10content").style.animationPlayState = "running"
    document.getElementById("MY10").style.backgroundColor = '#fecd62'
}

function MY11(){
    defaultSubjects()
    document.getElementById("yrM11content").style.display = "block"
    document.getElementById("yrM11content").style.animationPlayState = "running"
    document.getElementById("MY11").style.backgroundColor = '#fecd62'
}

function MY12(){
    defaultSubjects()
    document.getElementById("yrM12content").style.display = "block"
    document.getElementById("yrM12content").style.animationPlayState = "running"
    document.getElementById("MY12").style.backgroundColor = '#fecd62'
}

function nextform() {
    document.getElementById("parentsection").style.opacity = "1"
    document.getElementById("parentsection").style.animationPlayState = "running"
    document.getElementById("Nextbutton").style.display = "none"
    document.getElementById("forma").style.borderBottomRightRadius = "0px";
    document.getElementById("forma").style.borderBottomLeftRadius = "0px";

}


function checkallinputs() {
    const subject = document.getElementById("Subjectinput");
    const subjectinput = subject.value;

    const studentname = document.getElementById("Studentname");
    const studentnameinput = studentname.value;

    const school = document.getElementById("schoolname");
    const schoolinput = school.value;


    if (subjectinput.length>=1) {
        if (studentnameinput.length>=1) {
            if (schoolinput.length>=1) {
                document.getElementById("schoolname").style.border = "none";
                nextform()
            }
            else {
                document.getElementById("schoolname").style.border = "3px red solid";
                document.getElementById("Nextbutton").textContent = "Retry";
            }
            document.getElementById("Studentname").style.border = "none";
        }
        else {
            document.getElementById("Studentname").style.border = "3px red solid";
            document.getElementById("Nextbutton").textContent = "Retry";
        }
        document.getElementById("Subjectinput").style.border = "none";
        

    }

    else {
        document.getElementById("Subjectinput").style.border = "3px red solid";
        document.getElementById("Nextbutton").textContent = "Retry";
        document.getElementById("Nextbutton").style.color = "red";
    }

}

function submit() {
    document.getElementById("schoolname").style.border = "3px solid #00028e";
    document.getElementById("Subjectinput").style.border = "3px solid #00028e";
    document.getElementById("Studentname").style.border = "3px solid #00028e";
    document.getElementById("gradeselect").style.border = "3px solid #00028e";
    document.getElementById("parentname").style.border = "3px solid #00028e";
    document.getElementById("phone").style.border = "3px solid #00028e";
    document.getElementById("email").style.border = "3px solid #00028e";
    document.getElementById("submitbutton").style.border = "3px solid #00028e";
    document.getElementById("submitbutton").style.color = "#00028e";
    document.getElementById("submitbutton").textContent = "Submitted";
    document.getElementById("submitbutton").style.width = "200px";
}

function submitform () {
    const parent = document.getElementById("parentname");
    const parentinput = parent.value;
    const phone = document.getElementById("phone");
    const phoneinput = phone.value;
    const emailval = document.getElementById("email");
    const email = emailval.value;


    if (parentinput.length>=1) {
        if (phoneinput.length>=1) {
            if (ValidateEmail(email) == true) {

                alert("Form Submitted");
                submit();
            }
            else {
                document.getElementById("email").style.border = "3px red solid";
                document.getElementById("submitbutton").textContent = "Retry";
                document.getElementById("submitbutton").style.color = "red";
            }
        }
        else {
            document.getElementById("phone").style.border = "3px red solid";
            document.getElementById("submitbutton").textContent = "Retry";
            document.getElementById("submitbutton").style.color = "red";
        }
    }
    else {
        document.getElementById("parentname").style.border = "3px red solid";
        document.getElementById("submitbutton").textContent = "Retry";
        document.getElementById("submitbutton").style.color = "red";
    }

    

}

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

    if (input.match(validRegex)) { 
         return true;
    } 
    else { 
        return false;
    }
}

function newsletter(){
    const email = document.getElementById("email");
    const emailinput = email.value;

    if (ValidateEmail(emailinput) == true) {
        alert("Email Subscribed");
        document.getElementById("email").style.border = "3px #00028e solid";
        document.getElementById("newslettersubmit").style.border = "3px #00028e solid";
        document.getElementById("newslettersubmit").style.color = "#00028e";
        document.getElementById("newslettersubmit").style.width = "120px";
        document.getElementById("newslettersubmit").textContent = "Submitted";
    }
    else {
        document.getElementById("email").style.border = "3px red solid";
        document.getElementById("newslettersubmit").style.border = "3px red solid";
        document.getElementById("newslettersubmit").style.color = "red";
        document.getElementById("newslettersubmit").textContent = "Retry";
    }
}