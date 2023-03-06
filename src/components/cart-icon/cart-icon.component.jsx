import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-name"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon;