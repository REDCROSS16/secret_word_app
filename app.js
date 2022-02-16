let str = '';
const reference = 'hello';
let about = document.querySelector('#about');
const s1 = '65|108|101|120|32|80|111|100|111|108|110|105|116|115|107|121';
const s2 = '51|55|53|51|51|51|56|50|50|48|49|49'

document.addEventListener('keypress', (event) => {
    str += event.key;
    if (reference.indexOf(str) !== 0) {
        str = '';
        about.remove();
        return;
    }
    if (str === reference) {

        let block = document.createElement('div');
        let span1 = document.createElement('div');
        let span2 = document.createElement('div');
        span1.innerHTML = text(s1);
        span2.innerHTML = text(s2);
        block.append(span1);
        block.append(span2);
        about.append(block);
    }
})

/**дешифратор */
const text = str => str.split('|').map(item => String.fromCharCode(item)).join('');

/** шифрование */
// let str2 = '375333822011';
// let crypted = str2.split('').map(value => value.charCodeAt(0)).join('|');
// console.log(crypted);

/**
 * так же можно минифицировать JS в minimize JS
 * и получится что-то такое:
 * 
 * let str="";const reference="hello";let about=document.querySelector("#about");const s1="65|108|101|120|32|80|111|100|111|108|110|105|116|115|107|121",s2="51|55|53|51|51|51|56|50|50|48|49|49";document.addEventListener("keypress",e=>{if(str+=e.key,0!=="hello".indexOf(str))return str="",void about.remove();if("hello"===str){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");t.innerHTML=text(s1),n.innerHTML=text(s2),e.append(t),e.append(n),about.append(e)}});const text=e=>e.split("|").map(e=>String.fromCharCode(e)).join("");
 */