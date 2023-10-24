let a = +prompt('1 ile 5 arasinda reqem qeyd edin')
let number = Math.floor(Math.random(a) * 5 );
let netice;
switch (number) {
    case 2:
        netice = 'Siz Iphone 15 qazandiniz'
        break;
        case 3:
        netice = 'a'
        break;
    default:
        netice = '1 ile 5 arasinda olmalirdir'
        break;  
} 
document.getElementById('morro').innerHTML = netice;