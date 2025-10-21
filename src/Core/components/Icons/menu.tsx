import { IconComponent } from "@/Core/types/Icon";

const MenuIcon: IconComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default MenuIcon;
