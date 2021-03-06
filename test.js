var cart = [];

// Ejercicio 2 agregar un producto a la carretilla
var cflAddToCart = (productId, quantity, callback) => {
    try {
        cart.push({
            productId: productId,
            quantity: quantity,
        });
        callback(null, true);
    } catch (error) {
        callback(error, false);
    }
}

// Ejercicio 3 devolver todos los productos del carrito en un especifico formato
var cflGetCart = (callback) => {
    var cartPayload = {
        items: [],
        currency: "",
    };
    try {
        // Este array es el de los items para luego darles formato lo declare solo asi, por que no se si estan en el storage o como se obtienen.
        const itemsInCart = cart;
        itemsInCart.forEach( function (value) {
            cartPayload.items.push({
                id: value.id,
                name: value.name,
                price: value.price,
                originalPrice: value.originalPrice,
                quantity: value.quantity
            });
        });
        cartPayload.currency = 'USD';
        callback(null, cartPayload);
    } catch (error) {
        callback(error, cartPayload);
    }
}

// Ejercicio 4 Mensajes con conectores logicos
function evaluate(cart, url, total) {
    const isCartUrlAndPromotionProductPresent = verifyIsCartUrlAndPromotionProductPresent(cart, url);
    if (total > 0 && total < 39.99) {
        alert('Agrega $(39.99 – TOTAL) a tu carrito para obtener Free Shipping.');
    } else if (total > 39.99) {
        alert('Felicidades!  Finaliza  tu  compra  y  tendrás  Free Shipping.<button>Checkout</button>');
    } else if (isCartUrlAndPromotionProductPresent) {
        alert('Agrega un “12345” más a tu carrito y obtén $40 de descuento.');
    }
}

function verifyIsCartUrlAndPromotionProductPresent(cart, url) {
    var isProductPresent = false;
    cart.forEach(x => {
        if (x.sku = '12345') {
            isProductPresent = true
        }
    })

    if (isProductPresent && url === 'https://www.brilliant.co/cart') {
        return true
    }
    return false
}
