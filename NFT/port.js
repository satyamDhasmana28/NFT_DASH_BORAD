 //NFT DATA
 var nftData = [
    {
        'image' : "./nft-images/OIP0.jfif",
         'name' : "Cool Ape yacht",
        'price' : "$60.99",
        'about' : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est placeat repellat beatae similique laudantium inventore soluta provident autem doloremque ipsum, expedita nulla maiores",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP1.jfif",
         'name' : "Brown monkey",
        'price' : "$45.99",
        'about' : "lorem rgkher werjkwheori ertikjrliatjweoil rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP2.jfif",
         'name' : "Dance monkey",
        'price' : "$159.00",
        'about' : "adkljsal dsfs dfsd fs sdf 4wt hyte jr yve wer tyvr tyy brt yerc 5t e ytr vy rty vr yrh   trwtw rte rty e ye",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP3.jfif",
         'name' : "Chill apes",
        'price' : "$15.99",
        'about' : "relkgjerkgn erklgjjerlkg dflkgjr;lkg ger;lgokerligj gerlgojeropig dfgiljerlgjoeropg ;oguerojigtwe 4fm,dhgolier",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP4.jfif",
         'name' : "Red Danger hell",
        'price' : "$38.99",
        'about' : "gfdgdf ;ogksdf grslfgsd,fgms dfkghioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP5.jfif",
         'name' : "Cute Ayush",
        'price' : "$12.99",
        'about' : "sdfsdk;fjsdkljfsd foisdjhf ewjhr0 wel rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP6.jfif",
         'name' : "Black and White",
        'price' : "$30.99",
        'about' : "lhgjghk gkdfjg fldkkgl fsdijf ufhsdl fsdf sfsjdf ssdfsd fdfsgtfsdsd wei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP7.jfif",
         'name' : "Artistic lab",
        'price' : "$99.99",
        'about' : "fdg jkgk sdfte rfgaed sefse weori ertikjrliatjweoil rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP8.jfif",
         'name' : "Golden apes savhit",
        'price' : "$399.99",
        'about' : "is anmy fdklsdhf  werjkwheori ertikjrliatjweoil rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP9.jfif",
         'name' : "Bubble APes Yachit",
        'price' : "$145.99",
        'about' : "kjhk wqpd z xc x xxkwheori ertikjrliatjweoil rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    },

    {
        'image' : "./nft-images/OIP10.jfif",
         'name' : "king yachit apes",
        'price' : "$499.99",
        'about' : "plsb suog euovhdf werjkwheori ertikjrliatjweoil rtjhioeritjweioj rwiotujeriltjwei eruiotjle4jiloj oltujweriltjlwrktnlkwr",
        'flink' : "#",
        'ilink' : "#",
        'llink' : "#",
        'wlink' : "#"
           
    }

];
// console.log(nftData.length);
// Variables
var img , nftName , price , about , flink , ilink ,llink ,wlink , next , prev , surprise , counter = 0 , ldmode , cardbox ;

//Dom variables linked
ldmode   = document.getElementById('ldmode'); 
img      = document.getElementById('img');
nftName  = document.getElementById('nftName');
price    = document.getElementById('price');
about    = document.getElementById('about');
flink    = document.getElementById('f');
ilink    = document.getElementById('i');
llink    = document.getElementById('l');
wlink    = document.getElementById('w');
next     = document.getElementById('next');
prev     = document.getElementById('previous');
surprise = document.getElementById('surprise');
cardbox = document.getElementById('card-box'); 

//functions
var ldm = 0;
function lightDarkMode(){
 ldm += 1;
 if(ldm % 2 == 1){
    ldmode.textContent = "Color Mode"
    ldmode.style.backgroundColor = "black";
    ldmode.style.color = "white" ;
    cardbox.style.backgroundColor = "rgba(123,255,0, 0.2)";
 }
 
 else if(ldm%2 == 0){
    ldmode.textContent = "Light Mode";
    ldmode.style.backgroundColor = "white";
    ldmode.style.color = "black";
    cardbox.style.backgroundColor = "white";
 }
}


function change(ref){
    img.src = nftData[ref].image;
    nftName.textContent  = nftData[ref].name;
    price.textContent = nftData[ref].price;
    about.textContent = nftData[ref].about;
    flink.href = nftData[ref].flink;
    ilink.href = nftData[ref].ilink;
    llink.href = nftData[ref].llink;
    wlink.href = nftData[ref].wlink;
    
}

function nextNft(){  
    if(counter == nftData.length -1){
        counter = 0;
        change(counter); 
    }

    else{
        counter += 1;
        change(counter);
    }
}

function prevNft(){
    if(counter == 0){
        counter = nftData.length - 1;
        change(counter); 
    }

    else{
        counter -= 1;
        change(counter);
    } 
}

function surpriseNft(){
    // console.log('sur');
    counter = Math.floor(Math.random() * nftData.length); 
    change(counter);
}

//Add event listener
ldmode.addEventListener('click' , lightDarkMode)
next.addEventListener('click' , nextNft);
prev.addEventListener('click' , prevNft);
surprise.addEventListener('click' , surpriseNft);
