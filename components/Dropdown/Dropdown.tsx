import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Dropdown() {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center outline-none"
          aria-label="Customise options"
        >
          <svg width="64" className="text-black dark:text-white" aria-hidden="true" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 24C4 21.2386 6.47176 19 9.52083 19C12.5699 19 15.0417 21.2386 15.0417 24C15.0417 26.7614 12.5699 29 9.52083 29C6.47176 29 4 26.7614 4 24ZM12.8333 24C12.8333 22.3431 11.3503 21 9.52083 21C7.69139 21 6.20833 22.3431 6.20833 24C6.20833 25.6569 7.69139 27 9.52083 27C11.3503 27 12.8333 25.6569 12.8333 24ZM21.0417 24C21.0417 21.2386 23.5135 19 26.5626 19C29.6117 19 32.0834 21.2386 32.0834 24C32.0834 26.7614 29.6117 29 26.5626 29C23.5135 29 21.0417 26.7614 21.0417 24ZM29.8751 24C29.8751 22.3431 28.392 21 26.5626 21C24.7331 21 23.2501 22.3431 23.2501 24C23.2501 25.6569 24.7331 27 26.5626 27C28.392 27 29.8751 25.6569 29.8751 24ZM43.6043 19C40.5553 19 38.0835 21.2386 38.0835 24C38.0835 26.7614 40.5553 29 43.6043 29C46.6534 29 49.1252 26.7614 49.1252 24C49.1252 21.2386 46.6534 19 43.6043 19ZM43.6043 21C45.4338 21 46.9168 22.3431 46.9168 24C46.9168 25.6569 45.4338 27 43.6043 27C41.7749 27 40.2918 25.6569 40.2918 24C40.2918 22.3431 41.7749 21 43.6043 21Z" fill="currentColor" />
            </g>
            <defs>
              <filter id="filter0_d" x="-3" y="0" width="61" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>

        </button>

      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>


        <DropdownMenu.Content className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" >

          <DropdownMenu.Item className="my-1 group cursor-pointer text-[15px] leading-none text-white rounded-[3px] flex items-center  dark:text-white  bg-red-400 justify-center p-3 relative outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-red-300 ">
            Bookmark
          </DropdownMenu.Item>

          <DropdownMenu.Item className="my-1 group cursor-pointer text-[15px] leading-none text-white rounded-[3px] flex items-center  dark:text-white  bg-red-400 justify-center p-3 relative outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-red-300 ">
            Share
          </DropdownMenu.Item>
          <DropdownMenu.Item className="my-1 group cursor-pointer text-[15px] leading-none text-white rounded-[3px] flex items-center  dark:text-white  bg-red-400 justify-center p-3 relative outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-red-300 ">
            Report
          </DropdownMenu.Item>
        </DropdownMenu.Content>

      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
