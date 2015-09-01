
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
	$('#slideshow figure:eq(0)').addClass('ativo').fadeIn(1000);
	
		function slide(){
			
			if($('#slideshow .ativo').next().size()){
				
				$('.ativo').fadeOut(2000).removeClass('ativo').next().addClass('ativo').fadeIn(2000);
			}else{
				$('.ativo').fadeOut(2000).removeClass('ativo');
				$('#slideshow figure:eq(0)').addClass('ativo').fadeIn(2000);
			}			
		}
		setInterval(slide,6000);
    });