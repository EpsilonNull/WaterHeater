import gql from 'graphql-tag';

export const subscribePayloadQuery = gql`
    subscription SubscibeData{
        onCreateServerlessrepoThermocoupleMyTableMSNR7YQDGWHD{
            id
            createdAt
            temperature
        }
    }
`;
