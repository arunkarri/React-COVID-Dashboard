import Timeline from './timeline';

const CountryData = (props) => {
  return (
    <div className="col-12 p-1">
      <div className="card text-center">
        <div className="card-body">
          <h5>
            <span className="card-title">{props.name}</span>
          </h5>
          <hr />
          <span className="card-text">
            <b>Population: </b>
            <small>{props.population?.toLocaleString()}</small>
          </span>
          <br />
          <br />
          <hr />
          <Timeline deathSeries={props.deaths} activeSeries={props.active} recoveredSeries={props.recovered} />
        </div>
      </div>
    </div>
  );
};

export default CountryData;
