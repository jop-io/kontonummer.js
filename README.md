# ⚠️ THIS REPO IS NO LONGER MAINTAINED
I no longer maintain this code.
Please have a look at Svante Bengtson's (much better) implementaion of Kontonummer.js: https://github.com/swantzter/kontonummer

Svante's code is also available as NPM package: https://npmjs.com/package/kontonummer

Why are you still here...? Please go away!

.

.

.

.


## kontonummer.js
Kontonummer.js är ett bibliotek för att kontrollera och validera kontonummer för svenska banker. Biblioteket kan användas för att ta reda på vilken bank ett kontonummer tillhör, samt om kontonumret valideras som giltigt. Målsättningen är att stödja samtliga banker vilka är verksamma i Sverige. För närvarande stöds följande banker:
* Svea Bank
* Avanza Bank
* BlueStep Finans
* BNP Paribas SA.
* Citibank
* Danske Bank
* DNB Bank
* Ekobanken
* Erik Penser
* Forex Bank
* Handelsbanken
* ICA Banken
* IKANO Bank
* JAK Medlemsbank
* Klarna Bank
* Landshypotek
* Lån & Spar Bank Sverige
* Länsförsäkringar Bank
* Marginalen Bank
* MedMera Bank
* Nordax Bank
* Nordea
* Plusgirot
* Nordnet Bank
* Resurs Bank
* Riksgälden
* Santander Consumer Bank
* SBAB
* SEB
* Skandiabanken
* Sparbanken Syd
* Swedbank
* Ålandsbanken

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

# Bra att veta om clearingnummer som börjar med siffran 8 (Swedbank)
1. Clearingnummer som börjar med siffran 8 består av totalt [fem siffror](https://hjalp.swedbank.se/sidhjalp-internetbanken-privat/ordlista/c-h/index.htm#Clearingnummer), till skillnad från alla andra clearingnummer som består av fyra siffror.
2. I sällsynta fall förekommer kontonummer som inte alls kan kontrolleras genom vägning av kontrollsiffror. Dessa är i regel väldigt gamla kontonummer och få till antalet.

# Uppdateringar
* **2019-10-25** (uppdateringar av [Tobbe Lundberg](https://github.com/Tobbe))
  * Adderade Klarna Bank
  * Rättade namn och stavfel på vissa banker
* **2018-05-01**
  * Adderade MedMera Bank
  * Tog bort Royal Bank of Scotland (ej längre verksamma i Sverige)
  * Rättade namn på vissa banker
  * Refaktorerade regexpar för samtliga typer av konton. Dessa är nu både snabbare och mer lättlästa. Bibliotekets storlek minskade från 4,8 KB till 3,4 KB (woohoo!!)
  * Justering av en bugg som felaktigt invaliderade vissa kontonummer från Swedbank och Plusgirot. Tack till Linda Karlsson ([Knowit](http://www.knowit.se)) och Christian Zachariasen ([io7](http://www.io7.net)) som uppmärksammade detta!
* **2017-12-08**
  * Justerade kontroll av vissa clearingnummer för Nordea. Tack till [Staffan Garhammar](https://garhammar.se) som hittade detta!
* **2016-06-18**
  * Adderade Riksgälden

# Licens
Kontonummer.js omfattas av licensformen [MIT](https://opensource.org/licenses/MIT "The MIT License"). Varsågod!
