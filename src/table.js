import env from './env';
import { LoaderContext } from './App';
import { useContext } from 'react';

const Table = (props) => {
  const chartDeaths = [];
  const chartRecovered = [];
  const chartActive = [];
  const { loader, showLoader } = useContext(LoaderContext);

  const getCountryData = async (code) => {
    showLoader(true);
    const req = await fetch(`${env}/countries/${code}`);
    const res = await req.json();
    console.log(res);
    res.data?.timeline.forEach((element) => {
      chartDeaths.push([new Date(element.date).getTime(), element.deaths]);
    });
    props.setcDeaths(chartDeaths);

    res.data?.timeline.forEach((element) => {
      chartRecovered.push([new Date(element.date).getTime(), element.recovered]);
    });
    props.setcRec(chartRecovered);
    res.data?.timeline.forEach((element) => {
      chartActive.push([new Date(element.date).getTime(), element.active]);
    });
    props.setcActive(chartActive);

    props.setPopulation(res.data.population);
    props.setCountryName(res.data.name);
    showLoader(false);
  };

  return (
    <div className="table-container">
      <table className="table table-responsive table-bordered">
        <thead className="text-dark">
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Death Rate</th>
            <th scope="col">Recovery Rate</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Critical</th>
            <th scope="col">Fatal</th>
            <th scope="col">Today's Cases</th>
            <th scope="col">Total Population</th>
          </tr>
        </thead>
        <tbody className="text-dark">
          {props.cases.map((ele, index) => {
            return (
              <tr key={index}>
                <td>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      getCountryData(ele.code);
                    }}
                  >
                    {ele.name}
                  </a>
                </td>
                <td>{Math.round(ele.latest_data.calculated.death_rate)}%</td>
                <td>{Math.round(ele.latest_data.calculated.recovery_rate)}%</td>
                <td>{ele.latest_data.confirmed}</td>
                <td>{ele.latest_data.critical}</td>
                <td className="text-danger">{ele.latest_data.deaths}</td>
                <td>
                  <span className="text-danger">Deaths: </span>
                  {ele.today.deaths}&nbsp;&nbsp;<span className="text-danger">Confirmed: </span>
                  {ele.today.confirmed}
                </td>
                <td>{ele.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
