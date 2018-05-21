function setupStoryEvent() {

	//CLEAR ALL LOCALSTORAGE OBJECTS
	localStorage.clear();

	// SET UP LOCALSTORAGE OBJECTS
	localStorage.setItem('hanDeath', 'false');
	localStorage.setItem('itemRadiator', 'false');
	localStorage.setItem('itemHose', 'false');
	localStorage.setItem('itemTool', 'false');
}

function checkStoryEvent() {
	if( localStorage.getItem('itemRadiator') == 'true' ) {
		$('#buttonHangar').fadeOut(0);
		$('#textRadiator').css({color:'rgba(200,200,200,1)'});
	}
	if( localStorage.getItem('itemHose') == 'true' ) {
		$('#buttonWorkshop').fadeOut(0);
		$('#textHose').css({color:'rgba(200,200,200,1)'});
	}
	if( localStorage.getItem('itemTool') == 'true' ) {
		$('#buttonOffice').fadeOut(0);
		$('#textTool').css({color:'rgba(200,200,200,1)'});
	}
}