var tugasPJWProfileKelompok = {
	initializeCard: function() {
		$('.card').hide();
		$('#1').show();
		
	},

	navTextClickListener: function() {
		$('.js-navText').click(function() {
			var destId = $(this).attr("data-target");

			$('.card').hide();
			$(destId).show();

			$('li').removeClass('active');
			$(this).parent('li').addClass('active');
		});
	},

	init: function() {
		this.initializeCard();
		this.navTextClickListener();
	}
};


$(document).ready(function() {
    tugasPJWProfileKelompok.init();
});