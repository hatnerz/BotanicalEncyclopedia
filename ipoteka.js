/// 2.7

let start = 1000000;
let kredit = start;
let p = 0.1;
let years = 5;
let perepl;
for(let i = 0; i<years; i++)
{
    kredit+=kredit*0.1;
}
perepl = kredit-start;
document.getElementById("page__kredit").textContent="Переплата по кредиту: " + String(perepl);