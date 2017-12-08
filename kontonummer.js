/**
 * Kontonummer.js är ett bibliotek för att kontroller och validera svenska 
 * bankkontonummer. Biblioteket kan användas för att ta reda på vilken bank ett 
 * kontonummer tillhör, samt om kontonumret valideras som giltigt enligt 
 * bankerns standard.
 * 
 * https://github.com/jop-io/kontonummer.js
 * 
 * Målsättningen är att stödja samtliga banker vilka är verksamma i Sverige. 
 * För närvarande stöds följande banker:
 * 
 *  Amfa Bank, Avanza Bank, BlueStep Finans, BNP, Citibank, Danske Bank, 
 *  DnB Bank, Ekobanken, Erik Penser Bankaktiebolag, Forex Bank, Handelsbanken, 
 *  ICA Banken, IKANO Banken, JAK Medlemsbank, Landshypotek, Lån och Spar Bank 
 *  Sverige, Länsförsäkringar Bank, Marginalen Bank, Nordax Bank, Nordea, 
 *  Nordnet Bank, Resurs Bank, Riksgälden, Royal Bank of Scotland, Santander 
 *  Consumer Bank, SBAB, SEB, Skandiabanken, Sparbanken Syd, Swedbank, 
 *  Ålandsbanken
 * 
 * Licens: MIT
 * Författare: @jop-io, http://jop.io
 */
;(function (window, undefined) {
    "use strict";
    
    /**
     * Kontrollerar och validerar ett bankkontonummer.
     * 
     * @param {String} number Bankkontonummer
     * @returns {Object|Boolean}
     */
    window.kontonummer = function(number) {
        if (typeof number !== 'string') {
            return false;
        }
        var n = number.replace(/\D/g, ''), i, bank, ctrlNum, 
        banks = [{
            name    : 'Avanza Bank',
            regex   : /^(95[5-6][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Amfa Bank',
            regex   : /^(966[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'BlueStep Finans',
            regex   : /^(968[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'BNP',
            regex   : /^(947[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Citibank',
            regex   : /^(904[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Danske Bank',
            regex   : /^(1[2-3][0-9][0-9]|24[0-9][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Danske Bank',
            regex   : /^(918[0-9])([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 4,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'DnB Bank',
            regex   : /^(919[0-9]|926[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Ekobanken',
            regex   : /^(970[0-9])([0-9]{8})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Erik Penser Bankaktiebolag',
            regex   : /^(959[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Forex Bank',
            regex   : /^(94[0-4][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Handelsbanken',
            regex   : /^(6[0-9][0-9][0-9])([0-9]{9})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 9,
                control  : 9
            }
        },{
            name    : 'ICA Banken',
            regex   : /^(927[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'IKANO Banken',
            regex   : /^(917[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'JAK Medlemsbank',
            regex   : /^(967[0-9])([0-9]{8})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Landshypotek',
            regex   : /^(939[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Lån och Spar Bank Sverige',
            regex   : /^(963[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Länsförsäkringar Bank',
            regex   : /^(340[0-9]|906[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Länsförsäkringar Bank',
            regex   : /^(902[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Marginalen Bank',
            regex   : /^(923[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Nordax Bank',
            regex   : /^(964[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Nordea',
            regex   : /^(11[0-9][0-9]|1[4-9][0-9][0-9]|20[0-9][0-9]|3[0-2][0-9][0-9]|330[1-9]|33[1-9][0-9]|34[1-9][0-9]|3[5-9][0-9][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Nordea',
            regex   : /^(4[0-9][0-9][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Nordea',
            regex   : /^(3300|3782)([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 4,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Nordea',
            regex   : /^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])([0-9]{4})$/,
            modulo  : 10,
            lengths : {
                clearing : 0,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Nordnet Bank',
            regex   : /^(910[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Resurs Bank',
            regex   : /^(928[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Riksgälden',
            regex   : /^(989[0-9])([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 4,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Royal Bank of Scotland',
            regex   : /^(909[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Santander Consumer Bank',
            regex   : /^(946[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'SBAB',
            regex   : /^(925[0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'SEB',
            regex   : /^(5[0-9][0-9][0-9]|912[0-4]|91[3-4][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Skandiabanken',
            regex   : /^(91[5-6][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        },{
            name    : 'Sparbanken Syd',
            regex   : /^(957[0-9])([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 4,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Swedbank',
            regex   : /^(7[0-9][0-9][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 10
            }
        },{
            name    : 'Swedbank',
            regex   : /^(93[0-2][0-9])([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 4,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Swedbank',
            regex   : /^(8[0-9]{4})([0-9]{10})$/,
            modulo  : 10,
            lengths : {
                clearing : 5,
                account  : 10,
                control  : 10
            }
        },{
            name    : 'Ålandsbanken',
            regex   : /^(23[0-9][0-9])([0-9]{7})$/,
            modulo  : 11,
            lengths : {
                clearing : 4,
                account  : 7,
                control  : 11
            }
        }];
    
        for (i in banks) {
            bank = banks[i];
            ctrlNum = n.substr(-bank.lengths.control, bank.lengths.control);
            if (bank.regex.test(n) && ((bank.modulo === 11 && mod11(ctrlNum)) || (bank.modulo === 10 && mod10(ctrlNum)))) {
                return {
                    bank_name       : bank.name,
                    clearing_number : n.substr(0, bank.lengths.clearing),
                    account_number  : n.substr(bank.lengths.clearing, bank.lengths.account)
                };
            }
        }
        return false;
    };
    
    /**
     * Stödfunktion för att kontrollera mod10.
     * 
     * @param {String} number Bankkontonummer
     * @returns {Boolean}
     */
    var mod10 = function (number) {
        var len = number.length, bit = 1, sum = 0, val, arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        while (len) {
            val = parseInt(number.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }
        return sum && sum % 10 === 0;
    };
    
    /**
     * Stödfunktion för att kontrollera mod11.
     * 
     * @param {String} number Bankkontonummer
     * @returns {Boolean}
     */
    var mod11 = function (number) {
        var len = number.length, 
            sum = 0, 
            val, 
            weights = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        var arr = weights.splice(weights.length-len, weights.length-(weights.length-len));
        while (len) {
            val = parseInt(number.charAt(--len), 10);
            sum += arr[len] * val;
        }
        return sum && sum % 11 === 0;
    };
}(window));
