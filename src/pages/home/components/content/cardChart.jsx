import React, { Component } from "react";
import { StyleCardChart } from './style';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', samples: 100, amt: 2400 },
  { name: 'Fev', samples: 410, amt: 2210 },
  { name: 'Mar', samples: 240, amt: 2290 },
  { name: 'Apr', samples: 540, amt: 2000 },
  { name: 'Jun', samples: 340, amt: 2181 },
  { name: 'Jul', samples: 430, amt: 2500 },
  { name: 'Ago', samples: 0, amt: 2100 },
  { name: 'Sep', samples: 0, amt: 2000 },
  { name: 'Oct', samples: 0, amt: 2181 },
  { name: 'Nov', samples: 0, amt: 2500 },
  { name: 'Dec', samples: 0, amt: 2100 },
];

class CardChart extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }


  async componentDidMount() {

  }


  render() {

    return (
      <StyleCardChart>
        <div className="cardChart">
          <h1>This Year Collected Data</h1>

          <div className="chart">
            <LineChart
              width={700}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line
                type='monotone'
                dataKey='samples'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <YAxis />
              <XAxis dataKey='name' />
              <Legend />
            </LineChart>
          </div>

        </div>

      </StyleCardChart>

    );
  }

}

export { CardChart }