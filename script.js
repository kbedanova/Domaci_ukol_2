//domácí úkol číslo 2
const jmeno = prompt("Zadej své křestní jmeno bez diakritiky.")
const prijmeni = prompt("Zadej své přijmení bez diakritiky")
const jmenoMale = jmeno.toLowerCase()
const prijmeniMale = prijmeni.toLowerCase()
//console.log(jmenoMale)

const jmenoMaleEmail = jmenoMale.trim()
const prijmeniMaleEmail = prijmeniMale.trim()
//console.log(jmenoEmail);
//console.log(prijmeniEmail)

const jmenoMaleEmailVyrez = jmenoMaleEmail.slice(0,3)
const prijmeniMaleEmailVyrez = prijmeniMaleEmail.slice(0,5)
const domena = "@fit.cvut.cz"

document.body.innerHTML = `
<p>Vaše nová emailová adresa je: ${prijmeniMaleEmailVyrez}${jmenoMaleEmailVyrez}${domena}</p>
`

