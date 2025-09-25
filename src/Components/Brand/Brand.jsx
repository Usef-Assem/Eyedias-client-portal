import { memo } from 'react';
import logo from '../../assets/logo.svg';


const Brand =memo(function Brand({ width, height }){
  return (
    <a
      href="/"
      id="header-brand"
      className="flex bg-[#FF5758] flex-col justify-center items-center"
    >
      <img width={width} height={height} src={logo} alt="my app theme logo" />
    </a>
  );
})
export default Brand;
