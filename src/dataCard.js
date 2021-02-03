const DataCard = (props) => (
  <div className="col-6 p-1">
    <div className={`card text-center bg-${props.type} text-${props.theme}`}>
      <div className="card-body">
        <h5>
          <span className="card-title">{props.label}</span>
        </h5>
        <p className="card-text">{props.value.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

export default DataCard;