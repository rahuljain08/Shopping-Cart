function fetchProducts(done) {
	// let product_list;
	$.get("./api/products", (products) => done(products));

}

function createProductCard(product) {
	return `
	<div class="col">
		<div class="card">
			<div class="card-body" style="padding: auto;">
				<div class="row">
					<h5 class="card-title">${product.name}</h5>
					<p class="card-text">${product.manufacturer}</p>
				</div>
				<div class="row" style="margin-top: 10px;">
					<div class="col" style="margin: auto;">
					Price: ${product.price}
					</div>
					<button type="button" class="btn btn-primary col" >Buy</button>
				</div>
			</div>
		</div>
	</div>
	`
}