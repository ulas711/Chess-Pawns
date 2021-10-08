// İlk piyon beyaz olmak zorunda
// 2 tane siyah piyon yan yana gelmemek zorunda
// 8 tane piyonu satranç tahtasındaki satıra kaç farklı şekilde dizebiliriz.


// 1 piyon = 1          8
// 2 piyon = 2          16
// 3 piyon = 3          24
// 4 piyon = 5          40
// 5 piyon = 8           
// 6 piyon = 13           
// 7 piyon = 21           
// 8 piyon = 28           

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
    console.log("\n");
}


// Eğer değer 1 ise rastgele ata eğer 0 ise 1 ata 



// _ _ _ _ _ _ _ _ 
// 2.2




/*
class Node
{
    constructor(item)
    {
        this.key = item;
        this.left = this.right = null;
    }
}
*/
// başaramadık abi... 






