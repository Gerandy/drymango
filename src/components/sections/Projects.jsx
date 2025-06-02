import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import product1 from "../../assets/icon.png";
import product2Img from "../../assets/product2.png";

const products = [
	{
		id: 1,
		name: "Dried Manggo Bliss Bites",
		description: "Enjoy the natural sweetness of sun-ripened mangoes from the Philippines! Soft, chewy, and bursting with tropical flavor — perfect for snacking anytime, anywhere.",
		price: 150,
		tech: ["100% Real Mango", " No Preservatives", "Rich in Vitamins A & C"],
		image: product1,
	},
	{
		id: 2,
		name: "Dried Manggo Bliss Bites Spicy",
		description: "A bold twist on a tropical classic! Our Spicy Dried Mangoes combine the natural sweetness of sun-ripened Philippine mangoes with a fiery chili kick. Perfect for those who crave sweet heat in every bite.",
		price: 180,
		tech: ["100% Real Mango", " No Artificial Flavors", "Sweet, Tangy & Spicy Snack"],
		image: product2Img,
	},
];

export const Projects = ({ cart, setCart, showCart, setShowCart }) => {
	const [quantities, setQuantities] = useState({});
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [showCheckout, setShowCheckout] = useState(false);
	const [checkoutData, setCheckoutData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
	});

	const handleQuantityChange = (id, value) => {
		setQuantities((prev) => ({
			...prev,
			[id]: Math.max(1, Number(value)),
		}));
	};

	const handleAddToCart = (product) => {
		const qty = quantities[product.id] || 1;
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + qty }
						: item
				);
			}
			return [...prev, { ...product, quantity: qty }];
		});
		setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
	};

	const handleProductClick = (product) => {
		setSelectedProduct(product);
	};

	const closeModal = () => setSelectedProduct(null);

	const handleRemoveItem = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const handleCheckout = () => {
		alert("Checkout successful!");
		setCart([]);
		setShowCart(false);
	};

	return (
		<section
			id="shop"
			className="min-h-screen flex flex-col items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4 w-full">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent text-center">
						Shop here
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						{products.map((product) => (
							<div
								key={product.id}
								className="p-20 min-h-80 w-full rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)] transition flex flex-col cursor-pointer"
								onClick={() => handleProductClick(product)}
							>
								<img
									src={product.image}
									alt={product.name}
									className="mb-4 rounded-lg w-full h-60 object-cover"
								/>
								<h3 className="text-2xl font-bold mb-2">{product.name}</h3>
								<p className="text-neutral-300 mb-2">{product.description}</p>
								<div className="flex flex-wrap gap-2 mb-2">
									{product.tech.map((tech, key) => (
										<span
											key={key}
											className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition-all"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="p-2 mb-1 font-semibold text-yellow-400 text-xl">
									₱{product.price}
								</div>
								<div className="flex items-center gap-2 mb-2">
									<label htmlFor={`qty-${product.id}`} className="text-sm">
										Qty:
									</label>
									<input
										id={`qty-${product.id}`}
										type="number"
										min="1"
										value={quantities[product.id] || 1}
										onClick={(e) => e.stopPropagation()}
										onChange={(e) =>
											handleQuantityChange(product.id, e.target.value)
										}
										className="w-16 px-2 py-1 border rounded"
									/>
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleAddToCart(product);
										}}
										className="ml-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
									>
										Add to Cart
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Modal for product details */}
				{selectedProduct && (
					<div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
						<div className="bg-neutral-800 rounded-2xl p-20 max-w-[1200px] w-[95vw] relative shadow-2xl">
							<button
								onClick={closeModal}
								className="absolute top-4 right-6 text-gray-500 hover:text-yellow-500 text-3xl"
								aria-label="Close"
							>
								&times;
							</button>
							<div className="flex flex-col md:flex-row gap-12">
								<img
									src={selectedProduct.image}
									alt={selectedProduct.name}
									className="mb-4 md:mb-0 rounded-lg w-full md:w-[420px] h-[350px] object-cover border"
								/>
								<div className="flex-1 flex flex-col">
									<h3 className="text-4xl font-bold mb-4 text-yellow-600">
										{selectedProduct.name}
									</h3>
									<p className="mb-6 text-xl text-gray-50">
										{selectedProduct.description}
									</p>
									<div className="flex flex-wrap gap-3 mb-6">
										{selectedProduct.tech.map((tech, key) => (
											<span
												key={key}
												className="bg-yellow-500/10 text-yellow-500 py-2 px-4 rounded-full text-base"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="mb-8 font-semibold text-yellow-400 text-2xl">
										₱{selectedProduct.price}
									</div>
									<div className="flex items-center gap-4 mb-2">
										<label
											htmlFor={`modal-qty-${selectedProduct.id}`}
											className="text-lg"
										>
											Qty:
										</label>
										<input
											id={`modal-qty-${selectedProduct.id}`}
											type="number"
											min="1"
											value={quantities[selectedProduct.id] || 1}
											onChange={(e) =>
												handleQuantityChange(selectedProduct.id, e.target.value)
											}
											className="w-24 px-4 py-2 border rounded text-xl"
										/>
										<button
											onClick={() => {
												handleAddToCart(selectedProduct);
												closeModal();
											}}
											className="ml-2 bg-yellow-500 text-white px-8 py-3 rounded hover:bg-yellow-600 transition text-xl"
										>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</RevealOnScroll>

			{/* Cart Drawer */}
			<div
				className={`fixed top-0 right-0 h-full w-96 bg-neutral-900 shadow-2xl z-50 transform transition-transform duration-300 ${
					showCart ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center p-6 border-b border-white/10">
					<h2 className="text-2xl font-bold text-yellow-400">Cart</h2>
					<button
						onClick={() => setShowCart(false)}
						className="text-3xl text-gray-400 hover:text-yellow-400"
						aria-label="Close"
					>
						&times;
					</button>
				</div>
				<div className="p-6 overflow-y-auto h-[calc(100%-160px)]">
					{cart.length === 0 ? (
						<p className="text-gray-400">Your cart is empty.</p>
					) : (
						<ul>
							{cart.map((item) => (
								<li
									key={item.id}
									className="flex justify-between items-center mb-4 border-b border-white/10 pb-2"
								>
									<div>
										<div className="font-semibold">{item.name}</div>
										<div className="text-sm text-gray-400">
											Qty: {item.quantity}
										</div>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-bold text-yellow-400">
											₱{item.price * item.quantity}
										</span>
										<button
											onClick={() => handleRemoveItem(item.id)}
											className="ml-2 text-red-400 hover:text-red-600 text-lg"
											title="Remove"
										>
											&times;
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="absolute bottom-0 left-0 w-full p-6 bg-neutral-900 border-t border-white/10">
					<div className="flex justify-between mb-4 text-lg font-semibold text-yellow-300">
						<span>Total:</span>
						<span>
							₱
							{cart.reduce(
								(sum, item) => sum + item.price * item.quantity,
								0
							)}
						</span>
					</div>
					<button
						onClick={() => setShowCheckout(true)}
						disabled={cart.length === 0}
						className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50"
					>
						Checkout
					</button>
				</div>
			</div>

			{/* Checkout Modal */}
			{showCheckout && (
				<div
					className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
					style={{ width: "100vw", height: "100vh" }}
				>
					<div className="bg-neutral-900 rounded-2xl p-10 w-full max-w-md relative shadow-2xl">
						<button
							onClick={() => setShowCheckout(false)}
							className="absolute top-4 right-6 text-gray-400 hover:text-yellow-400 text-3xl"
							aria-label="Close"
						>
							&times;
						</button>
						<h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
							Checkout
						</h2>
						<form
							onSubmit={e => {
								e.preventDefault();
								alert(
									`Order placed!\nName: ${checkoutData.firstName} ${checkoutData.lastName}\nAddress: ${checkoutData.address}\nPhone: ${checkoutData.phone}`
								);
								setShowCheckout(false);
								setCart([]);
								setShowCart(false);
								setCheckoutData({ firstName: "", lastName: "", address: "", phone: "" });
							}}
							className="flex flex-col gap-4"
						>
							<input
								type="text"
								placeholder="First Name"
								value={checkoutData.firstName}
								onChange={e => setCheckoutData(d => ({ ...d, firstName: e.target.value }))}
								required
								className="px-4 py-2 rounded border bg-neutral-800 text-white"
							/>
							<input
								type="text"
								placeholder="Last Name"
								value={checkoutData.lastName}
								onChange={e => setCheckoutData(d => ({ ...d, lastName: e.target.value }))}
								required
								className="px-4 py-2 rounded border bg-neutral-800 text-white"
							/>
							<input
								type="text"
								placeholder="Address"
								value={checkoutData.address}
								onChange={e => setCheckoutData(d => ({ ...d, address: e.target.value }))}
								required
								className="px-4 py-2 rounded border bg-neutral-800 text-white"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								value={checkoutData.phone}
								onChange={e => setCheckoutData(d => ({ ...d, phone: e.target.value }))}
								required
								className="px-4 py-2 rounded border bg-neutral-800 text-white"
							/>
							<button
								type="submit"
								className="mt-4 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
							>
								Place Order
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	);
};