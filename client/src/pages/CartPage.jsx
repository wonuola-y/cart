import React, { useState } from 'react'

import logo from './tools/logo.svg'
import menu from './tools/menu.svg'

import settings from './tools/settings.svg'
import logout from './tools/logoout.svg'
import collapse from './tools/collapse.svg'

import search from './tools/search.svg'
import notification from './tools/notification.svg'
import user from './tools/user.svg'
import cart from './tools/cart.svg'
import addButton from './tools/addButton.svg'
import logoFooter from './tools/logoFooter.svg'
import copyright from './tools/copyright.svg'

import { Link } from 'react-router-dom'

const foodList = [
    {
        id: 1,
        img: 'ftone',
        foodname: ' Italian Huniati Recipe for out door party',
        em: 'Compare with similar item',
        alt: 'foodone',
        price: '$4.20',
        bin: 'bin',
    },
    {
        id: 2,
        img: 'fttwo',
        foodname: '  Fried rice recipe card with extra gift voucher',
        em: 'Compare with similar item',
        alt: 'foodtwo',
        price: '$4.20',
        bin: 'bin',
    },
    {
        id: 3,
        img: 'ftthree',
        foodname: ' How to get slim with lime and sugar',
        em: 'Compare with similar item',
        alt: 'foodthree',
        price: '$4.20',
        bin: 'bin',
    },
    {
        id: 4,
        img: 'ftfour',
        foodname: 'Learn how to prepare 100 cocktails drinks',
        em: 'Compare with similar item',
        alt: 'foodfour',
        price: '$4.20',
        bin: 'bin',
    },
]

const initialList = [
    {
        id: 1,
        img: 'ftone',
        foodname: ' Italian Huniati Recipe for out door party',
        em: 'Compare with similar item',
        alt: 'foodone',
    },
    {
        id: 2,
        img: 'fttwo',
        foodname: '  Fried rice recipe card with extra gift voucher',
        em: 'Compare with similar item',
        alt: 'foodtwo',
    },
    {
        id: 3,
        img: 'ftthree',
        foodname: ' How to get slim with lime and sugar',
        em: 'Compare with similar item',
        alt: 'foodthree',
    },
    {
        id: 4,
        img: 'ftfour',
        foodname: 'Learn how to prepare 100 cocktails drinks',
        em: 'Compare with similar item',
        alt: 'foodfour',
    },
]

const navList = [
    {
        id: 1,
        img: 'homeIcon',
        em: 'Home',
        alt: 'home icon',
    },
    {
        id: 2,
        img: 'receipt',
        em: 'Reciept',
        alt: 'receipt icon',
    },
    {
        id: 3,
        img: 'favorite',
        em: 'Favorite',
        alt: 'favorite icon',
    },
    {
        id: 4,
        img: 'explore',
        em: 'Explore',
        alt: 'explore icon',
    },
    {
        id: 5,
        img: 'templates',
        em: 'Templates',
        alt: 'templates icon',
    },
    {
        id: 6,
        img: 'blog',
        em: 'Blog',
        alt: 'blog icon',
    },
    {
        id: 7,
        img: 'publish',
        em: 'publish',
        alt: 'publish icon',
    },
    {
        id: 8,
        img: 'marketplace',
        em: 'Market',
        alt: 'market icon',
    },
    {
        id: 9,
        img: 'purchased',
        em: 'Purchased',
        alt: 'purchased icon',
    },
    {
        id: 10,
        img: 'categories',
        em: 'Categories',
        alt: 'categories icon',
    },
]

