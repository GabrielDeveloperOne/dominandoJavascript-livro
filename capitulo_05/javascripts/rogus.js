function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var text = floatToMoneyText(value);
	$("#total").text(text);
}

function calculateTotalProducts() {
	var items = $(".item");
	var total = 0;

	$(items).each(function(pos, item) {
		var $item = $(item);
		var quantity = moneyTextToFloat($item.find(".quantity").val());
		var price = moneyTextToFloat($item.find(".price").text());
		total += quantity * price;
	});

	return total;
}

$(function() {
$(".quantity").change(function(){
	writeTotal(calculateTotalProducts());
	});
});