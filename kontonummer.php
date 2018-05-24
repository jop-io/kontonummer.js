<?php
/**
 * Kontonummer.php är ett bibliotek för att kontrollera och validera kontonummer 
 * för svenska banker. Biblioteket kan användas för att ta reda på vilken bank 
 * ett clearing- eller kontonummer tillhör, samt om kontonumret valideras som 
 * giltigt.
 * 
 * Målsättningen är att stödja samtliga banker vilka är verksamma i Sverige.
 * 
 * @author Jonas Persson
 * @version 2.0
 * @license https://opensource.org/licenses/MIT MIT
 * @link https://github.com/jop-io/kontonummer Github repository
 */
class Kontonummer {
    
    public $banks, $bank, $input, $ibanID, $num, $clearingNumber, $accountNumber, $modNum;
    
    public function __construct()
    {
        $this->banks = [
            ["name" => "Amfa Bank",               "type" => 1, "comment" => 2, "iban" => 966,  "regx" => "/^966([0-9]|[0-9]{8})$/"],
            ["name" => "Avanza Bank",             "type" => 1, "comment" => 2, "iban" => 955,  "regx" => "/^95[5-6]([0-9]|[0-9]{8})$/"],
            ["name" => "BlueStep Bank",           "type" => 1, "comment" => 1, "iban" => false,"regx" => "/^968([0-9]|[0-9]{8})$/"],
            ["name" => "BNP Paribas",             "type" => 1, "comment" => 2, "iban" => 947,  "regx" => "/^947([0-9]|[0-9]{8})$/"],
            ["name" => "Citibank",                "type" => 1, "comment" => 2, "iban" => 904,  "regx" => "/^904([0-9]|[0-9]{8})$/"],
            ["name" => "Danske Bank",             "type" => 1, "comment" => 1, "iban" => 120,  "regx" => "/^(12|13|24)([0-9]{2}|[0-9]{9})$/"],
            ["name" => "DNB Bank",                "type" => 1, "comment" => 2, "iban" => 919,  "regx" => "/^(919|926)([0-9]|[0-9]{8})$/"],
            ["name" => "Ekobanken",               "type" => 1, "comment" => 2, "iban" => false,"regx" => "/^970([0-9]|[0-9]{8})$/"],
            ["name" => "Erik Penser",             "type" => 1, "comment" => 2, "iban" => 959,  "regx" => "/^959([0-9]|[0-9]{8})$/"],
            ["name" => "Forex Bank",              "type" => 1, "comment" => 1, "iban" => 940,  "regx" => "/^94[0-4]([0-9]|[0-9]{8})$/"],
            ["name" => "ICA Banken",              "type" => 1, "comment" => 1, "iban" => 927,  "regx" => "/^927([0-9]|[0-9]{8})$/"],
            ["name" => "IKANO Bank",              "type" => 1, "comment" => 1, "iban" => 917,  "regx" => "/^917([0-9]|[0-9]{8})$/"],
            ["name" => "JAK Medlemsbank",         "type" => 1, "comment" => 2, "iban" => false,"regx" => "/^967([0-9]|[0-9]{8})$/"],
            ["name" => "Landshypotek",            "type" => 1, "comment" => 2, "iban" => 939,  "regx" => "/^939([0-9]|[0-9]{8})$/"],
            ["name" => "Lån & Spar Bank",         "type" => 1, "comment" => 1, "iban" => 963,  "regx" => "/^963([0-9]|[0-9]{8})$/"],
            ["name" => "Länsförsäkringar Bank",   "type" => 1, "comment" => 1, "iban" => 902,  "regx" => "/^(340|906)([0-9]|[0-9]{8})$/"],
            ["name" => "Länsförsäkringar Bank",   "type" => 1, "comment" => 2, "iban" => 902,  "regx" => "/^902([0-9]|[0-9]{8})$/"],
            ["name" => "Marginalen Bank",         "type" => 1, "comment" => 1, "iban" => 923,  "regx" => "/^923([0-9]|[0-9]{8})$/"],
            ["name" => "MedMera Bank",            "type" => 1, "comment" => 2, "iban" => 965,  "regx" => "/^965([0-9]|[0-9]{8})$/"],
            ["name" => "Nordax Bank",             "type" => 1, "comment" => 2, "iban" => 964,  "regx" => "/^964([0-9]|[0-9]{8})$/"],
            ["name" => "Nordea",                  "type" => 1, "comment" => 1, "iban" => 300,  "regx" => "/^(?!3300|2200)(1[1456789][0-9]{2}|20[0-9]{2}|3[0-3][0-9]{2}|34[1-9][0-9]|3[5-9][0-9]{2})([0-9]{0}|[0-9]{7})$/"],
            ["name" => "Nordea",                  "type" => 1, "comment" => 2, "iban" => 300,  "regx" => "/^4([0-9]{3}|[0-9]{10})$/"],
            ["name" => "Nordnet Bank",            "type" => 1, "comment" => 2, "iban" => 910,  "regx" => "/^910([0-9]|[0-9]{8})$/"],
            ["name" => "Resurs Bank",             "type" => 1, "comment" => 1, "iban" => 928,  "regx" => "/^928([0-9]|[0-9]{8})$/"],
            ["name" => "Riksgälden",              "type" => 1, "comment" => 2, "iban" => false,"regx" => "/^988([0-9]|[0-9]{8})$/"],
            ["name" => "Santander Consumer Bank", "type" => 1, "comment" => 1, "iban" => 945,  "regx" => "/^946([0-9]|[0-9]{8})$/"],
            ["name" => "SBAB",                    "type" => 1, "comment" => 1, "iban" => false,"regx" => "/^925([0-9]|[0-9]{8})$/"],
            ["name" => "SEB",                     "type" => 1, "comment" => 1, "iban" => 500,  "regx" => "/^(5[0-9]{3}|912[0-4]|91[3-4][0-9])([0-9]{0}|[0-9]{7})$/"],
            ["name" => "Skandiabanken",           "type" => 1, "comment" => 2, "iban" => 915,  "regx" => "/^91[5-6]([0-9]|[0-9]{8})$/"],
            ["name" => "Swedbank",                "type" => 1, "comment" => 1, "iban" => 800,  "regx" => "/^7([0-9]{3}|[0-9]{10})$/"],
            ["name" => "Ålandsbanken",            "type" => 1, "comment" => 2, "iban" => 230,  "regx" => "/^23([0-9]{2}|[0-9]{9})$/"],
            ["name" => "Danske Bank",             "type" => 2, "comment" => 1, "iban" => 120,  "regx" => "/^918([0-9]|[0-9]{11})$/"],
            ["name" => "Handelsbanken",           "type" => 2, "comment" => 2, "iban" => 600,  "regx" => "/^6([0-9]{3}|[0-9]{12})$/"],
            ["name" => "Plusgirot",               "type" => 2, "comment" => 3, "iban" => 950,  "regx" => "/^(95[0-4]|996)([0-9]|[0-9]{6,11})$/"],
            ["name" => "Nordea",                  "type" => 2, "comment" => 1, "iban" => 300,  "regx" => "/^(3300|3782)([0-9]{0}|[0-9]{10})$/"],
            ["name" => "Riksgälden",              "type" => 2, "comment" => 1, "iban" => false,"regx" => "/^989([0-9]|[0-9]{11})$/"],
            ["name" => "Sparbanken Syd",          "type" => 2, "comment" => 1, "iban" => 957,  "regx" => "/^957([0-9]|[0-9]{11})$/"],
            ["name" => "Swedbank",                "type" => 2, "comment" => 3, "iban" => 800,  "regx" => "/^8([0-9]{4}|[0-9]{9,14})$/"],
            ["name" => "Swedbank",                "type" => 2, "comment" => 1, "iban" => 800,  "regx" => "/^93[0-4]([0-9]|[0-9]{11})$/"],
        ];
    }
    
