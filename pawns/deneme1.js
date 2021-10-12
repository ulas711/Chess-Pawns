// İlk piyon beyaz olmak zorunda
// 2 tane siyah piyon yan yana gelmemek zorunda
// 8 tane piyonu satranç tahtasındaki satıra kaç farklı şekilde dizebiliriz.          
// Beyaz yerine 1, siyah yerine 0;

console.log("-------------- Hello --------------\n\n");
console.log("8 tane piyonu aşağıdaki kurallara göre dizme: \n\n");
console.log("1- İlk piyon beyaz olmalı.");
console.log("2- 2 tane siyah piyon yan yana gelmemeli.\n\n");

var all_satir = new Array(); 
var satir = new Array();
var sayac = 0;
// 8 li piyon dizilimi olusturan fonksiyon: 
function olustur (all_satir,satir,sayac)
{
    // Belirtilen 2 sayı arasında (2 si de dahil) rastgele tam sayı: 
    function randomInt(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // ilk terim beyaz:
    satir[0]= 1; 
    // dizilim: 
    for(var i=1; i<8; i++)
    {
        // beyazsa rastgele atama: 
        if(satir[i-1] == 1)
        {
            satir[i] = randomInt(0,1);
        }
        // 2 siyah arka arkaya gelmemeli: 
        else{
            satir[i] = 1;
        }
    }
    // Dizilimi geçici bir stringe atama:
    for(var i=0; i<8; i++)
    {
        var temp = String(satir[0]) + String(satir[1]) + String(satir[2]) + String(satir[3]) + String(satir[4]) + String(satir[5]) + String(satir[6]) + String(satir[7]); 
    }
    // Farklı dizilim kontrolü: 
    for(var i =0; i<8; i++)
    {
        if(all_satir[i] == temp)
        {
            temp = '0';
            break;
        }
        // Asıl Array'e yerleştirme: 
        else{
                all_satir[sayac] = temp;
        }
    } 
}

// 8 piyon olursa elimizdeki seçenek sayısı: 
var a = 0; 
var b = 1; 
var fib; 

for(let i = 0; i<8; i++)
{
    fib = a+b;
    a = b;
    b = fib; 
}

// 
for(let i = 0; i<fib; i++)
{
    olustur(all_satir,satir, sayac);
    sayac++;
}
// print all 
for (var i=0; i<fib; i++)
{
    console.log(i+1);
    console.log(all_satir[i]);
}

