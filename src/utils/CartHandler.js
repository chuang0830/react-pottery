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
      alert('已加入購物車')
    }
  },
  removeItem: function (sid) {
    // this.cart = this.cart.filter((item) => item.sid !== sid)
    localStorage.removeItem(JSON.stringify(this.cart))
  },
  removeAll: function () {
    this.cart = []
    //測試用
    //localStorage.clear()
  },
  // modifyQuantity: function (sid, q) {},
}