    public function clearing($data)
    {
        $input = preg_replace('/\D/', '', $data);

        if (strlen($input) < 4 || strlen($input) > 5)
        {
            return false;
        }
        
        foreach ($this->banks as $bank)
        {
            if (preg_match($bank['regx'], $input) === 1)
            {
                return $bank['name'];
            }
        }
        
        return false;
    }
    
    public function validate($data)
    {
        $this->bank   = null;
        $this->input  = preg_replace('/[^A-Z0-9]/', '', $data);
        $isIBAN       = preg_match('/^SE[0-9]{22}$/', $this->input) === 1 ? true : false;
        $this->ibanID = $isIBAN ? intval(substr($this->input, 4, 3)) : null;
        $this->num    = $isIBAN ? intval(substr(preg_replace('/\D/', '', $this->input), 7)) : 
                        preg_replace('/\D/', '', $this->input);
        
        if (strlen($this->num) < 10)
        {
            return false;
        }
        
        foreach ($this->banks as $bank)
        {
            if (preg_match($bank['regx'], $this->num) === 1)
            {
                $this->bank = $bank;
                break;
            }
        }
        
        return $this->bank === null || ($isIBAN && $this->ibanID !== $this->bank['iban']) ? 
            false : $this->validateAccountNumber();
    }
    
