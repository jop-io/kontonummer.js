class Kontonummer {
    
    constructor(accountNumber)
    {
        this.banks = [
            { name: 'Amfa Bank',               type: 1, comment: 2, iban: 966, regex: /^966[0-9]{8}$/ },
            { name: 'Avanza Bank',             type: 1, comment: 2, iban: 955, regex: /^95[5-6][0-9]{8}$/ },
            { name: 'BlueStep Bank',           type: 1, comment: 1, iban: !1,  regex: /^968[0-9]{8}$/ },
            { name: 'BNP Paribas',             type: 1, comment: 2, iban: 947, regex: /^947[0-9]{8}$/ },
            { name: 'Citibank',                type: 1, comment: 2, iban: 904, regex: /^904[0-9]{8}$/ },
            { name: 'Danske Bank',             type: 1, comment: 1, iban: 120, regex: /^(12|13|24)[0-9]{9}$/ },
            { name: 'DNB Bank',                type: 1, comment: 2, iban: 919, regex: /^(919|926)[0-9]{8}$/ },
            { name: 'Ekobanken',               type: 1, comment: 2, iban: !1,  regex: /^970[0-9]{8}$/ },
            { name: 'Erik Penser',             type: 1, comment: 2, iban: 959, regex: /^959[0-9]{8}$/ },
            { name: 'Forex Bank',              type: 1, comment: 1, iban: 940, regex: /^94[0-4][0-9]{8}$/ },
            { name: 'ICA Banken',              type: 1, comment: 1, iban: 927, regex: /^927[0-9]{8}$/ },
            { name: 'IKANO Bank',              type: 1, comment: 1, iban: 917, regex: /^917[0-9]{8}$/ },
            { name: 'JAK Medlemsbank',         type: 1, comment: 2, iban: !1,  regex: /^967[0-9]{8}$/ },
            { name: 'Landshypotek',            type: 1, comment: 2, iban: 939, regex: /^939[0-9]{8}$/ },
            { name: 'Lån & Spar Bank',         type: 1, comment: 1, iban: 963, regex: /^963[0-9]{8}$/ },
            { name: 'Länsförsäkringar Bank',   type: 1, comment: 1, iban: 902, regex: /^(340|906)[0-9]{8}$/ },
            { name: 'Länsförsäkringar Bank',   type: 1, comment: 2, iban: 902, regex: /^902[0-9]{8}$/ },
            { name: 'Marginalen Bank',         type: 1, comment: 1, iban: 923, regex: /^923[0-9]{8}$/ },
            { name: 'MedMera Bank',            type: 1, comment: 2, iban: 965, regex: /^965[0-9]{8}$/ },
            { name: 'Nordax Bank',             type: 1, comment: 2, iban: 964, regex: /^964[0-9]{8}$/ },
            { name: 'Nordea',                  type: 1, comment: 1, iban: 300, regex: /^(?!3300|3782)(1[1456789][0-9]{2}|20[0-9]{2}|3[0-3][0-9]{2}|34[1-9][0-9]|3[5-9][0-9]{2})[0-9]{7}$/ },
            // { name: 'Nordea',                  type: 1, comment: 1, iban: 300, regex: /^(1[1456789][0-9]{2}|20[0-9]{2}|3[0-3][0-9]{2}|34[1-9][0-9]|3[5-9][0-9]{2})(?<!3300|3782)[0-9]{7}$/ },
            { name: 'Nordea',                  type: 1, comment: 2, iban: 300, regex: /^4[0-9]{10}$/ },
            { name: 'Nordnet Bank',            type: 1, comment: 2, iban: 910, regex: /^910[0-9]{8}$/ },
            { name: 'Resurs Bank',             type: 1, comment: 1, iban: 928, regex: /^928[0-9]{8}$/ },
            { name: 'Riksgälden',              type: 1, comment: 2, iban: !1,  regex: /^988[0-9]{8}$/ },
            { name: 'Santander Consumer Bank', type: 1, comment: 1, iban: 945, regex: /^946[0-9]{8}$/ },
            { name: 'SBAB',                    type: 1, comment: 1, iban: !1,  regex: /^925[0-9]{8}$/ },
            { name: 'SEB',                     type: 1, comment: 1, iban: 500, regex: /^(5[0-9]{3}|912[0-4]|91[3-4][0-9])[0-9]{7}$/ },
            { name: 'Skandiabanken',           type: 1, comment: 2, iban: 915, regex: /^91[5-6][0-9]{8}$/ },
            { name: 'Swedbank',                type: 1, comment: 1, iban: 800, regex: /^7[0-9]{10}$/ },
            { name: 'Ålandsbanken',            type: 1, comment: 2, iban: 230, regex: /^23[0-9]{9}$/ },
            { name: 'Danske Bank',             type: 2, comment: 1, iban: 120, regex: /^918[0-9]{11}$/ },
            { name: 'Handelsbanken',           type: 2, comment: 2, iban: 600, regex: /^6[0-9]{12}$/ },
            { name: 'Plusgirot',               type: 2, comment: 3, iban: 950, regex: /^(95[0-4]|996)[0-9]{6,11}$/ },
            { name: 'Nordea',                  type: 2, comment: 1, iban: 300, regex: /^(3300|3782)[0-9]{10}$/ },
            { name: 'Riksgälden',              type: 2, comment: 1, iban: !1,  regex: /^989[0-9]{11}$/ },
            { name: 'Sparbanken Syd',          type: 2, comment: 1, iban: 957, regex: /^957[0-9]{11}$/ },
            { name: 'Swedbank',                type: 2, comment: 3, iban: 800, regex: /^8[0-9]{9,14}$/ },
            { name: 'Swedbank',                type: 2, comment: 1, iban: 800, regex: /^93[0-4][0-9]{11}$/ }
        ];
        
        if (accountNumber)
        {
            this.check(accountNumber);
        }
    }
    
    support()
    {
        const tmp = {};
        for (let i in this.banks) {
            let b = this.banks[i];
            tmp[b.name] = b.iban === false ? false : true;
        }
        const ordered = {};
        Object.keys(tmp).sort().forEach(function(key) {
            ordered[key] = tmp[key];
        });
        
        console.log(ordered);
        
    }
    
    validate(data)
    {
        this.bank   = null;
        this.input  = data.toString().toUpperCase().replace(/[^A-Z0-9]/g, '');
        let isIBAN  = this.isIBAN();
        this.IBANid = isIBAN ? window.parseInt(this.input.substr(4,3),10) : null;
        this.num    = isIBAN ? window.parseInt(this.input.substr(7).replace(/\D/g, ''), 10).toString() : 
                      this.input.replace(/\D/g, '');
        
        if (this.num.length < 10)
        {
            return false;
        }
        
        for (var i in this.banks)
        {
            if (this.banks[i].regex.test(this.num))
            {
                this.bank = this.banks[i];
                break;
            }
        }
        
        return this.bank === null || (isIBAN && this.IBANid !== this.bank.iban) ? 
            false : 
            this.doValidation();
    }
    
    doValidation()
    {   
        this.clearing = this.num.substr(0,this.num.charAt(0) === "8" ? 5 : 4);
        this.number =
            // Samtliga konton av typ 1
            this.bank.type === 1 ? this.num.substr(-7):
            // Handelsbankens koton av typ 2
            this.bank.type === 2 && this.bank.comment === 2 ? this.num.substr(-9):
            // Swedbanks konton av typ 2 
            this.bank.type === 2 && this.bank.comment === 3 && this.num.charAt(0) === "8" ? this.num.substr(5):
            // Plusgirots konton av typ 2
            this.bank.type === 2 && this.bank.comment === 3 && this.num.charAt(0) === "9" ? this.num.substr(4):
            // Resterande konton av typ 2
            this.num.substr(-10);
        
        return !this.modCalc() ? false : {
            bankName:       this.bank.name,
            clearingNumber: this.clearing,
            accountNumber:  this.number
        };
    }
    
    isIBAN()
    {
        if (!/^SE[0-9]{22}$/.test(this.input))
        {
            return false;
        }
        let iban = (this.input.substr(4)+this.input.substr(0,4)).replace('SE', '2814'),
            mod = null, 
            num = null;
    
        while (iban.length > 0)
        {
            num = mod === null ? iban.substr(0, 9) : iban.substr(0, 9 - mod.length);
            mod = mod === null ? (num % 97).toString() : ((mod + num) % 97).toString();
            iban = iban.substr(num.length);
        }
        return parseInt(mod, 10) === 1;
    }
    
    modCalc()
    {
        if (this.bank.type === 1 && this.bank.comment === 1)
        {
            this.modNum = (this.clearing+this.number).substr(-10);
            return this.mod11();
        }
        else if (this.bank.type === 1 && this.bank.comment === 2)
        {
            this.modNum = this.clearing+this.number;
            return this.mod11();
        }
        else if (this.bank.type === 2 && this.bank.comment === 2)
        {
            this.modNum = this.number;
            return this.mod11();
        }
        else
        {
            this.modNum = this.number;
            return this.mod10();
        }
    }
    
    mod10()
    {
        let len = this.modNum.length, 
            bit = 1, 
            sum = 0, 
            val = 0, 
            arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        while (len)
        {
            val = parseInt(this.modNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }
        return sum && sum % 10 === 0;
    }
    
    mod11()
    {
        let len = this.modNum.length, 
            sum = 0, 
            val = 0, 
            weights = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            arr = weights.splice(weights.length-len, weights.length-(weights.length-len));
        while (len)
        {
            val = parseInt(this.modNum.charAt(--len), 10);
            sum += arr[len] * val;
        }
        return sum && sum % 11 === 0;
    }
}

var kontonummer = new Kontonummer();

//// TYP 1
//console.log(kontonummer.check("94204172385"));
//console.log(kontonummer.check("9252, 0782455"));
//console.log(kontonummer.check("32560122014"));
//
//// TYP 2
//console.log(kontonummer.check("8304-8, 230477044"));
//console.log(kontonummer.check("8299-1, 2814958514"));
//console.log(kontonummer.check("6189834435918"));


console.log(kontonummer.validate("8304-8, 230477044"));
console.log(kontonummer.validate("SE5780000829902814958514"));
console.log(kontonummer.validate("94204172385"));
console.log(kontonummer.validate("SE4250000000055651015566"));
console.log(kontonummer.validate("96676543216"));
