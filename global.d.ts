declare module 'cheeseburger-menu' { 
  const IProps: {
    isOpen?: boolean,
    closeCallback?: () => void,
  }
  const CheeseburgerMenu: React.FC<IProps>
  export default CheeseburgerMenu
}

declare module 'react-hamburger-menu' {
  const IProps: {
    isOpen?: boolean,
    width?: number | string,
    height?: number | string,
    strokeWidth?: number | string,
    animationDuration?: number | string,
    rotate?: number | string,
    color?: string,
    borderRadius?: number | string,
    className?: string,
    menu?: () => void,
  }
  const HamburgerMenu: React.FC<IProps>
  export default HamburgerMenu
}