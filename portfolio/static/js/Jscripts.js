console.log('Successfull')

let theme= localStorage.getItem('theme')

if(theme==null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDot = document.getElementsByClassName('theme-dot')

for(var i=0; themeDot.length>i; i++){
    themeDot[i].addEventListener('click', function(){
        let mode =this.dataset.mode
        console.log('option clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode=='light'){
        document.getElementById('theme-style').href= static + '/style.css'
    }

    if(mode=='dark'){
        document.getElementById('theme-style').href= static + '/theme.css'
    }
    localStorage.setItem('theme', mode)

}