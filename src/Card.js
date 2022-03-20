

function Card(props){
    return(
        <>
        <div className="card" >
  <img className = "imgSize"
      src={props.imgsrc}
      alt="Card demos"
      width="10%"
      height="250"
      />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.city}</h5>
    <h5 className="card-title">{props.course}</h5>
    <h5 className="card-title">{props.date}</h5>
    <h5 className="card-title">{props.time}</h5>
    <h5 className="card-title">{props.age}</h5>
    <h5 className="card-title">{props.number}</h5>
    

    <p className="card-text">{props.sname}</p>

    <a href={props.link} className="btn btn-primary stretchted link">
        <button>Watch Now</button>
        </a>
  </div>
</div>
<hr/>

        </>
    );
}
export default Card;