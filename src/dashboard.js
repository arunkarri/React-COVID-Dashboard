import React, { useState, useContext } from 'react';
import env from './env';
import { LoaderContext } from './App';
import DataCard from './dataCard';
import Table from './table';
import CountryData from './countryData';

const Dashboard = () => {
  const [cases, setCases] = useState([]);
  const [cDeaths, setcDeaths] = useState([]);
  const [cRec, setcRec] = useState([]);
  const [cActive, setcActive] = useState([]);
  const [population, setPopulation] = useState(0);
  const [countryName, setCountryName] = useState('');
  const [totalConfirmed, setTotalConfirm] = useState(0);
  const [totalActive, setTotalActive] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDead, setTotalDead] = useState(0);
  const { loader, showLoader } = useContext(LoaderContext);
  const chartDeaths = [];
  const chartRecovered = [];
  const chartActive = [];

  const getCases = async () => {
    const req = await fetch(`${env}countries`);
    const res = await req.json();

    const sorted = res.data.sort((a, b) => b.latest_data.confirmed - a.latest_data.confirmed);
    setCases(sorted);
    showLoader(false);
    getCountryData(sorted[0].code);

    const confirmed = res.data.reduce((acc, curr) => {
      return acc + curr.latest_data.confirmed;
    }, 0);

    setTotalConfirm(confirmed);

    const active = res.data.reduce((acc, curr) => {
      return acc + (curr.latest_data.confirmed - curr.latest_data.recovered - curr.latest_data.deaths);
    }, 0);

    setTotalActive(active);

    const recovered = res.data.reduce((acc, curr) => {
      return acc + curr.latest_data.recovered;
    }, 0);

    setTotalRecovered(recovered);

    const dead = res.data.reduce((acc, curr) => {
      return acc + curr.latest_data.deaths;
    }, 0);

    setTotalDead(dead);
  };

  const getCountryData = async (code) => {
    const req = await fetch(`${env}/countries/${code}`);
    const res = await req.json();
    res.data?.timeline.forEach((element) => {
      chartDeaths.push([new Date(element.date).getTime(), element.deaths]);
    });
    setcDeaths(chartDeaths);

    res.data?.timeline.forEach((element) => {
      chartRecovered.push([new Date(element.date).getTime(), element.recovered]);
    });
    setcRec(chartRecovered);
    res.data?.timeline.forEach((element) => {
      chartActive.push([new Date(element.date).getTime(), element.active]);
    });
    setcActive(chartActive);

    setPopulation(res.data.population);
    setCountryName(res.data.name);
  };

  React.useEffect(() => {
    getCases();
  }, []);

  return (
    <>
      <div className="container">
        {loader === true ? (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            <h5 className="text-danger text-center">COVID 19 Dashboard</h5>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="row">
                <DataCard label="Confirmed" value={totalConfirmed} type="warning" theme="dark" />
                <DataCard label="Active" value={totalActive} type="primary" theme="light" />
                <DataCard label="Recovered" value={totalRecovered} type="success" theme="light" />
                <DataCard label="Deceased" value={totalDead} type="danger" theme="light" />
                <CountryData deaths={cDeaths} population={population} name={countryName} active={cActive} recovered={cRec} />
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <Table cases={cases} setcDeaths={setcDeaths} setPopulation={setPopulation} setCountryName={setCountryName} setcActive={setcActive} setcRec={setcRec} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
