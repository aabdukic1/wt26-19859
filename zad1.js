function procijeniVrijemeCekanjaPacijenta(minuti) {
    const P1 = 15;
    const P2 = 45;
  
    if (minuti <= P1) {
      return "Optimalno";
    } else if (minuti <= P2) {
      return "Umjereno";
    } else {
      return "Kritično";
    }
  }
  
  const unos = prompt("Unesite vrijeme čekanja pacijenta u minutama:");
  
  if (unos === null) {
    console.log("Unos je otkazan.");
  } else if(unos === "") {  console.error("Greška: Niste unijeli nikakvu vrijednost.");}
  
   else {
  
      if (isNaN(unos)) {
        console.error("Greška: Unesena vrijednost nije broj.");
      } else if (unos < 0) {
        console.error("Greška: Broj minuta ne može biti negativan.");
      } else {
        const kategorija = procijeniVrijemeCekanjaPacijenta(unos);
        alert(`Vrijeme čekanja: ${unos} min. Kategorija: ${kategorija}`);
      }
    }
  