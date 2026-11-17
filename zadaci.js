//Zad1
function dodajDva(broj) {
    return broj + 2;
}

function jednom(callback) {
    let pozvano = false;
    let rezultat;
    
    return function(argument) {
        if (!pozvano) {
            rezultat = callback(argument);
            pozvano = true;
        }
        return rezultat;
    };
}


const jednomFunkcija = jednom(dodajDva);
console.log(jednomFunkcija(4));    
console.log(jednomFunkcija(10));   
console.log(jednomFunkcija(9001)); 

//Zad2
function napraviProfil() {
    let profil = { naziv: "Početni" };
    return {
      pregled: function() { return profil; },
      postaviNaziv: function(n) { profil.naziv = n; }
    };
  }
const mojProfil = napraviProfil();
const uvid = mojProfil.pregled();
uvid.naziv = "Hakovano!";
console.log(mojProfil.pregled());

function napraviProfil() {
    let profil = { naziv: "Početni" };
    return {
      pregled: function() { return { naziv: profil.naziv };},
      postaviNaziv: function(n) { profil.naziv = n; }
    };
  }
  function napraviProfil() {
    let profil = { 
      naziv: "Početni",
      id: 1 
    };
    
    return {
      pregled: function() { 
        return { naziv: profil.naziv, id: profil.id }; 
      },
      postaviNaziv: function(n) { profil.naziv = n; }
    };
  }

//Zad3
  function upravljacResursima(pocetnaKolicina) {

    let raspolozivo =pocetnaKolicina;
  
    return {
      potrosi: function(kolicina) {
    
        if (kolicina < 0 || kolicina > raspolozivo) {
          return false; 
        }
        
        raspolozivo -= kolicina;
        return true; 
      },
      
      preostalo: function() {
        return raspolozivo; 
      }
    };
  }
  

const A = upravljacResursima(100);
console.log(A.preostalo());
A.potrosi(30);
console.log(A.preostalo());
  
A.potrosi(100);
console.log(A.preostalo());
  