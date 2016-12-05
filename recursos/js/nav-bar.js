$(document).ready(function(){
	$("#search").click(function(){

		var cambiar = document.getElementById('busqueda');
		cambiar.style.width = 500+'px';
		cambiar.style.paddingTop = 5+'px';

		$('#search').hide();
		
		$('#div-src').show(3,function(){
			$('#btn-src').show(3,function(){
				var cambiar2 = document.getElementById('input-src');
				cambiar2.style.width = 400+'px';

				$('#input-src').animate({
					width: 380+'px'
				})
			})
		});
		return false;
	});

	$('#close-src').click(function(){
		var cambiar = document.getElementById('busqueda');
		cambiar.style.width = 100+'px';
		cambiar.style.paddingTop = 0+'px';
		$('#div-src').hide(1,function(){
			$('#btn-src').hide();
			$('#input-src').width(0);
			$('#search').show();
		});
	})
});