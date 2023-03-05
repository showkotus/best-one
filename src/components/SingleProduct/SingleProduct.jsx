import { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import { CartContext } from '../../context/CartContextProvider';
const SingleProduct = () => {
    const location = useLocation()
    const [measure, setMeasure] = useState(1)
    const [quantity, setQuantity] = useState(1)
    const {cart, setCart} = useContext(CartContext)
    const product = location.state
    const { name, img, price, id } = product
    const totalPrice = measure * quantity * price
    // handle add to cart 
    const handleAddtoCart = event =>{
        event.preventDefault()
        const product = {
            name, img, measure, quantity,id, totalPrice
        }
        const newCart = [...cart, product]
        setCart(newCart)
        
    }
 
    return (
        <div className='m-20 md:mt-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6 place-items-center'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='rounded-lg cursor-zoom-in' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div>
                    <h2 className='text-2xl font-bold tracking-wider text-gray-600'>{name}</h2>
                    <p className='my-4 font-bold text-gray-400'>Packaging</p>
                    <form onSubmit={handleAddtoCart}>
                        <select onChange={e => setMeasure(e.target.value)} className="select select-success w-full max-w-xs">
                            <option disabled>Choose an option</option>
                            <option value={1} selected>1 kg</option>
                            <option value={5}>5 kg</option>
                            <option value={10}>10 kg</option>
                            <option value={15}>15 kg</option>
                            <option value={20}>20 kg</option>
                        </select>
                        <input onChange={e => setQuantity(e.target.value)} name='quantity' type="number" defaultValue={1} className='w-[60px] h-[60px] border border-[#0BA13B] p-3 mt-4 mr-4 outline-none' />
                        <button type='submit'><Button>Add To Cart</Button></button>
                    </form>
                    <p className='mt-2 font-semibold uppercase text-gray-400'><strong>Total Price:</strong> {totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;