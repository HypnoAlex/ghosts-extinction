let fa = 10000;
let sa = fa * 1.5;
let la = fa * 2;
let scoremult = 1;
let relicmult = 1;

function pocText() {
    let score = 0;
    let esc = Math.round(575 * relicmult * 150 * scoremult);
    document.getElementById(`hive1`).innerHTML = `Hive 1: ${Math.round((score += fa / 10) * (scoremult * relicmult))}`;
    document.getElementById(`optimal1`).innerHTML = `Optimal 1: ${Math.round(fa * (relicmult * scoremult))}`;
    document.getElementById(`hive2`).innerHTML = `Hive 2: ${Math.round((score += fa) * (scoremult * relicmult))}`;
    document.getElementById(`hive3`).innerHTML = `Hive 3: ${Math.round((score += fa) * (scoremult * relicmult))}`;
    document.getElementById(`hive4`).innerHTML = `Hive 4: ${Math.round((score += fa) * (scoremult * relicmult))}`;
    document.getElementById(`hive5`).innerHTML = `Barrier Hive 1: ${Math.round((score += fa) * (scoremult * relicmult))}`;
    document.getElementById(`optimal2`).innerHTML = `Optimal 2: ${Math.round(sa * (relicmult * scoremult))}`;
    document.getElementById(`hive6`).innerHTML = `Hive 6: ${Math.round((score += sa) * (scoremult * relicmult))}`;
    document.getElementById(`hive7`).innerHTML = `Hive 7: ${Math.round((score += sa) * (scoremult * relicmult))}`;
    document.getElementById(`hive8`).innerHTML = `Hive 8: ${Math.round((score += sa) * (scoremult * relicmult))}`;
    document.getElementById(`hive9`).innerHTML = `Barrier Hive 2: ${Math.round((score += sa) * (scoremult * relicmult))}`;
    document.getElementById(`optimal3`).innerHTML = `Optimal 3: ${Math.round(la * (relicmult * scoremult))}`;
    document.getElementById(`hive10`).innerHTML = `Hive 10: ${Math.round((score += la) * (scoremult * relicmult))}`;
    document.getElementById(`hive11`).innerHTML = `Hive 11: ${Math.round((score += la) * (scoremult * relicmult))}`;
    document.getElementById(`hive12`).innerHTML = `Hive 12: ${Math.round((score += la) * (scoremult * relicmult))}`;
    document.getElementById(`hive13`).innerHTML = `Hive 13: ${Math.round((score += la) * (scoremult * relicmult))}`;
    document.getElementById(`hive14`).innerHTML = `Hive 14: ${Math.round((score += la) * (scoremult * relicmult))}`;
    document.getElementById(`escape`).innerHTML = `Estimated score gain from 2m30s escape: ${esc}`;
    document.getElementById(`final`).innerHTML = `Final score: ${Math.round(score * (scoremult * relicmult) + esc)}`;
}

function processRelic(num) {
    relicmult = 1;
    for (let i = 0; i < num; i++) {
        relicmult += .2;
    }
    document.getElementById("relics").innerHTML = `Relics: ${num}`;
    pocText();
}

function casual() {
    scoremult = 0.75;
    document.getElementById("mode").innerHTML = `Mode: Casual`;
    pocText();
}

function core() {
    scoremult = 1;
    document.getElementById("mode").innerHTML = `Mode: Core`;
    pocText();
}

function hardcore() {
    scoremult = 1.25;
    document.getElementById("mode").innerHTML = `Mode: Hardcore`;
    pocText();
}