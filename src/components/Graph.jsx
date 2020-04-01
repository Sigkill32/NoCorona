import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";

class Graph extends Component {
  state = {
    data: [],
    size: {}
  };

  async componentDidMount() {
    const data = await this.getData();
    this.setState({ data: data.cases_time_series });
    const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    };
    this.setState({ size });
  }

  getData = async () => {
    const { data } = await axios.get("https://api.covid19india.org/data.json");
    return data;
  };

  render() {
    const { data, size } = this.state;
    console.log(data);
    return (
      <div className="graph">
        {data ? (
          <LineChart
            width={size.width - 50}
            height={size.height / 2}
            data={data}
          >
            <Line type="monotone" dataKey="totalconfirmed" stroke="#8884d8" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 2000]} />
            <Tooltip />
          </LineChart>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default Graph;
