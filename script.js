//Menu mobile

var btnMenu = document.querySelector('#hamburguinho')
var naveg = document.querySelector('#menu')
var btnFechar = document.querySelector('#btnFechar')




var botaoFooter = document.getElementById('btnFooter')
var tela = window.screen.width
var tela2 = window.screen.height


function mostrarTela(){

	alert(tela +'px ' + 'X ' + tela2 + 'px' )


}






function mostrarMenu(){      
    
	naveg.style.transform = 'translateX(0%)'
	naveg.style.transition = '0.55s'
	
}


function esconderMenu(){

	
	naveg.style.transition = '0.55s'	 

    naveg.style.transform = 'translateX(-100%)'
}



btnMenu.addEventListener('click',mostrarMenu)

btnFechar.addEventListener('click',esconderMenu)
botaoFooter.addEventListener('click',mostrarTela)