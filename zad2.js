function ispisiPlan(n, k) {
    for (let i = 1; i <= n; i++) {
      console.log(`Ponavljanje ${i}: Obrada paketa`);
  

      if (i % k === 0 && i !== n) {
        console.log(`PAUZA`);
      }
    }
  }
  
  const n = prompt("Unesite ukupan broj ponavljanja (n):");
  const k = prompt("Unesite interval pauze (k):");

  if (n > 0 && k > 0) {
    ispisiPlan(n, k);
  } else {
    console.log("Greška: Unesite pozitivne brojeve veće od 0.");
  }