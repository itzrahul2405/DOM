// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// // console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'HELLO';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);








// GETELEMENTBYID  //

// console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbye';

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

headerTitle.innerHTML = '<h3>Hello</h3>';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// var header = document.getElementById('main-header');
// console.log(header)
// header.style.borderBottom = 'solid 3px #000';

document.getElementById('add-item').style.fontWeight = 'bold';
document.getElementById('add-item').style.color = 'green';

// document.getElementById('add-item').style.cssText = 'font-weight: bold; color: green;';






// GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[1].style.background = 'yellow';

// items.style.backgroundColor = '#f4f4f4';    // it will not work because it is an html-collection(array)

// for (let i=0;i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }



items[2].style.backgroundColor = 'green';
for (let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}