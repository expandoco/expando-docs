$(function () {
	$('pre.scissr-syntax code').each(function () {
	   	$(this).html($(this).html().replace(/(\,|\:|\'|\*|\@|\(|\)|\=|xml|json)/g, '<span class="scissr-operator">$1</span>'));
	    	$(this).html($(this).html().replace(/(string|int|float|date|bool)/g, '<span class="scissr-type">$1</span>'));
	});

  	$('[data-toggle="offcanvas"]').click(function () {
   		$('.row-offcanvas').toggleClass('active')
  	});

  	hljs.configure({
  		tabReplace: '    ', // 4 spaces
  		classPrefix: ''     // don't append class prefix
                      // … other options aren't changed
	})
	
	hljs.initHighlighting();
});