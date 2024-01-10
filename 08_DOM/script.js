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


// var add = document.querySelector('#add')
// var remove = document.querySelector('#remove')
// var inp = document.querySelector('input')
// var ul = document.querySelector('ul')

// var lis;
// var li;

// add.addEventListener('click', function(){
//     li = document.createElement('li')
//     if(inp.value.trim() === ''){}
//     else{
//         li.textContent = inp.value
//         ul.appendChild(li)
//         inp.value = ""
//     }
// })

// remove.addEventListener('click', function(){
//     try {
//         lis = document.querySelectorAll('li')
//         // console.log(lis[lis.length -1]);
//         ul.removeChild(lis[lis.length -1])
//     } catch (error) {
//         console.error('No li is exist for remove');
//     }
// })


// var start = document.querySelector('#start')
// var stop = document.querySelector('#stop')
// var h3 = document.querySelector('h3')

// var int

// start.addEventListener('click', function(){
//     var count = 0
//     int = setInterval(function(){
//         h3.textContent = count
//         count++
//     }, 1000)
// })

// stop.addEventListener('click', function(){
//     clearInterval(int)
// })


// var home = document.querySelector('#home')
// var about = document.querySelector('#about')
// var contact = document.querySelector('#contact')

// var hometext = document.querySelector('#hometext')
// var abouttext = document.querySelector('#abouttext')
// var contacttext = document.querySelector('#contacttext')

// hometext.style.display = 'block'
// hometext.style.width = '70%'

// home.addEventListener('click', function(){
//     removeAllTab();
//     hometext.style.display = 'block'
//     hometext.style.width = '70%'
// })

// about.addEventListener('click', function(){
//     removeAllTab();
//     abouttext.style.display = 'block'
//     abouttext.style.width = '70%'
// })

// contact.addEventListener('click', function(){
//     removeAllTab();
//     contacttext.style.display = 'block'
//     contacttext.style.width = '70%'
// })

// function removeAllTab(){
//     document.querySelectorAll('h3').forEach(function(h3){
//         h3.style.display = 'none'
//     })
// }

// var divs = document.querySelectorAll('.tab')
// var texts = document.querySelectorAll('h3')

// texts[0].style.display = 'block';
// texts[0].style.width = '70%';

// divs.forEach(function(div, index){
//     div.addEventListener("click", function(){
//         hideAllText();
//         texts[index].style.display = "block"
//         texts[index].style.width = "70%"
//     })
// })

// function hideAllText(){
//     texts.forEach(function(text){
//         text.style.display = "none"
//     })
// }


// var prg = document.querySelector("#progress")
// var h3 = document.querySelector('h3')

// var count = 0
// var int = setInterval(function(){
//     if(count === 100){
//         clearInterval(int)
//         h3.style.opacity = 1
//     }
//     count++
//     prg.style.width = count+'%'
// }, 50)

var input = document.querySelector('input');
var data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1627087820883-7a102b79179a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshita", src: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika", src: "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f"},
    {name: "shyam", src: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f"},
]

var pers = "";

data.forEach(function(elem){
    pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`
})

document.querySelector('.people').innerHTML = pers

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    var newusers = ""
    matching.forEach(function(elem){
        newusers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`
    })
    
    document.querySelector('.people').innerHTML = newusers
})