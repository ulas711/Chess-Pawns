// İlk piyon beyaz olmak zorunda
// 2 tane siyah piyon yan yana gelmemek zorunda
// 8 tane piyonu satranç tahtasındaki satıra kaç farklı şekilde dizebiliriz.          

var all_satir = new Array(); 
var satir = new Array();
var sayac = 0;
function olustur (all_satir,satir,sayac)
{
    function randomInt(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    satir[0]= 1; 
    
    for(var i=1; i<8; i++)
    {
        if(satir[i-1] == 1)
        {
            satir[i] = randomInt(0,1);
        }
        else{
            satir[i] = 1;
        }
    }

    for(var i = 0; i<8; i++)
    {
        console.log(satir[i]);
    }

    for(var i=0; i<8; i++)
    {
        var temp = String(satir[0]) + String(satir[1]) + String(satir[2]) + String(satir[3]) + String(satir[4]) + String(satir[5]) + String(satir[6]) + String(satir[7]); 
    }
    for(var i=0; i<8; i++)
    {
        console.log(temp);
    }
    for(var i =0; i<8; i++)
    {
        if(all_satir[i] == temp)
        {
            temp = '0';
            break;
        }
        else{
                all_satir[sayac] = temp;
        }
    } 
}





while (sayac!=34)
{
    olustur(all_satir,satir, sayac);
    sayac++;
}
for (var i=0; i<34; i++)
{
    console.log(all_satir[i]);
    console.log(i+1);
}

