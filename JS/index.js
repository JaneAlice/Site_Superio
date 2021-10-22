// Menu responsivo

var menu_aberto_aberto = 0;

$('#btn_abrir_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
		
		var target = document.querySelector('.menu-mobile-animado');
		var player = target.animate([
			{transform: 'translate(0,0)'},
			{transform: 'translate(260px,0)'},
		],500)
		player.addEventListener('finish', function () {
			target.style.transform = 'translate(260px,0)'
		});

	}else{
		fecharMenu();
	}
	
});

$('#btn_fechar_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();

		var target = document.querySelector('.menu-mobile-animado');
		var player = target.animate([
			{transform: 'translate(260px,0)'},
			{transform: 'translate(0,0)'},
		],300)
		player.addEventListener('finish', function () {
			target.style.transform = 'translate(0,0)'
		});
	}
    
});

function abrirMenu(){
	$('#menu_mobile').show(200);
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu_mobile').hide(500);
	menu_aberto_aberto = 0;
}