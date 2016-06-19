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
        var n = number.replace(/\D/g, ''), i, b, 
        banks = [[
            'Avanza Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(95[5-6][0-9])([0-9]{7})$/
        ],[
            'Amfa Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(966[0-9])([0-9]{7})$/
        ],[
            'BlueStep Finans',
            'Bankkonto',
            [4,7,10,11],
            /^(968[0-9])([0-9]{7})$/
        ],[
            'BNP',
            'Bankkonto',
            [4,7,11,11],
            /^(947[0-9])([0-9]{7})$/
        ],[
            'Citibank',
            'Bankkonto',
            [4,7,11,11],
            /^(904[0-9])([0-9]{7})$/
        ],[
            'Danske Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(1[2-3][0-9][0-9]|24[0-9][0-9])([0-9]{7})$/
        ],[
            'Danske Bank',
            'Bankkonto',
            [4,10,10,10],
            /^(918[0-9])([0-9]{10})$/
        ],[
            'DnB Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(919[0-9]|926[0-9])([0-9]{7})$/
        ],[
            'Ekobanken',
            'Bankkonto',
            [4,7,11,11],
            /^(970[0-9])([0-9]{8})$/
        ],[
            'Erik Penser Bankaktiebolag',
            'Bankkonto',
            [4,7,11,11],
            /^(959[0-9])([0-9]{7})$/
        ],[
            'Forex Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(94[0-4][0-9])([0-9]{7})$/
        ],[
            'Handelsbanken',
            'Bankkonto',
            [4,9,9,11],
            /^(6[0-9][0-9][0-9])([0-9]{9})$/
        ],[
            'ICA Banken',
            'Bankkonto',
            [4,7,10,11],
            /^(927[0-9])([0-9]{7})$/
        ],[
            'IKANO Banken',
            'Bankkonto',
            [4,7,10,11],
            /^(917[0-9])([0-9]{7})$/
        ],[
            'JAK Medlemsbank',
            'Bankkonto',
            [4,7,11,11],
            /^(967[0-9])([0-9]{8})$/
        ],[
            'Landshypotek',
            'Bankkonto',
            [4,7,11,11],
            /^(939[0-9])([0-9]{7})$/
        ],[
            'Lån och Spar Bank Sverige',
            'Bankkonto',
            [4,7,10,11],
            /^(963[0-9])([0-9]{7})$/
        ],[
            'Länsförsäkringar Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(340[0-9]|906[0-9])([0-9]{7})$/
        ],[
            'Länsförsäkringar Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(902[0-9])([0-9]{7})$/
        ],[
            'Marginalen Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(923[0-9])([0-9]{7})$/
        ],[
            'Nordax Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(964[0-9])([0-9]{7})$/
        ],[
            'Nordea',
            'Bankkonto',
            [4,7,10,11],
            /^(11[0-9][0-9]|1[4-9][0-9][0-9]|20[0-9][0-9]|30[0-9][0-9]|330[1-9]|33[1-9][0-9]|34[1-9][0-9]|3[5-9][0-9][0-9])([0-9]{7})$/
        ],[
            'Nordea',
            'Bankkonto',
            [4,7,11,11],
            /^(4[0-9][0-9][0-9])([0-9]{7})$/
        ],[
            'Nordea',
            'Personkonto',
            [4,10,10,10],
            /^(3300|3782)([0-9]{10})$/
        ],[
            'Nordea',
            'Personkonto',
            [0,10,10,10],
            /^([0-9][0-9])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])([0-9]{4})$/
        ],[
            'Nordnet Bank',
            'Bankkonto',
            [4,7,11,11],
            /^(910[0-9])([0-9]{7})$/
        ],[
            'Resurs Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(928[0-9])([0-9]{7})$/
        ],[
            'Riksgälden',
            'Bankkonto',
            [4,10,10,10],
            /^(989[0-9])([0-9]{10})$/
        ],[
            'Royal Bank of Scotland',
            'Bankkonto',
            [4,7,11,11],
            /^(909[0-9])([0-9]{7})$/
        ],[
            'Santander Consumer Bank',
            'Bankkonto',
            [4,7,10,11],
            /^(946[0-9])([0-9]{7})$/
        ],[
            'SBAB',
            'Bankkonto',
            [4,7,10,11],
            /^(925[0-9])([0-9]{7})$/
        ],[
            'SEB',
            'Bankkonto',
            [4,7,10,11],
            /^(5[0-9][0-9][0-9]|912[0-4]|91[3-4][0-9])([0-9]{7})$/
        ],[
            'Skandiabanken',
            'Bankkonto',
            [4,7,11,11],
            /^(91[5-6][0-9])([0-9]{7})$/
        ],[
            'Sparbanken Syd',
            'Bankkonto',
            [4,10,10,10],
            /^(957[0-9])([0-9]{10})$/
        ],[
            'Swedbank',
            'Bankkonto',
            [4,7,10,11],
            /^(7[0-9][0-9][0-9])([0-9]{7})$/
        ],[
            'Swedbank',
            'Bankkonto',
            [4,10,10,10],
            /^(93[0-2][0-9])([0-9]{10})$/
        ],[
            'Swedbank',
            'Bankkonto',
            [5,10,10,10],
            /^(8[0-9]{4})([0-9]{10})$/
        ],[
            'Ålandsbanken',
            'Bankkonto',
            [4,7,11,11],
            /^(23[0-9][0-9])([0-9]{7})$/
        ]];
    
        for (i in banks) {
            b = banks[i];
            if (b[3].test(n) && 
                ((b[2][3] === 11 && mod11(n.substr(n.length-b[2][2], b[2][2]))) || 
                (b[2][3] === 10 && mod10(n.substr(n.length-b[2][2], b[2][2]))))) {
                return {
                    bank_name       : b[0],
                    account_type    : b[1],
                    clearing_number : n.substr(0, b[2][0]),
                    account_number  : n.substr(b[2][0], b[2][1])
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
        var len = number.length, sum = 0, val, weights = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        var arr = weights.splice(weights.length-len, weights.length-(weights.length-len));
        while (len) {
            val = parseInt(number.charAt(--len), 10);
            sum += arr[len] * val;
        }
        return sum && sum % 11 === 0;
    };
}(window));
