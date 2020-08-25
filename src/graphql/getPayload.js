import gql from 'graphql-tag';

export const getPayloadQuery = gql`
    query queryData{
        listServerlessrepoThermocoupleMyTableMSNR7YQDGWHDSSort {
        items {
            id
            createdAt
            temperature
        }
        nextToken
        }
    }
`;
