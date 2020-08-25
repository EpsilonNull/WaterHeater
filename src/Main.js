/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import DataComponent from './DataComponent'
import "./style.css"

import AWSAppSyncClient from 'aws-appsync';
import awsconfig from './aws-exports';
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from 'aws-appsync-react'

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
  },
});

class Main extends React.Component{
    render() {
        return(
            <ApolloProvider client={client}>
                <Rehydrated>
                    <DataComponent/>
                </Rehydrated>
            </ApolloProvider>
        )
    }
};

export default Main;
