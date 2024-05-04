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



