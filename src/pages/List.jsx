import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from 'react-paginate';
import { useState } from "react";





const List = ({setDetailId}) => {

  const {flights} = useSelector((store => store.flightReducer));
  //slice methodun kesmeye başlayacağı elemanın sırası
  const [startOffset,setStartOffSet]=useState(0);

  // sayfa başına gönsterilecek eleman sayısı
  const perPage = 10;

  // slice methodunun kesmeyi bitireceği eleman sırası
const endOffset= startOffset+perPage;
//slice methodu ile başlangıç ve bitiş arasını kes
const currentFlights= flights.slice(startOffset,endOffset);
//yeni sayfa seçildiğinde çalışır
  const handlePageClick = (event) => {
  //başlangı. state'ini güncelle
    setStartOffSet(event.selected * perPage)
  } ;
 //toplam sayfa sayısını hesapla
 const total = Math.ceil(flights.length / perPage)
  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5"> 
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>

          {currentFlights.map((flight)=>(
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.enlem}</td>
              <td>{flight.boylam}</td>
              <td><button onClick={()=>setDetailId(flight.id)}>Detay</button></td>
            </tr>

          ))}
        </tbody>
      </table>
      <ReactPaginate
       className="pagination"
       activeClassName="active"
        breakLabel="..."
        nextLabel="ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={total}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
      />

     
    </div>
  )
}

export default List