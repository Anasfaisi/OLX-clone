// import { Heart } from "lucide-react"
// import cards_data from "../../assets/cards/cards"
import like_icon from '../../assets/like_icon.svg'
import { getData, Product } from "../firebase/productContext"
import { useEffect, useState } from "react"


const Cards = () => {
  const [cardData, setCardData] = useState<Product[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getData()
      setCardData(data || [])
    })()
  }, [])

  return (
    <div className="cards-div grid grid-cols-2 md:grid-cols-4 gap-[10px]">
      {cardData.length &&
        cardData?.map((card, index) =>
          <div className="card  border-1 outline-1 outline-gray-300 rounded-[4px] border-gray-100 shadow bg-white " key={index}>
            <div className="relative ">
              <div className=" absolute right-2 top-2 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
                <img src={like_icon} height='20px' alt="hjg" />
                </div>
              <img className="w-full  h-[200px] cursor-pointer border-5 border-gray-100  rounded-[4px]" src={card.imageUrl} alt="" />
            </div>
            <h1 className="font-bold text-[20px] ml-3">₹ {card.price}</h1>
            <h3 className="ml-3">{card.description}</h3>

            <div className="flex justify-between text-[10px] mb-3">
              <p className="ml-3 ">{card.place}</p>
              <p className="mr-2">{card.date}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cards