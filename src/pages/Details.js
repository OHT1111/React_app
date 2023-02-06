import { useParams } from "react-router-dom"

export default function Details(props) {

  const {bests} = props
  const {id} = useParams()

  return (
    
    <div className="detail_page_box">
      <h2 className="detail_name">Detail Page</h2>
      <img src={bests[id].image} alt="" style={{width: 280}} />
      <h4 className="item_name">{bests[id].title}</h4>
      <p>{bests[id].desc}</p>
      <p>{bests[id].price}원</p>
      <button>장바구니</button>
    </div>
  )
}