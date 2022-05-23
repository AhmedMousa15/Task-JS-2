let openmodal = document.querySelector('#open-modal')
let addmodal = document.querySelector('#add-modal')
let modalbtnclose = document.querySelector('#modal-btnclose')
let btnaddmodal = document.querySelector('#btnadd-modal')
let allinput = document.querySelectorAll('#inputmovie')
let noaddyet = document.querySelector('#noaddyet')
let adddone=document.querySelector('#adddone')












let btnaddmodalfunction = function (name,image,rating) {
    inputname = allinput[0].value;
    inputimage = allinput[1].value;
    inputrating = allinput[2].value;
    if (inputname.trim() == "" || inputrating.trim() == "") {
        if (inputname.trim() == "") {
            alert("Pls Enter Data")
        } else if (inputrating.trim() == "") {
            alert("pls enter data")
        }
    } else {
        addmodal.classList.remove('block');
        adddone.classList.remove('none')
        adddone.innerHTML +=`
        <div class="col-lg-12 mb-5">
        <div class="card"> 
        <img src="${image}" <br>
        <div class="card-body"> 
        <h2 class="mt-4"> ${name} </h2>
        <h2 class="star btn btn-outline-success"> ${rating} Stars </h2> <br>
        </div>
        </div>
        <button class="remove btn btn-danger btn btn-block mb-5">Delete</button>
        </div>
        `
        
        


    }


}
let randerdata=function(){
    inputname = allinput[0].value;
    inputimage = allinput[1].value;
    inputrating = allinput[2].value;

    let person ={
        name : inputname,
        image :  inputimage,
        rating : inputrating

    }
    btnaddmodalfunction(person.name,person.image,person.rating);

}
// let noaddyetshow = function(){
//     if(adddone.childElementCount == 0){
//         noaddyet.classList.remove('none');
//     }
// }

adddone.addEventListener('click',function(a){
    if(a.target.classList.contains('remove')){
        a.target.parentElement.classList.add('none');
        
    }
   

})


let openmodalfunction = function () {
    addmodal.classList.toggle('block');
    
}


btnaddmodal.addEventListener('click', randerdata)
openmodal.addEventListener('click', openmodalfunction)
modalbtnclose.addEventListener('click',openmodalfunction)
