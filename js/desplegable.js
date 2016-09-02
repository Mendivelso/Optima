//Desplega los adjuntos de cada una de las areas de servicios
	/* Desplegable investigacion */
$(document).ready(function(){
	$("#inv").click(function(){
			$("#cont_inv").slideDown("slow");
			$("#up").slideDown("slow");
			$("#inv").hide();
	});

	$("#up").click(function(){
			$("#cont_inv").slideUp("slow");
			$("#up").hide();
			$("#inv").show();
	});

	/* Desplegable central de medios  */
	$("#med").click(function(){
			$("#cont_med").slideDown("slow");
			$("#up_med").slideDown("slow");
			$("#med").hide();
	});

	$("#up_med").click(function(){
			$("#cont_med").slideUp("slow");
			$("#up_med").hide();
			$("#med").show();
	});

	/* Desplegable BTL  */
	$("#btl_d").click(function(){
			$("#cont_btl").slideDown("slow");
			$("#up_btl").slideDown("slow");
			$("#btl_d").hide();
	});

	$("#up_btl").click(function(){
			$("#cont_btl").slideUp("slow");
			$("#up_btl").hide();
			$("#btl_d").show();
	});

	/* Desplegable ATL  */
	$("#atl_d").click(function(){
			$("#cont_atl").slideDown("slow");
			$("#up_atl").slideDown("slow");
			$("#atl_d").hide();
	});

	$("#up_atl").click(function(){
			$("#cont_atl").slideUp("slow");
			$("#up_atl").hide();
			$("#atl_d").show();
	});

	/* Desplegable CONTACT CENTER  */
	$("#con_d").click(function(){
			$("#cont_act").slideDown("slow");
			$("#up_con").slideDown("slow");
			$("#con_d").hide();
	});

	$("#up_con").click(function(){
			$("#cont_act").slideUp("slow");
			$("#up_con").hide();
			$("#con_d").show();
	});

	/* Desplegable DIGITAL  */
	$("#dig").click(function(){
			$("#cont_dig").slideDown("slow");
			$("#up_dig").slideDown("slow");
			$("#dig").hide();
	});

	$("#up_dig").click(function(){
			$("#cont_dig").slideUp("slow");
			$("#up_dig").hide();
			$("#dig").show();
	});
});
