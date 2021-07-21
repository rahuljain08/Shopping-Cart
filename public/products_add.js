$("#btnProductAdd").click(() => {

	$.post("./api/products", 
		{name: $("#productName").val(),
		manufacturer: $("#productManufacturer").val(),
		price: $("#productPrice").val()},
		(addedProduct) => {
			window.alert(`Added product ${addedProduct.name} to Database!`);
		}

	)
	

})