const recoList = [
    {
        id: 1,
        img: 'food-two',
        h3: 'Risotoo recipe card',
        em: '$70',
        alt: 'Risotoo food image',
    },

    {
        id: 2,
        img: 'food-three',
        h3: 'Fried rice fish receipe card',
        em: '$70',
        alt: 'Fried rice icon',
    },
    {
        id: 3,
        img: 'food-one',
        h3: 'Pasta si reciepe card',
        em: '$70',
        alt: 'FPasta si icon',
    },
    {
        id: 4,
        img: 'food-one copy',
        h3: 'Juice recipe card',
        em: '$70',
        alt: 'Juice receipe icon',
    },
    {
        id: 5,
        img: 'food-one copy 2',
        h3: 'Pea tea recipe card',
        em: '$70',
        alt: 'Pea tea recipe card icon',
    },
    {
        id: 6,
        img: 'food-one copy 3',
        h3: 'Haneroo Sause recipe card',
        em: '$70',
        alt: 'Haneroo Sause recipe card icon',
    },
    {
        id: 7,
        img: 'food-seven',
        h3: 'Sea food recipe card',
        em: '$70',
        alt: 'Sea food recipe card icon',
    },
]

function Header() {
    return (
        <>
            <div className="flex  justify-center items-center lg:hidden md:hidden">
                <div className="w-11/12">
                    <div className="flex justify-between py-3 px-3 ">
                        <img src={logo} alt="logo" />
                        <div className="flex flex-row-reverse w-1/4 justify-around">
                            <img src={menu} alt="menu" />
                            <img src={notification} alt="notification" />
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <button className=" font-abc bg-orange-500 text-white py-2 px-5 rounded-lg flex justify-center w-7/12">
                            <img
                                src={addButton}
                                alt="add-button"
                                className="flex justify-start w-2/8"
                            />
                            <em className=" font-abc not-italic w-8/12">
                                Create receipe
                            </em>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex  border border-solid rounded-lg w-11/12 py-3 px-2 my-5 border-orange-900 ">
                            <img src={search} alt="search" className="mx-4" />
                            <input
                                type="search"
                                name="search bar"
                                id=""
                                placeholder="Search for receipes"
                                className=" rounded-lg font-abc"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Tabview() {
    return (
        <>
            <div className="hidden md:block lg:hidden">
                <div>
                    <h1 className=" font-abc   md:text-3xl ">Cart</h1>
                    <em className=" font-abc not-italic md:text-red-500 " >
                        Deselect all templates
                    </em>
                </div>
                <div className="flex justify-center w-full mt-7 text-slate-500 text-center text-xl items-center font-abc border-solid border-2 border-green-500">
                    <h1>
                        {' '}
                        <b>
                            Your cart is empty and can not be filled now, due to
                            technical issues. Please come back later
                        </b>
                    </h1>
                </div>
            </div>
        </>
    )
}
function DesktopCart() {
    const [noOfRows, setNoOfRows] = useState('')
    const [list, setList] = useState(initialList)

    function handleRemove(id) {
        const newList = list.filter(item => item.id !== id)

        setList(newList)
        if (newList === null || newList === '') {
            console.log('empty')
        }
    }

    return (
        <>
            <DesktopHeader />
            <div className="hidden lg:block">
                <h1 className=" font-abc   md:text-3xl ">Cart</h1>
                <em
                    className=" font-abc not-italic md:text-red-500 cursor-pointer "
                    onClick={() => setNoOfRows(noOfRows - 1)}
                >
                    Deselect all templates
                </em>
                <hr className="w-11/12" />
                <div className="flex  h-3/4 justify-between my-5 ">
                    <div className="flex flex-col lg:w-2/3 mx-5   ">
                        {list.map(item => {
                            return (
                                <>
                                    <div key={item.id}>
                                        <div className="flex ">
                                            <div className="flex my-4 justify-between   w-full">
                                                <div className="w-6/12">
                                                    <img
                                                        src={require('./tools/' +
                                                            item.img +
                                                            '.svg')}
                                                        alt={item.alt}
                                                        className="w-10/12"
                                                    />
                                                </div>
                                                <div className="flex flex-col  justify-between w-6/12">
                                                    <div className="flex flex-col">
                                                        <h2 className=" font-abc text-lg my-4">
                                                            {item.foodname}
                                                        </h2>
                                                        <em className=" font-abc not-italic text-orange-500">
                                                            {item.em}
                                                        </em>
                                                    </div>
                                                    <div className="flex justify-between items-end">
                                                        <select
                                                            name="file"
                                                            id="file"
                                                        >
                                                            <option value="10mb">
                                                                File size{' '}
                                                                <img
                                                                    src={
                                                                        collapse
                                                                    }
                                                                />
                                                            </option>
                                                            <option value="10mb">
                                                                10mb
                                                            </option>
                                                            <option value="10mb">
                                                                10mb
                                                            </option>
                                                            <option value="10mb">
                                                                10mb
                                                            </option>
                                                        </select>
                                                        <button
                                                            className=" font-abc border-2 border-red-600 py-2 px-4 w-2/4  my-1 mx-1 rounded-md cursor-pointer"
                                                            onClick={() =>
                                                                handleRemove(
                                                                    item.id,
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                        <div className="flex justify-end ">
                            <em className=" font-abc not-italic">
                                Sub-total(3 items):{' '}
                                <b className=" font-abc ">$16.80</b>{' '}
                            </em>
                        </div>
                    </div>
                    <div className="flex flex-col lg:h-screen lg:justify-between items-center price lg:w-1/6 ">
                        <div>
                            <h1 className=" font-abc"> Price</h1>
                            <b className=" font-abc">$ 4.20</b>
                        </div>

                        <div>
                            <b className=" font-abc  ">$ 4.20</b>
                        </div>
                        <div>
                            <b className=" font-abc  ">$ 4.20</b>
                        </div>
                        <div className="border-solid">
                            <b className=" font-abc ">$ 4.20</b>
                        </div>
                    </div>
                    <div className="flex flex-col reco lg:w-2/4">
                        <div className="px-7 flex flex-col justify-between bg-orange-70 mx-9  py-4">
                            <h1 className=" font-abc">
                                {' '}
                                Sub-total(4-items): $16.80
                            </h1>
                            <button className=" font-abc bg-orange-600 text-white py-2 px-2 my-3 rounded-md w-11/12">
                                Proceed to check out
                            </button>
                        </div>
                        <div className="recommendations px-5  py-4  bg-orange-70 mx-9 my-7">
                            <h2 className=" font-abc font-bold  text-xl">
                                Recommendations
                            </h2>

                            <section>
                                {recoList.map(each => {
                                    return (
                                        <>
                                            <div className="w-full text-sm my-4 ">
                                                <div className="flex justify-between   ">
                                                    <img
                                                        src={require('./tools/' +
                                                            each.img +
                                                            '.svg')}
                                                        alt={each.alt}
                                                        className=" w-1/2"
                                                    />
                                                    <div className="flex flex-col justify-between mx-4">
                                                        <h3 className=" font-abc">
                                                            {each.h3}
                                                        </h3>
                                                        <em className=" font-abc not-italic">
                                                            {each.em}
                                                        </em>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function DesktopHeader() {
    return (
        <>
            <div className="hidden md:flex md:my-5 lg:flex md:justify-between">
                <div className="flex  border border-solid rounded-lg py-3 px-2  border-slate-600  ">
                    <img src={search} alt="search" className="mx-4" />
                    <input
                        type="search"
                        name="search bar"
                        id=""
                        placeholder="Search for receipes"
                        className=" rounded-lg md:w-3/3 font-abc"
                    />
                </div>
                <div className="flex justify-evenly w-5/12">
                    <div className="flex items-center mx-4">
                        <img src={notification} alt="notification" />
                    </div>
                    <div className="flex items-center">
                        <img src={user} alt="user" />
                        <em className=" font-abc not-italic mx-2">User</em>
                    </div>
                    <div className="flex items-center">
                        <img src={cart} alt="cart" className="w-2/3" />
                        <em className=" font-abc not-italic mx-2">cart</em>
                    </div>
                </div>
            </div>
        </>
    )
}
function DesktopNav() {
    return (
        <>
            <div className="hidden md:w-11/12 md:h-screen lg:h-full md:bg-orange-50 md:flex md:justify-center ">
                <div className="flex flex-col px-3 justify-between py-5">
                    <div className="h-1/6">
                        <img src={logo} alt="logo" />
                    </div>
                    <section className="h-5/6 ">
                        {navList.map(items => {
                            return (
                                <>
                                    <div className="flex flex-col  md:h-1/6 lg:h-14 ">
                                        <div
                                            className="flex w-1/4"
                                            key={items.id}
                                        >
                                            <img
                                                src={require('./tools/' +
                                                    items.img +
                                                    '.svg')}
                                                alt={items.alt}
                                                className="mx-4"
                                            />
                                            <em className=" font-abc not-italic text-gray-400 ">
                                                <Link to="/">{items.em}</Link>
                                            </em>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </section>

                    <div className="flex flex-col ">
                        <div className="flex mx-4 justify-between w-6/12">
                            <img
                                src={settings}
                                alt="settings"
                                className="mx-4"
                            />
                            <em className=" font-abc not-italic">Settings</em>
                        </div>
                        <div className="flex mx-4 my-9 justify-between ">
                            <img src={logout} alt="log-out" className="mx-4" />
                            <em className=" font-abc not-italic text-red-600">
                                Log out
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Footer() {
    return (
        <>
            <div className=" flex-col  lg:flex lg:flex-col lg:justify-center h-full bg-orange-500  ">
                <div className=" flex justify-between lg:justify-around  lg:flex-row flex-col  w-full lg:py-4 lg:0 pt-16 lg:my-20 px-8 ">
                    <div className="lg:w-1/4 lg:flex-col  justify-between ">
                        <img
                            src={logoFooter}
                            alt="logo"
                            className="w-3/4 lg:2/4 mb-10"
                        />
                        <div className="h-20 flex flex-col justify-center ">
                            <em className=" font-abc not-italic text-white my-3">
                                <b className=" font-abc ">
                                    Get in touch with us
                                </b>
                            </em>
                            <h3 className=" font-abc text-white text-xl">
                                Subscribe to our Newsletter
                            </h3>
                            <input
                                type="text"
                                name=""
                                placeholder="Enter your email address"
                                id=""
                                className="rounded-md py-2 my-1 font-abc px-3 "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  justify-between w-2/4 mt-20 ">
                        <div className="flex flex-col justify-between ">
                            <h4 className=" font-abc text-white text-xl">
                                <b className=" font-abc ">Company</b>
                            </h4>
                            <em className=" font-abc not-italic text-white">
                                About Us
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Our Offers
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Terms of Service
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Privacy Policy
                            </em>
                        </div>
                        <div className="flex flex-col justify-between mt-10 lg:mt-0 ">
                            <h4 className=" font-abc text-white text-xl">
                                <b className=" font-abc ">Resources</b>
                            </h4>
                            <em className=" font-abc not-italic text-white">
                                About Us
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Our Offers
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Terms of Service
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Privacy Policy
                            </em>
                        </div>
                        <div className="flex flex-col justify-between mt-10 mb-10 lg:mt-0  ">
                            <h4 className=" font-abc text-white text-xl">
                                <b className=" font-abc ">Contact</b>
                            </h4>
                            <em className=" font-abc not-italic text-white">
                                About Us
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Our Offers
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Terms of Service
                            </em>
                            <em className=" font-abc not-italic text-white">
                                Privacy Policy
                            </em>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="w-11/12" />
                    <div className="flex my-8 mx-16">
                        <img src={copyright} alt="copyright" />
                        <h2 className="font-abc mx-4 text-white">
                            2022 Kitchen Diary. All rights reserved
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

function CartPage() {
    
    const [list, setLists] = useState(foodList)
    function handleRemoved(id) {
        const newField = foodList.filter(item => item.id !== id)
        setLists(newField)
        console.log(id);
    }
    return (
        <>
            <div className="hidden lg:block">
                <div className="flex w-screen">
                    <div className="md:flex lg:flex hidden md:w-1/3 lg:w-1/4">
                        <DesktopNav />
                    </div>
                    <div className="md:w-2/3 lg:w-11/12">
                        <DesktopCart />
                        <Tabview />
                    </div>
                </div>
                <Footer className="hidden lg:block" />
            </div>

            <Header />
            <div className="container flex flex-col h-screen lg:hidden md:hidden">
                <div className="flex justify-center  flex-col">
                    <div className="w-12/12 flex justify-center ">
                        <div className="flex flex-col justify-center w-10/12   ">
                            <div className="flex flex-col  ">
                                <h1 className=" font-abc  text-3xl text-center  md:text-red-500">
                                    Cart
                                </h1>
                                {/* <em className=" font-abc not-italic font-bold">
                  Sub-total $0.00
                </em> */}
                                <em className=" font-abc not-italic font-bold">
                                    Sub-total $16.80
                                </em>
                            </div>

                            {/* <div className="sm:hidden x summary flex flex-col justify-center items-center ">
                <button className=" font-abc bg-orange-500 py-3 px-5 rounded-md w-10/12 my-6 text-white">
                  No item selected (0 items)
                </button>
              </div> */}

                            <div className=" x summary flex flex-col justify-center items-center ">
                                <button className=" font-abc bg-orange-500 py-3 px-5 rounded-md w-10/12 my-6 text-white">
                                    Proceed to check out (3 items)
                                </button>
                            </div>
                            <div className="flex flex-col">
                                {list.map(item => {
                                    return (
                                        <>
                                            <div >
                                                <div className="flex" key={item.id}>
                                                    <div className="flex my-4 justify-between w-full ">
                                                        <div className="w-6/12 flex flex-col ">
                                                            <img
                                                                src={require('./tools/' +
                                                                    item.img +
                                                                    '.svg')}
                                                                alt={item.alt}
                                                                className=" w-full "
                                                            />
                                                            <em className=" font-abc text-xs mt-1 not-italic text-orange-500">
                                                                {item.em}
                                                            </em>
                                                        </div>
                                                        <div className="flex flex-col w-5/12  justify-between">
                                                            <div className="flex flex-col w-32 ">
                                                                <h2 className=" font-abc text-xs mb-3">
                                                                    {
                                                                        item.foodname
                                                                    }
                                                                </h2>

                                                                <b>
                                                                    {item.price}
                                                                </b>
                                                            </div>
                                                            <div className="flex justify-between flex-row-reverse mb-4 ">
                                                                <select
                                                                    name="file"
                                                                    id="file"
                                                                >
                                                                    <option value="10mb">
                                                                        File
                                                                        size{' '}
                                                                        <img
                                                                            src={
                                                                                collapse
                                                                            }
                                                                        />
                                                                    </option>
                                                                    <option value="10mb">
                                                                        10mb
                                                                    </option>
                                                                    <option value="10mb">
                                                                        10mb
                                                                    </option>
                                                                    <option value="10mb">
                                                                        10mb
                                                                    </option>
                                                                </select>
                                                               
                                                                    <img className=" font-abc  cursor-pointer"
                                                                        src={require('./tools/' +
                                                                            item.bin +
                                                                            '.svg')}
                                                                        alt="bin"
                                                                        onClick={() =>
                                                                            handleRemoved(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    />
                                                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div>
                                <div className="cart-items"></div>
                                <div className="cart-price text-right">
                                    <em className=" font-abc not-italic font-bold">
                                        Sub-total $16.80
                                    </em>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recommendations px-5  py-4  mx-9 my-7">
                        <h2 className=" font-abc font-bold  text-xl">
                            Recommendations
                        </h2>

                        <section>
                            {recoList.map(each => {
                                return (
                                    <>
                                        <div className="w-full text-sm my-4 ">
                                            <div className="flex justify-between   ">
                                                <img
                                                    src={require('./tools/' +
                                                        each.img +
                                                        '.svg')}
                                                    alt={each.alt}
                                                    className="w-6/12"
                                                />
                                                <div className="flex flex-col justify-between mx-4 w-4/12">
                                                    <h3 className=" font-abc">
                                                        {each.h3}
                                                    </h3>
                                                    <em className=" font-abc not-italic">
                                                        {each.em}
                                                    </em>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </section>
                    </div>

                    <Footer className />
                </div>
            </div>
        </>
    )
}

export default CartPage
