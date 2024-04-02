const btn = document.querySelector(".btn");

btn.addEventListener("click",checkInput)
function checkInput(e){
    e.preventDefault()
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name")
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const myInputs = [
        {
            name:firstName,
            regexp: /^[a-zA-Z]+$/,
        },
        {
            name:lastName,
            regexp: /^[a-zA-Z]+$/,
        },
        {
            name:email,
            regexp: /^[\w+|\D]+(@)?(\w+).(com)$/,
        },
        {
            name:password,
            regexp: /[^.]/,
        },
    ]
    verifyInput(myInputs)
}

function verifyInput(inputs){

    let check = inputs.every(w => w.regexp.test(w.name.value))
    console.log(check);
    if(check){
        inputs.forEach(element => {
            element.name.value = ''
            element.name.style.outline = "none"
        });
    }else{
        let wrongInput = inputs.map((w)=>{
            if(!w.regexp.test(w.name.value)){
                return w
            }
        }).filter(l => l != undefined);
        let rightInputs = inputs.map((w)=>{
            if(w.regexp.test(w.name.value)){
                return w
            }
        }).filter(l => l != undefined);
        wrongInput.forEach(input =>{
            input.name.style.outline = "1px solid red"
        });
        rightInputs.forEach(input =>{
            input.name.style.outline = "none"
        })
    }
}

