import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeYear } from './store';

export default function Cart() {

  const state = useSelector((state) => {return state})
  // console.log(state.user)
  const dispatch = useDispatch()

  return(
    <div>
      <h2 className='cart_name'>{state.user.name}의 장바구니</h2>
      <button onClick={() => {
        dispatch(changeName())
      }}>이름 바꾸기</button>

      <h3 className='cart_name'>회원가입 기간 : ({state.user.memberYear})년</h3>
      <button onClick={() => {dispatch(changeYear(1))}}>가입기간+</button>
      <button onClick={() => {dispatch(changeYear(-1))}}>가입기간-</button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>상품명</th>
          <th>개수</th>
          <th>증감</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>


    </div>
  )
}