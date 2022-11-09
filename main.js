let btnDarkMode = document.querySelector('#selector-dark-mode')

btnDarkMode.addEventListener('click', function(){
    if(btnDarkMode.checked){
        document.documentElement.style.setProperty('--fond', 'hsl(230, 17%, 14%)')
        document.documentElement.style.setProperty('--ecriture', '#fff')
        document.documentElement.style.setProperty('--secondEcriture', '#fff')
        document.documentElement.style.setProperty('--boxFond', 'hsl(228, 28%, 20%)')
        document.documentElement.style.setProperty('--boxFondHover', 'hsl(228, 28%, 20%, 0.3)')
    }

    else{
        document.documentElement.style.setProperty('--fond', 'hsl(0, 0%, 100%)')
        document.documentElement.style.setProperty('--ecriture', 'hsl(230, 17%, 14%)')
        document.documentElement.style.setProperty('--secondEcriture', 'hsl(230, 17%, 14%)')
        document.documentElement.style.setProperty('--boxFond', 'hsl(227, 47%, 96%)')
        document.documentElement.style.setProperty('--thirdEcriture', 'hsl(228, 12%, 44%)')
    }
})