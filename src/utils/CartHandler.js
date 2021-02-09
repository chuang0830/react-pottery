export default {
  cartName: 'utsuwaCart',
  cart: null,
  init: function () {
    const cartStr = localStorage.getItem(this.cartName)
    if (!cartStr) {
      this.cart = []
      localStorage.setItem(this.cartName, '[]')
    } else {
      try {
        this.cart = JSON.parse(cartStr)
      } catch (ex) {
        this.cart = []
      }
    }
    console.log('this.cart:', this.cart)
  },
  updateCart: function () {
    localStorage.setItem(this.cartName, JSON.stringify(this.cart))
  },
  hasItem: function (item) {
    if (!this.cart) {
      this.init()
    }
    for (let i of this.cart) {
      if (i.sid === item.sid) {
        return true
      }
    }
    return false
  },
  addItem: function (item) {
    if (!this.hasItem(item)) {

      this.cart.push(item)
      this.updateCart()
    }
  },
  removeItem: function (sid) {},
  modifyQuantity: function (sid, q) {},
}
