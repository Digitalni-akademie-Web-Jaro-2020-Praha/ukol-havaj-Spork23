let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const trip = (ideme) => {
  if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
    console.log("Možete íst na výlet, jupí, balte kufre :D! Obe máte dosť nasporené! ");
  }
  else if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory < 50000 && osoba2.uspory >= 50000) {
    console.log(`Možete íst na výlet, jupí, balte kufre :D!.
     Ale pozor, ${osoba1.jmeno} musí po príchode doplatiť ešte ${osoba2.jmeno} ${50000 - osoba1.uspory} Kčs. `);
  }
  else if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory >= 50000 && osoba2.uspory < 50000) {
    console.log(`Možete íst na výlet, jupí, balte kufre :D!.
     Ale pozor, ${osoba2.jmeno} musí po príchode doplatiť ešte ${osoba1.jmeno} ${50000 - osoba2.uspory} Kčs. `);
  }
  else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory < 50000 && osoba2.uspory >= 50000) {
    console.log(`Ešte trochu pošetrite. ${osoba1.jmeno}, musíš ešte našetriť ${50000 - osoba1.uspory} Kčs.`)
  }
  else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory >= 50000 && osoba2.uspory < 50000) {
    console.log(`Ešte trochu pošetrite. ${osoba2.jmeno}, musíš ešte našetriť ${50000 - osoba2.uspory} Kčs.`)
  }
  else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory < 50000 && osoba2.uspory < 50000) {
    console.log(`Ešte obe trochu pošetrite. ${osoba1.jmeno}, musíš ešte našetriť ${50000 - osoba1.uspory} Kčs. A ty ${osoba2.jmeno}, ty musíš našetriť ${50000 - osoba2.uspory} Kčs.`)
  }
}

//viem, že mi tam sklonovanie nepasuje resp karolíne miesto karolíny, ale nevedela som aku tú vetu inak postavit.