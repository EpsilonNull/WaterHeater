import React from 'react';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import LineChart from "./components/LineChart/LineChart";
import { getPayloadQuery, subscribePayloadQuery } from './graphql';
import { graphql } from 'react-apollo';
var moment = require('moment'); 


class DataComponent extends React.Component {
    state = { results: this.props.results };
    componentDidUpdate() {
        this.props.subscribeToNewData()
    }
    getDate(date) {
        date = moment(parseInt(date)).format('LTS').toString()
        return date
    }
    render() {
        return(
            <div>
                <Header />
                <div className="container row">
                    <Card title="Statistics" body={
                        <LineChart 
                            timeData={this.props.results.map((result) => this.getDate(result.createdAt))}
                            temperatureData={this.props.results.map((result) => result.temperature)}
                        />} />
                </div>
            </div>
        )
    }
};


export default graphql(getPayloadQuery, {
    options: {
      fetchPolicy: 'cache-and-network',
      pollInterval: 1000
    },
    props: props => ({
      results: props.data.listServerlessrepoThermocoupleMyTableMSNR7YQDGWHDSSort ? props.data.listServerlessrepoThermocoupleMyTableMSNR7YQDGWHDSSort.items : [],
      subscribeToNewData: params => {
        props.data.subscribeToMore({
          document: subscribePayloadQuery,
          updateQuery: (prev, { subscriptionData: { data : { onCreateServerlessrepoThermocoupleMyTableMSNR7YQDGWHD } } }) => ({
            ...prev, listServerlessrepoThermocoupleMyTableMSNR7YQDGWHDSSort: {items: [onCreateServerlessrepoThermocoupleMyTableMSNR7YQDGWHD, 
            ...prev.listServerlessrepoThermocoupleMyTableMSNR7YQDGWHDSSort.items.filter(result => result.id !== onCreateServerlessrepoThermocoupleMyTableMSNR7YQDGWHD.id)]}
          }) 
        })
      },
    })
  })(DataComponent)
