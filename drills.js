let drill = 4500;
let personal = 4000;
let challenge = 1500;
let fa = 1;
let sa = 1.5;
let la = 2;
let test = 0;
let scoremult = 1;
let relicmult = 1;

function showText() {
    let score = 0;
    document.getElementById(`drill1`).innerHTML = `Drill Protection: ${drill * fa * scoremult}`;
    document.getElementById(`pskill1`).innerHTML = `Personal Skill: ${personal * fa * scoremult}`;
    document.getElementById(`challenge1`).innerHTML = `Challenge Complete: ${challenge * fa * scoremult}`;
    document.getElementById(`relicbonus1`).innerHTML = `Relic Bonus: ${test * fa * scoremult}`;
    document.getElementById(`optimal1`).innerHTML = `Relic Bonus: ${(drill + personal + challenge + test) * fa * scoremult}`;
    document.getElementById(`drillfail1`).innerHTML = `If the drill score went down to 0, your max score would be ${Math.round((personal + challenge) * relicmult * fa * scoremult)}.`;
    document.getElementById(`challengefail1`).innerHTML = `If you fail a challenge, your max score would be ${Math.round((drill + personal) * relicmult) * fa * scoremult}.`;
    
    document.getElementById(`drill2`).innerHTML = `Drill Protection: ${Math.floor(drill * sa * scoremult)}`;
    document.getElementById(`pskill2`).innerHTML = `Personal Skill: ${Math.floor(personal * sa * scoremult)}`;
    document.getElementById(`challenge2`).innerHTML = `Challenge Complete: ${Math.floor(challenge * sa * scoremult)}`;
    document.getElementById(`relicbonus2`).innerHTML = `Relic Bonus: ${Math.floor(test * sa * scoremult)}`;
    document.getElementById(`optimal2`).innerHTML = `Relic Bonus: ${Math.floor((drill + personal + challenge) + test) * sa * scoremult}`;
    document.getElementById(`drillfail2`).innerHTML = `If the drill score went down to 0, your max score would be ${Math.round((personal + challenge) * relicmult * sa * scoremult)}.`;
    document.getElementById(`challengefail2`).innerHTML = `If you fail a challenge, your max score would be ${Math.round((drill + personal) * relicmult) * sa * scoremult}.`;  

    document.getElementById(`drill3`).innerHTML = `Drill Protection: ${Math.floor(drill * la * scoremult)}`;
    document.getElementById(`pskill3`).innerHTML = `Personal Skill: ${Math.floor(personal * la * scoremult)}`;
    document.getElementById(`challenge3`).innerHTML = `Challenge Complete: ${Math.floor(challenge * la * scoremult)}`;
    document.getElementById(`relicbonus3`).innerHTML = `Relic Bonus: ${Math.floor(test * la * scoremult)}`;
    document.getElementById(`optimal3`).innerHTML = `Relic Bonus: ${Math.floor((drill + personal + challenge) + test) * la * scoremult}`;
    document.getElementById(`drillfail3`).innerHTML = `If the drill score went down to 0, your max score would be ${Math.round((personal + challenge) * relicmult * la * scoremult)}.`;
    document.getElementById(`challengefail3`).innerHTML = `If you fail a challenge, your max score would be ${Math.round((drill + personal) * relicmult) * la * scoremult}.`;  
}

function processRelic(num) {
    test = 0;
    relicmult = 1;
    for (let i = 0; i < num; i++) {
        relicmult += .2;
        test += 2000;
    }
    document.getElementById("relics").innerHTML = `Relics: ${num}`;
    showText();
}

function casual() {
    scoremult = 0.75;
    document.getElementById("mode").innerHTML = `Mode: Casual`;
    showText();
}

function core() {
    scoremult = 1;
    document.getElementById("mode").innerHTML = `Mode: Core`;
    showText();
}

function hardcore() {
    scoremult = 1.25;
    document.getElementById("mode").innerHTML = `Mode: Hardcore`;
    showText();
}