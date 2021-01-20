const fs = require('fs')

window.onload = function() {
    var btn = this.document.querySelector('#btn')
    var renyuan = this.document.querySelector('#renyuan')
    btn.onclick = function() {
        fs.readFile('renyuan.txt',(err,data) => {
            renyuan.innerHTML = data
        })
    }
}

window.addEventListener('contextmenu', function(){
    alert('111')
})
