jQuery(window).ready(function($){

	function scrollOnPageLoad() {
	
		// primera carga, cancelar el salto de un anchor
		if (location.hash) {
			setTimeout(function() {
				window.scrollTo(0, 0);
			}, 1);
		  
		// esperar unos segundos y aplicar scroll automatico
		setTimeout(function() {
	
			var hashLink = window.location.hash;
			// *obtener el heigth del header (opcional)	  
			var hOffset = $('header.wpc-header').height();
	
			if ( $(hashLink).length ) {
					
				  $(function () {
				      // Solo si existe un anchor animar el scroll
				      $('html, body').animate({
				        scrollTop: $(window.location.hash).offset().top - hOffset
				      }, 2000);
				  });
				  
			}	  
	
		  }, 1500);
		  
		}  
	      
	}
	
	scrollOnPageLoad();

}); //jQuery(function($)
