// Kads rezultats bus pec datu tipu pārvēršānas
// Rezultatu uzrakstit blakus komentāros



String(123)            //"123"
String(-12.3)       //"-12.3"
String(null)         //"null"
String(undefined)       //"undefined"
String(true)          //"true"
String(false)           //"false"
String(function () {})  // 'function () {}'
String({})             //"{}"
String({ key: 42 })     //"{ key: 42 }"
String([])              //"[]"
String([1, 2])          //"[1, 2]"


Number("123")        // 123   
Number("123.4")       //123.4  
Number("123,4")         //error 
Number("")              //empty space
Number(null)            // null
Number(undefined)       // underfined
Number(true)            //true
Number(false)           // false
Number(function () {})  // NaN
Number({})              //{}
Number([])              //[] 
Number([1])             //[1]
Number([1, 2])          //[1, 2]


Boolean("")           //false  
Boolean("string")       //true
Boolean("false")        //true
Boolean(0)              //false
Boolean(42)             //true
Boolean(-42)            // true
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {}) // true
Boolean({})             //false
Boolean({ key: 42 })    //true
Boolean([])             //true
Boolean([1, 2])     //true