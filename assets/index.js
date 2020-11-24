var total = 0;
var subTotal = 0;
var finalTotal = 0;
var shipping = 0;
var discount = 0;
var subTax = 0;
var tax = 0;

$("#totShip").on("click", function(){
    $("#finalTax").text("")
    $("#finalDis").text("")
    $("#finalShip").text("")
    $("#finalTotal").text("")
    total = $("#initTotal").val();
    console.log("total", total)
    shippingUS(total)
    console.log("shipping", shipping)
    finalTotal = parseFloat(total) + parseFloat(shipping)
    $("#finalShip").text(shipping.toFixed(2))
    $("#finalTotal").text(finalTotal.toFixed(2))

})

function shippingUS(amount){
    console.log("amount", amount)
    if (amount > 0 && amount <= 25){
        shipping = 6
    } else if (amount > 25.01 && amount <= 75) {
        shipping = 10
    } else if (amount > 75.01 && amount <= 125) {
        shipping = 15
    } else if (amount > 125.01 && amount <= 300){
        shipping = 20
    } else {
        shipping = 30
    }
}

function shippingCan(amount){
    console.log("amount", amount)
    if (amount > 0 && amount <= 25){
        shipping = 10
    } else if (amount > 25.01 && amount <= 75) {
        shipping = 20
    } else if (amount > 75.01 && amount <= 125) {
        shipping = 30
    } else if (amount > 125.01 && amount <= 300){
        shipping = 50
    } else {
        shipping = 60
    }
}

$("#totDisShip").on("click", function(){
    $("#finalTax").text("")
    $("#finalDis").text("")
    $("#finalShip").text("")
    $("#finalTotal").text("")
    total = $("#initTotal").val();
    console.log("total", total)
    totDisShip()
    console.log("discount", discount)
    subTotal = total - discount
    console.log("Subtotal", subTotal)
    shippingUS(subTotal)
    console.log("shipping", shipping)
    finalTotal = subTotal + shipping
    $("#finalDis").text(discount.toFixed(2))
    $("#finalShip").text(shipping.toFixed(2))
    $("#finalTotal").text(finalTotal.toFixed(2))

})

function totDisShip(){
    total = $("#initTotal").val();
    discount = total * .30
    
}

$("#totDisShipTax").on("click", function(){
    $("#finalTax").text("")
    $("#finalDis").text("")
    $("#finalShip").text("")
    $("#finalTotal").text("")
    total = $("#initTotal").val();
    console.log("total", total)
    totDisShip()
    console.log("discount", discount)
    subTotal = total - discount
    console.log("Subtotal", subTotal)
    shippingUS(subTotal)
    console.log("shipping", shipping)
    addTax(subTotal)
    console.log("subTax", subTax)
    finalTotal = subTax + shipping
    $("#finalTax").text(tax.toFixed(2))
    $("#finalDis").text(discount.toFixed(2))
    $("#finalShip").text(shipping.toFixed(2))
    $("#finalTotal").text(finalTotal.toFixed(2))

})

function addTax(taxable){
    tax = taxable * .075
    subTax = subTotal + tax
}

// ---------------------------------------------------

$("#totShipCan").on("click", function(){
    $("#finalTax").text("")
    $("#finalDis").text("")
    $("#finalShip").text("")
    $("#finalTotal").text("")
    total = $("#initTotal").val();
    console.log("total", total)
    shippingCan(total)
    console.log("shipping", shipping)
    finalTotal = parseFloat(total) + parseFloat(shipping)
    $("#finalShip").text(shipping.toFixed(2))
    $("#finalTotal").text(finalTotal.toFixed(2))

})

$("#totDisShipCan").on("click", function(){
    $("#finalTax").text("")
    $("#finalDis").text("")
    $("#finalShip").text("")
    $("#finalTotal").text("")
    total = $("#initTotal").val();
    console.log("total", total)
    totDisShip()
    console.log("discount", discount)
    subTotal = total - discount
    console.log("Subtotal", subTotal)
    shippingCan(subTotal)
    console.log("shipping", shipping)
    finalTotal = subTotal + shipping
    $("#finalDis").text(discount.toFixed(2))
    $("#finalShip").text(shipping.toFixed(2))
    $("#finalTotal").text(finalTotal.toFixed(2))
})