    private function validateAccountNumber()
    {   
        $this->clearingNumber = substr($this->num, 0, substr($this->num, 0, 1) === "8" ? 5 : 4);
        
        // Samtliga konton av typ 1
        if ($this->bank['type'] === 1) {
            $this->accountNumber = substr($this->num, -7);
        }
        // Handelsbankens koton av typ 2
        else if ($this->bank['type'] === 2 && $this->bank['comment'] === 2) {
            $this->accountNumber = substr($this->num, -9);
        }
        // Swedbanks konton av typ 2
        else if ($this->bank['type'] === 2 && $this->bank['comment'] === 3 && substr($this->num, 0, 1) == "8") {
            $this->accountNumber = substr($this->num, 5);
        }
        // Plusgirots konton av typ 2
        else if ($this->bank['type'] === 2 && $this->bank['comment'] === 3 && substr($this->num, 0, 1) == "9") {
            $this->accountNumber = substr($this->num, 4);
        }
        // Resterande konton av typ 2
        else {
            $this->accountNumber = substr($this->num, -10);
        }
        
        $result = new stdClass();
        $result->bankName       = $this->bank['name'];
        $result->clearingNumber = $this->clearingNumber;
        $result->accountNumber  = $this->accountNumber;
        
        return !$this->modCalc() ? false : $result;
    }
    
    private function modCalc()
    {
        if ($this->bank['type'] === 1 && $this->bank['comment'] === 1)
        {
            $this->modNum = substr($this->clearingNumber.$this->accountNumber, -10);
            return $this->mod11();
        }
        else if ($this->bank['type'] === 1 && $this->bank['comment'] === 2)
        {
            $this->modNum = $this->clearingNumber.$this->accountNumber;
            return $this->mod11();
        }
        else if ($this->bank['type'] === 2 && $this->bank['comment'] === 2)
        {
            $this->modNum = $this->accountNumber;
            return $this->mod11();
        }
        else
        {
            $this->modNum = $this->accountNumber;
            return $this->mod10();
        }
    }
    
    private function mod10()
    {
        $len = strlen($this->modNum); 
        $bit = 1;
        $sum = 0;
        $val = 0;
        $arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    
        while ($len > 0)
        {
            $val = intval(substr($this->modNum, --$len, 1));
            $sum += ($bit ^= 1) ? $arr[$val] : $val;
        }
        return $sum && $sum % 10 === 0;
    }
    
    private function mod11()
    {
        
        $len = strlen($this->modNum);
        $sum = 0;
        $val = 0;
        $weights = [1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        $arr = array_splice(
            $weights,
            count($weights)-$len,
            count($weights)-(count($weights)-$len)
        );
        
    
        while ($len > 0)
        {
            $val = intval(substr($this->modNum, --$len, 1));
            $sum += $arr[$len] * $val;
        }
        return $sum && $sum % 11 === 0;
    }   
}
