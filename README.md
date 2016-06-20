# kontonummer.js
Kontonummer.js är ett bibliotek för att kontrollera och validera kontonummer för svenska banker. Biblioteket kan användas för att ta reda på vilken bank ett kontonummer tillhör, samt om kontonumret valideras som giltigt.

Bibliotekets parserings- och valideringsregler bygger på dessa dokument:
* [Bankernas kontonummer](https://www.bankgirot.se/globalassets/dokument/anvandarmanualer/bankernaskontonummeruppbyggnad_anvandarmanual_sv.pdf) (Bankgirot)
* [Förteckning av clering- och bankkontonummer](https://www.nordea.se/Images/39-112644/F%C3%B6rteckning%20clearing-%20och%20bankkontonummer.pdf) (Nordea)

Målsättningen är att stödja samtliga banker vilka är verksamma i Sverige. För närvarande stöds följande banker:
* Amfa Bank
* Avanza Bank
* BlueStep Finans
* BNP
* Citibank
* Danske Bank
* DnB Bank
* Ekobanken
* Erik Penser Bankaktiebolag
* Forex Bank
* Handelsbanken
* ICA Banken
* IKANO Banken
* JAK Medlemsbank
* Landshypotek
* Lån och Spar Bank Sverige
* Länsförsäkringar Bank
* Marginalen Bank
* Nordax Bank
* Nordea
* Nordnet Bank
* Resurs Bank
* Riksgälden
* Royal Bank of Scotland
* Santander Consumer Bank
* SBAB
* SEB
* Skandiabanken
* Sparbanken Syd
* Swedbank
* Ålandsbanken
 
# Demo
Ett demo finns tillgängligt här: [http://jop.io/projects/kontonummer-js](http://jop.io/projects/kontonummer-js)

# Installation
```javascript
<script src="kontonummer.min.js"></script>
```

# Användning
```javascript
var result = kontonummer('9420, 417 23 85');
console.log(result);

/* Skriver ut följande objekt till konsolen:

{
  bank_name: "Forex Bank",
  clearing_number: "9420", 
  account_number: "4172385"
}
*/
```
```javascript
var result = kontonummer('123456789');
console.log(result); // false
```

# Uppdateringar
* 2016-06-18: Adderade Riksgälden

# Licens
Kontonummer.js omfattas av licensformen [MIT](https://opensource.org/licenses/MIT "The MIT License"). Varsågod!
