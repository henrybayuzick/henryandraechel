$(function(){
  $.scrollIt({
  	 topOffset: -95  
  });
});

$(function(){
	$("[data-getting-married]").typed({
		strings: ['getting married.', 'tying the knot.', 'saying "I do!"', 'goin’ to the chapel.', 'taking the plunge.', 'settling down.', 'buying the cow.'],
		typeSpeed: 20,
		backSpeed: 20,
		backDelay: 1000,
		loop: 1
	});
});

$('[data-masonry]').masonry({
  itemSelector: '.brick',
});

$('[data-number-in-party]').change(function(){
	var numberSelected = $(this).val();

	appendFields(numberSelected);
});

function appendFields(numberSelected) {
	var fieldNumber = 1;
	$('[data-party-fields]').empty();

	for (var i=0; i<numberSelected; i++) {
		$('[data-party-fields]').append('<h3 class="mt3">Name '+fieldNumber+'</h3><input placeholder="Full name" class="input mt1 full-width" name="Name '+fieldNumber+'" required>');
		fieldNumber++;
	}
}

$('[data-coming]').change(function(){
	var answerSelected = $(this).val();

	if (answerSelected == "No") {
		$('[data-number-in-party]').attr('disabled', ''); 
		$('[data-song]').attr('disabled', ''); 
		$('[data-number-in-party]').removeAttr('required');
	} else {
		$('[data-number-in-party]').attr('required', ''); 
		$('[data-song]').removeAttr('disabled');
		$('[data-number-in-party]').removeAttr('disabled');
	}
});



var names = [
   { value: 'Morgan Callender', data: 'Morgan Callender' },
   { value: 'The Snyder Family', data: 'The Snyder Family' },
   { value: 'The Mattocks Family', data: 'The Mattocks Family' },
   { value: 'Marilyn Phillips', data: 'Marilyn Phillips' },
   { value: 'The Phillips Family', data: 'The Phillips Family' },
   { value: 'The Boylan Family (Mark)', data: 'The Boylan Familsy' },
   { value: 'The Boylan Family (Rob)', data: 'The Boylan Family' },
   { value: 'Mike & Loretta Phillips', data: 'Mike & Loretta Phillips' },
   { value: 'Bob & Bonnie Boylan', data: 'Bob & Bonnie Boylan' },
   { value: 'Jerry & Darlene Phillips', data: 'Jerry & Darlene Phillips' },
   { value: 'The Lingle Family', data: 'The Lingle Family' },
   { value: 'Chelsie Robertson', data: 'Chelsie Robertson' },
   { value: 'Jonn Snyder', data: 'Jonn Snyder' },
   { value: 'Don & Linda Snyder', data: 'Don & Linda Snyder' },
   { value: 'Dorthy Fuller', data: 'Dorthy Fuller' },
   { value: 'Gwen & Harry Boylan', data: 'Gwen & Harry Boylan' },
   { value: 'The Mercer Family', data: 'The Mercer Family' },
   { value: 'Delaney Janoski', data: 'Delaney Janoski' },
   { value: 'John Matthew Lawerence IV', data: 'John Matthew Lawerence IV' },
   { value: 'Julie & Rick Adams', data: 'Julie & Rick Adams' },
   { value: 'The Radabaugh Family', data: 'The Radabaugh Family' },
   { value: 'The Duggan Family', data: 'The Duggan Family' },
   { value: 'Charlotte N. Molrine', data: 'Charlotte N. Molrine' },
   { value: 'Charlotte J. Molrine', data: 'Charlotte J. Molrine' },
   { value: 'The Bayuzick Family', data: 'The Bayuzick Family' },
   { value: 'Nick Gilson', data: 'Nick Gilson' },
   { value: 'Melissa Shorts', data: 'Melissa Shorts' },
   { value: 'Zachary Feuerstein', data: 'Zachary Feuerstein' },
   { value: 'Denise Newman', data: 'Denise Newman' },
   { value: 'The Peters Family', data: 'The Peters Family' },
   { value: 'Kim Peters', data: 'Kim Peters' },
   { value: 'Garrett Lafferty', data: 'Garrett Lafferty' },
   { value: 'Zachary Gill', data: 'Zachary Gill' },
   { value: 'Dan & Cookie Sheldon', data: 'Dan & Cookie Sheldon' },
   { value: 'Branden Peters', data: 'Branden Peters' }, 
   { value: 'Maia Bayuzick', data: 'Maia Bayuzick' },
   { value: 'Nancy Bayuzick-Gallagher', data: 'Nancy Bayuzick-Gallagher' },
   { value: 'David & Katie White', data: 'David & Katie White' },
  

];

$('[data-name]').autocomplete({
    lookup: names,
    // onSelect: function (suggestion) {
    //     alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    // }
});