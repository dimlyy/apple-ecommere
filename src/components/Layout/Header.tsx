"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import "@styles/header.scss";


const Header = () => {
  const liDropDown = true;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishListOpen, setWishListOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(true);
    setWishListOpen(false);
  };

  const handleWishlistToggle = () => {
    setIsCartOpen(false);
    setWishListOpen(true);
  }

  return (
    <div>
      {/* Header row 1 */}
      <div className="bg-[var(--body-color)] container w-full">
        <div className="h-20 px-4 flex flex-row justify-between items-center">

          {/* Logo */}
          <div className="flex items-center ml-3">
            <Link href="/">
              <div className="relative w-[140px] h-[80px]"> {/* Kích thước tùy chỉnh */}
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={850}
                  height={450} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative flex flex-row grow shrink basis-auto items-center rounded-3xl max-h-[inherit] mx-5 bg-[var(--container-color)]">
            <div className="mx-5 pd-4 flex w-full items-center border h-11 rounded-3xl overflow-hidden">
                <form className="flex flex-row relative w-full h-full items-center">
                  <input
                    className="flex min-w-[270px] h-full w-full bg-transparent pl-3 pr-11 outline-none"
                    placeholder="Tìm kiếm..."
                  />
                  <button
                    type="submit"
                    className="min-h-[unset] absolute right-1 w-[38px] h-[38px] bg-[var(--btn-color)] rounded-full flex items-center justify-center"
                  >
                    <i className="uil uil-search-alt flex items-center justify-center text-2xl font-normal text-[var(--container-color)]" />
                  </button>
                </form>
            </div>
          </div>

          {/* Infomatiom Contact */}
          <div className="flex flex-row m-h-[inherit] items-center justify-end mr-[-10px]">
            <div className="px-3 flex flex-row items-center">
              <i className="uil uil-envelope-download flex text-3xl mr-2"/>
              <div className="flex flex-col">
                <span className="text-medium">dimlytad@gmail.com</span>
                <span className="text-sm text-[var(--btn-color)]">+0378808834</span>
              </div>
            </div>

            <div className="px-3 flex flex-row items-center">
              <i className="uil uil-dribbble flex text-3xl mr-2"/>
              <div className="flex flex-col">
                <span className="text-medium">Toàn quốc</span>
                <span className="text-sm text-[var(--btn-color)]">Miễn phí giao hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header row 2 */}
      <div className="bg-slate-200 w-full mx-auto h-14">
        <div className="container flex flex-row items-center px-4 h-full">

          {/* Catergorie */}
          <div className="flex flex-rows h-11 items-center justify-center rounded-full bg-[var(--container-color)]">
              <span className="flex items-center justify-center h-9 w-9 bg-[var(--btn-color)] rounded-full mx-2 pd-3">
                <i className="uil uil-bars text-[var(--container-color)]"/>
              </span>
              <span className="flex text-base pr-3 font-light">Danh mục sản phẩm</span>
          </div>

          {/* Menu  */}
          <div className="flex flex-row shrink grow basis-auto items-center h-full">
            <ul className="flex flex-row h-full items-center">
              <li className="flex h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">
                  Sản phẩm
                </Link>
              </li>

              <li className="flex h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">
                  Tin tức
                </Link>
              </li>

              <li className="flex h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">
                   Giới thiệu sản phẩm
                </Link>
              </li>

              <li className="flex h-full ml-6 relative text-sm header_li-dropdown-active">
                <Link href="#" className="flex h-full items-center">
                   Sản phẩm nổi bật
                {liDropDown &&
                <span>
                  <i className="uil uil-angle-down ml-"/>
                  </span>}
                </Link>
                {/* Dropdown */}
                {liDropDown && <div className="header_li-dropdown absolute z-50 left-[-10px] top-10 mt-2 w-[220px] min-h-[40px] rounded-xl bg-[var(--container-color)] shadow-lg px-5 py-3">
                  <ul>
                    <li>
                      <Link className="flex w-full h-full py-2" href="#">
                        Sản phẩm 1
                      </Link>
                    </li>
                    
                    <li>
                      <Link className="flex w-full h-full py-2" href="#">
                        Sản phẩm 1
                      </Link>
                    </li>
                    <li>
                      <Link className="flex w-full h-full py-2" href="#">
                        Sản phẩm 1
                      </Link>
                    </li>
                    <li>
                      <Link className="flex w-full h-full py-2" href="#">
                        Sản phẩm 1
                      </Link>
                    </li>
                  </ul>
                </div>}
              </li>

              <li className="flex h-full ml-6 relative text-sm">
                <Link href="#" className="flex h-full items-center">
                   Liên hệ
                </Link>
              </li>

            </ul>
          </div>

          {/* Menu Cart */}
          <div className="flex flex-row items-center h-full">
            {/* User */}
            <div className="flex user-btn relative mr-6 h-11 w-11 bg-[var(--container-color)] rounded-full">
                <button className="flex relative h-full w-full items-center justify-center">
                  <span>
                    <i className="uil uil-user text-xl"/>
                  </span>
                </button>
                
                {/* User Dropdown */}
                <div className="user-dropdown absolute top-12 right-0 w-52 min-h-16 bg-[var(--container-color)] rounded-xl shadow-2xl">
                  <ul className="flex flex-col my-2 mx-3">
                    <li className="my-1">
                      <Link href="#">
                        <span className="text-sm font-light text-[var(--text-color)]">Thông tin người dùng</span>
                      </Link>
                    </li>

                    <li className="my-1">
                      <Link href="#">
                        <span className="text-sm font-light text-[var(--text-color)]">Chính sách cá nhân</span>
                      </Link>
                    </li>

                    <li className="my-1">
                      <Link href="#">
                        <span className="text-sm font-light text-[var(--text-color)]">Đổi mật khẩu</span>
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link href="#">
                        <span className="text-sm font-light text-[var(--text-color)]">Đăng xuất</span>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
            
            {/* Wish list */}
            <div className="flex mr-6 h-11 w-11 bg-[var(--container-color)] rounded-full">
                <button
                onClick={handleWishlistToggle}
                className="flex relative h-full w-full items-center justify-center">
                  <span>
                    <i className="uil uil-heart-alt text-xl"/>
                  </span>
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--btn-color)] border text-[var(--container-color)] border-slate-300 text-xs">0</span>
                </button>
            </div>

            {/* Cart */}
            <div className="flex h-11 w-11 bg-[var(--btn-color)] rounded-full">
                <button
                onClick={handleCartToggle}
                className="flex relative h-full w-full items-center justify-center">
                  <span>
                    <i className="uil uil-shopping-cart text-xl text-[var(--container-color)]"/>
                  </span>
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[var(--btn-color)] border text-[var(--container-color)] border-slate-300 text-xs">0</span>
                </button>
            </div>

            {/* Cart dropdown */}
            <div className={classNames(
                    "cart-dropdown",
                    "fixed w-[270px] right-0 top-0 border-s-2 h-[100vh] z-50 bg-[var(--container-color)]",
                    { active : isCartOpen}
                  )}>
                  <div className="mt-2 flex relative flex-col h-full ">

                    <div className="w-full h-10 mt-2 border-b-2 border-slate-500">
                      <span className="text-xl ml-3">Giỏ hàng</span>
                    </div>

                    {/* Close button */}
                      <button
                      onClick={()=> setIsCartOpen(false)}
                      className="absolute top-2 right-3">
                        <i className="uil uil-multiply text-[var(--title-color)] text-xl"/>
                      </button>

                      {/* Cart Item */}
                      <ul className="flex flex-col h-full mx-2 overflow-y-auto">
                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>

                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>

                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>
                      </ul>

                      <div className="flex items-center h-12 w-full justify-center mb-8">
                        <Link href="#" className="flex justify-center items-center bg-[var(--btn-color)] h-full rounded-2xl text-[var(--container-color)] w-60">Thanh toán</Link>
                      </div>
                  </div>
            </div>

            {/* Wishlist Dropdown (use with Cart Dropdown) */}
            <div className={classNames(
                    "cart-dropdown",
                    "fixed w-[270px] right-0 top-0 border-s-2 h-[100vh] z-50 bg-[var(--container-color)]",
                    { active : isWishListOpen}
                  )}>
                  <div className="mt-2 flex relative flex-col h-full ">

                    <div className="w-full h-10 mt-2 border-b-2 border-slate-500">
                      <span className="text-xl ml-3">Yêu thích</span>
                    </div>

                    {/* Close button */}
                      <button
                      onClick={()=> setWishListOpen(false)}
                      className="absolute top-2 right-3">
                        <i className="uil uil-multiply text-[var(--title-color)] text-xl"/>
                      </button>

                      {/* Wishlist Item */}
                      <ul className="flex flex-col h-full mx-2 overflow-y-auto">
                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>

                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>

                        <li className="flex h-20 mt-2 w-full">
                          <Link href="#" className="flex flex-row items-center shrink grow basis-auto">
                             <Image
                              src="https://vrtechvn.com/wp-content/uploads/2024/05/android_box_icon.jpg"
                              alt="categories"
                              width={24}
                              height={24}
                              className="flex max-w-none max-h-none w-14 h-14 object-contain"
                            />
                            <div className="flex flex-col whitespace-nowrap ml-2">
                                <span className="leading-7 whitespace-nowrap uppercase">Iphone 16 promax</span>
                                <span className="text-sm leading-7 text-[var(--btn-color)]">16.650.000 VND</span>
                            </div>
                          </Link>
                            <div className="flex items-center">
                              <button className="flex items-center">
                                <i className="uil uil-multiply text-[var(--title-color)] "/>
                              </button>
                            </div>
                        </li>
                      </ul>

                      <div className="flex items-center h-12 w-full justify-center mb-8">
                        <Link href="#" className="flex justify-center items-center bg-[var(--btn-color)] h-full rounded-2xl text-[var(--container-color)] w-60">Thanh toán</Link>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;