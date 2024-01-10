// var btn = document.querySelector('button')
// var p = document.querySelector('p')

// btn.addEventListener('click', function(){
//     p.textContent = 'hey, buddy'
// })

// var img1 = document.querySelector('#one')
// var img2 = document.querySelector('#two')

// document.querySelector('button')
// .addEventListener('click', function(){
//     var src1 = img1.src
//     var src2 = img2.src

//     img1.src = src2
//     img2.src = src1
// })


// var form = document.querySelector("form")
// var inps = document.querySelectorAll('input[type="text"]')
// var err = document.querySelector('h4')
// var lv_flag

// form.addEventListener('submit', function (ev) {
//     ev.preventDefault()
//     for (var i = 0; i < inps.length; i++) {
//         if (inps[i].value.trim() === '') {
//             err.textContent = 'Error, some fields blank'
//             err.style.color = 'red'
//             break;
//         }
//     }
// })


var add = document.querySelector('#add')
var remove = document.querySelector('#remove')
var inp = document.querySelector('input')
var ul = document.querySelector('ul')

var lis;

var li;

add.addEventListener('click', function(){
    li = document.createElement('li')
    if(inp.value.trim() === ''){}
    else{
        li.textContent = inp.value
        ul.appendChild(li)
        inp.value = ""
    }
})

remove.addEventListener('click', function(){
    try {
        lis = document.querySelectorAll('li')
        // console.log(lis[lis.length -1]);
        ul.removeChild(lis[lis.length -1])
    } catch (error) {
        console.error('No li is exist for remove');
    }
})