/* eslint-disable no-unused-vars */
import { FaTrash } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  // handleDecrement function
  const handleDecrement = (item) => {
    // console.log(item._id);
    if (item.quantity > 1) {
      fetch(`http://localhost:4000/cart/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const newCart = cartItems.map((cartItem) => {
            if (cartItem.id === item._id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          setCartItems(newCart);
          location.reload();
        });
      location.reload();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Minimum quantity is 1",
        icon: "error",
        timer: 1500,
      });
    }
  };

  // handleIncrement function
  const handleIncrement = (item) => {
    // console.log(item._id);
    fetch(`http://localhost:4000/cart/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newCart = cartItems.map((cartItem) => {
          if (cartItem.id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        setCartItems(newCart);
        location.reload();
      });
    location.reload();
  };

  // handle delete
  const handleDelete = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${item.name} Removed from cart.`,
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="section-container">
      <div className="py-36 flex flex-col justify-center items-center gap-8">
        <div className="space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug">
            Items You Added to
            <span className="text-green"> Cart</span>
          </h2>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white rounded-sm text-sm">
              <th>#</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 overflow-hidden cursor-pointer">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{item.name}</td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => console.log(e.target.value)}
                    className="w-10 mx-2 text-center overflow-hidden appearance-none outline-none border-none bg-transparent text-white"
                  />

                  <button
                    className="btn btn-xs"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <th className="">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="text-red" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* user details */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-center  ">
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium">Customer Details</h3>
          <p>
            Name: {user ? user.displayName : "Login or update profile to see"}
          </p>
          <p>Email: {user ? user.email : "Anonymous Email"}</p>
          <p>User ID: {user ? user.uid : "Anonymous ID"}</p>
        </div>
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium">Shopping Details</h3>
          <p>Total Items: {cart.length}</p>
          <p>
            Total Price: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button className="btn btn-ghost bg-green text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
