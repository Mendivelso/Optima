function elementVisible(element) {
	var visible = false;
	// Elemento menú
	var elementNav = $((document.getElementById('menuTop')));
	var elementNavPositionTop = elementNav.offset().top;
	var elementNavPositionBottom = elementNavPositionTop + elementNav.height();

	//Calcula la posición TOP y BOTTOM del elemento
	var elementPositionTop = element.offset().top;
	var elementPositionBottom = elementPositionTop + element.height();

	if(elementPositionTop <= elementNavPositionBottom && elementPositionBottom >=  elementNavPositionTop){
		visible = true;
	}
	//console.log('botton Nav : '+elementNavPositionBottom+' Top a comparar : '+elementPositionTop+'              Top Nav : //'+elementNavPositionTop+' Bottom comparar : '+elementPositionBottom+'       RESULT : '+visible);
	return visible;
}

function initShazam(element) {
	var vShow = false;
	var vElement = "";

	$(window).on('scroll resize', function (){
		$('#logo').empty();
		$('#logo').append('<img src="img/logoblanco.png" width="85%" style="">');
		$('#cuadro').empty();
		$('span').removeClass("blue yellow fuscia ama end");
		//console.log(elementVisible(element));
		//vShow = elementVisible(element);
		if(elementVisible(element)){
			$('#logo').empty();
			$('#logo').append('<img src="img/logoblanco.png" width="85%" style="">');
			$('#cuadro').empty();
			$('#cuadro').append('<img src="img/azul.png" width="80%" style="margin-top:42px;">');
			$('span').addClass("blue");
			//console.log('viendo elemento bloque 1');
		}
		else{
			vElement = $((document.getElementById('bloque2')));
			if(elementVisible(vElement)){
				$('#logo').empty();
				$('#logo').append('<img src="img/logoazul.png" width="85%" style="">');
				$('#cuadro').empty();
				$('#cuadro').append('<img src="img/azul.png" width="80%" style="margin-top:42px;">');
				$('span').addClass("yellow");
				$('#span').empty();
				$('#span2').addClass("uno1");

				//console.log('Viendo elemento bloque 2');
			}
			else{
				vElement = $((document.getElementById('bloque3')));
				// cpia desde aquí hasta el cierre del if si desea incluir un nuevo bloque
				if(elementVisible(vElement)){
					$('#logo').empty();
					$('#logo').append('<img src="img/logoama.png" width="85%" style="">');
					$('#cuadro').empty();
					$('#cuadro').append('<img src="img/ama.png" width="80%" style="margin-top:42px;">');
					$('span').addClass("ama");
					$('#span').empty();
					$('#span2').addClass("uno3");
					//console.log('Viendo elemento bloque 3');
				}
				else{
					// inclyue un nuevo bloque si desea
					vElement = $((document.getElementById('bloque4')));
					// cpia desde aquí hasta el cierre del if si desea incluir un nuevo bloque
					if(elementVisible(vElement)){
						$('#logo').empty();
						$('#logo').append('<img src="img/logoblanco.png" width="85%" style="">');
						$('#cuadro').empty();
						$('#cuadro').append('<img src="img/blanco.png" width="80%" style="margin-top:42px;">');
						$('span').addClass("blue");
						//console.log('Viendo elemento bloque 3');
					}else {
							vElement = $((document.getElementById('bloque5')));
							// cpia desde aquí hasta el cierre del if si desea incluir un nuevo bloque
							if(elementVisible(vElement)){
								$('#logo').empty();
								$('#logo').append('<img src="img/logorojo.png" width="85%" style="">');
								$('#cuadro').empty();
								$('#cuadro').append('<img src="img/rojp.png" width="70%" style="margin-top:52px;">');
								$('span').addClass("end");
								//console.log('Viendo elemento bloque 3');
							}
					}
					vElement = $((document.getElementById('bloque6')));
					// cpia desde aquí hasta el cierre del if si desea incluir un nuevo bloque
					if(elementVisible(vElement)){
						$('#logo').empty();
						$('#logo').append('<img src="img/logoazul.png" width="85%" style="">');
						$('#cuadro').empty();
						$('#cuadro').append('<img src="img/uno.png" width="70%" style="margin-top:52px;">');
						$('span').addClass("blue");
						// $('#video').empty();
						// $('#video').append('<video src="src/videogrupo.mov"  width="90%"  autoplay style="margin-top:150px;"></video>');
						//console.log('Viendo elemento bloque 3');
					}
				}
			}
		}
	});
}

/** crga completa del archivo **/
$(document).ready(function() {
var element = $((document.getElementById('bloque1')));
initShazam(element);
});



