

/*
**script menu mobile**
*/
$(document).ready(function(){
      $('.dropdown .btn_n').click(function(){
        $('.dropdown ul').toggle('slow');
      });
	
	/*
	**Script do Slideshow
	*/
	
	$('#slideshow figure').fadeOut('fast');
	$('#slideshow figure:eq(0)').addClass('ativo').fadeIn(600);
	
		/*Slide crescente*/
		function slide(){						
			
			if($('#slideshow .ativo').next().size()){			
				$('.ativo').fadeOut(600).removeClass('ativo').next().addClass('ativo').fadeIn(600);
			}else{
				$('.ativo').fadeOut(600).removeClass('ativo');
				$('#slideshow figure:eq(0)').addClass('ativo').fadeIn(600);
			}			
		}
			/*Slide decrescente */
		function slide_prev(){
			if($('#slideshow .ativo').prev().size()){			
					$('.ativo').fadeOut(600).removeClass('ativo').prev().addClass('ativo').fadeIn(600);
				}else{
					$('.ativo').fadeOut(600).removeClass('ativo');
					$('#slideshow figure:last-child()').addClass('ativo').fadeIn(600);
				}
		}
		/*Intervalo de execução de cada slide*/
		setInterval(slide,8000);
		
		/*Controles do slide*/				
		$('#anterior').click(slide_prev);
		$('#proximo').click(slide);
	
    });