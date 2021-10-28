/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJollas = /* GraphQL */ `
  query GetJollas($id: ID!) {
    getJollas(id: $id) {
      id
      name
      description
      categoria
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listJollass = /* GraphQL */ `
  query ListJollass(
    $filter: ModelJollasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJollass(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        categoria
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCate = /* GraphQL */ `
  query GetCate($id: ID!) {
    getCate(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
    }
  }
`;
export const listCates = /* GraphQL */ `
  query ListCates(
    $filter: ModelCateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
