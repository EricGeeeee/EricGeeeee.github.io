var sound1 = new Audio('sounds/victory.mp3');
var sound2 = new Audio('sounds/defeat.mp3');
var sound3 = new Audio('sounds/NO.m4a');
var sound4 = new Audio('sounds/NOO.m4a');
var sound5 = new Audio('sounds/YES.m4a');
var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}
    
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}
    
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}
    
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}    
    
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}    
    
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}        

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}        

else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
	score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}            

else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}            

else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}            

else if (ans===12){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound4.play("NOO.m4a")
	document.searchImage.src = "pictures/no.gif"
        
    }
    document.view.qscore.value=score
}            

else if (ans===13){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	sound5.play("YES.m4a")
	document.searchImage.src = "pictures/solo.gif"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
	sound3.play("NO.m4a")
	document.searchImage.src = "pictures/noo.gif"
        
    }
    document.view.qscore.value=score
}            
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What was the main reason why Grand Admiral Thrawn wanted to reserect the Galactic Empire after Return of the Jedi(ep.6)? \na)To avange Lord Sidious \nb)To crush the New Republic \nc)To retaliate against the Rebel Alliance \nd)To Fight the Yuuzhan Vong";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these was not a name Sheev Palpatine was refered to as? \na)Govoner Palpatine \nb)Darth Sidious \nc)Emperor Palpatine \nd)Lord Sidious";
    document.view.qans.value=""
}
    
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was Obi-Wan Kenobi's master? \na)Yoda \nb)Mace Windu \nc)Qui-Gon Jin \nd)Syfo Dias";
    document.view.qans.value=""
}    
    
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What did Darth Bane create? \na)Sith Credo \nb)Rule of two \nc)DarkSaber \nd)Mass Shadow Generator";
    document.view.qans.value=""
}    
    
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the Dark Lord of hunger? \na)Darth Malek \nb)Darth Vader \nc)Lord Sideous \nd)Darth Nihilus";
    document.view.qans.value=""
}       
    
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the Battle of Yavin 4? \na)5ABY \nb)19ABY \nc)0BBY \nd)19BBY";
    document.view.qans.value=""
}       
    
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was Syfo Dias killed? \na)32BBY \nb)19BBY \nc)42ABY \nd)41BBY";
    document.view.qans.value=""
}           
    
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="During the Clone Wars, who was Anakin's padawan? \na)Luminara Unduli \nb)Barriss Offee \nc)Assajj Ventress \nd)Ahsoka Tano";
    document.view.qans.value=""
}           

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the general of Wolffpack? \na)Commander Wolffe \nb)CT-3636 \nc)Plo Koon \nd)Jek-14";
    document.view.qans.value=""
}           

else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was Luke's pilot friend who joined the Rebel Alliance before he did? \na)Biggs Darklighter \nb)Wedge Antilles \nc)Jek Porkins \nd)Garven Dreis";
    document.view.qans.value=""
}        

else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="From which planet was Padme Amidela from? \na)Corellia \nb)Naboo \nc)Alderaan \nd)Coruscant";
    document.view.qans.value=""
}        

else if (i===12){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the main cause for the Mandalorian civil war? \na)The murder of Duchess Satine \nb)Pre Vizsla becoming Mand'alor \nc)Maul becoming Mand'alor \nd)Republic intervention in Mandalore";
    document.view.qans.value=""
}        

else if (i===13){ 
	document.view.qnum.value=i;	
	document.view.question.value ="The step-father of Princess Leia? \na)Tsar Nicholas \nb)Leif Erikson \nc)Clovis II \nd)Bail Organa";
    document.view.qans.value=""
}           
    
    
else if (i===14){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
if (score>=11) {
	sound1.play("victory.mp3")
	document.searchImage.src = "pictures/fun.gif"
}
else {
	sound2.play("defeat.mp3")
	document.searchImage.src = "pictures/yoda.gif"
	alert("You have achieved under 80%, press the reset button to redo the trivia.");
}
	}
	i++; 
}
function myFunction() {
	location.reload();
}
