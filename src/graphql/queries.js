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
      image
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlider = /* GraphQL */ `
  query GetSlider($id: ID!) {
    getSlider(id: $id) {
      id
      name
      image
      price
      categoria
      createdAt
      updatedAt
    }
  }
`;
export const listSliders = /* GraphQL */ `
  query ListSliders(
    $filter: ModelSliderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSliders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        price
        categoria
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
