console.log('hello')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
console.log(five)
const rateform=document.querySelector('.rate-form')
const ratebox=document.getElementById('connect-box')
// const csrf=document.getElementsByName('csrfmidlewaretoken')
const handstarselect= (size) =>{
    const children = rateform.children
    // console.log(children[0])
    for (let i=0 ; i < children.length ; i++ ){
        if (i < size){
            children[i].classList.add('checked')
        }else{
            children[i].classList.remove('checked')
        }
    }
}
// handstarselect(2)
const handleSelect = (selection) => {
    switch (selection){
        case '1':{
            // one.classList.add('checked')
            // two.classList.remove('checked')
            // three.classList.remove('checked')
            // four.classList.remove('checked')
            // five.classList.remove('checked')
            handstarselect(1)
            return
        };
        case '2':{
            // one.classList.add('checked')
            // two.classList.add('checked')
            // three.classList.remove('checked')
            // four.classList.remove('checked')
            // five.classList.remove('checked')
            handstarselect(2)
            return
        };
        case '3':{
            // one.classList.add('checked')
            // two.classList.add('checked')
            // three.classList.add('checked')
            // four.classList.remove('checked')
            // five.classList.remove('checked')
            handstarselect(3)
            return
        };
        case '4':{
            // one.classList.add('checked')
            // two.classList.add('checked')
            // three.classList.add('checked')
            // four.classList.add('checked')
            // five.classList.remove('checked')
            handstarselect(4)
            return
        };
        case '5':{
            // one.classList.add('checked')
            // two.classList.add('checked')
            // three.classList.add('checked')
            // four.classList.add('checked')
            // five.classList.add('checked')
            handstarselect(5)
            return
        }
    }
}
const numericvalue = (stringValue) =>{
    let valuen;
    if (stringValue === '1'){
        valuen = 1
    }
    else if (stringValue ==='2'){
        valuen = 2
    }
    else if (stringValue === '3'){
        valuen = 3
    }
    else if (stringValue === '4'){
        valuen = 4
    }
    else if (stringValue==='5'){
        valuen = 5
    }
    else {
        valuen = 0
    }
    return valuen
}
const arr = [one,two,three,four,five]
arr.forEach(item=> item.addEventListener('mouseover', (event)=>{
    handleSelect(event.target.id)
}))
arr.forEach(item=> item.addEventListener('click',(event)=>{
    // alert('clicked')
    const value = event.target.id
    // alert(value)
    console.log(value)
    rateform.addEventListener('submit',e=>{
        e.preventDefault()
        const id = e.target.id
        alert(id)
        const numericval=numericvalue(value)
        $.ajax({
            type : 'GET',
            url : '/rate/',
            data : {
                'pic_id' : id,
                'pic_rate' : numericval
            },
            success :function(response){
                console.log(response)
                ratebox.innerHTML='<h2>rated scussefully</h2>'
            },
            error:function(response){
                console.log(response)
                ratebox.innerHTML='<h2>something went error</h2>'
            }
        })
    })
}))