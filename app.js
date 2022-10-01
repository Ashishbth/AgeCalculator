const btn  = document.getElementById('btn');
function age(e){
    e.preventDefault();
    let m1 = document.getElementById('month').value;
    let d1 = document.getElementById('date').value;
    let y1 = document.getElementById('year').value;
    let res = document.getElementById('result');

    let date = new Date();
    let m2 = date.getMonth() + 1;
    let d2 = date.getDate();
    let y2 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;
    res.innerHTML = `<h3> Your age is ${y} Years ${m} Months and ${d} Days </h3>`;
    clear();

}

function clear(){
     document.getElementById('month').value = null;
     document.getElementById('date').value = null;
     document.getElementById('year').value = null;

   
}



btn.addEventListener('click' , age);