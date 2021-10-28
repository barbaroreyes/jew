/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJollas = /* GraphQL */ `
  mutation CreateJollas(
    $input: CreateJollasInput!
    $condition: ModelJollasConditionInput
  ) {
    createJollas(input: $input, condition: $condition) {
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
export const updateJollas = /* GraphQL */ `
  mutation UpdateJollas(
    $input: UpdateJollasInput!
    $condition: ModelJollasConditionInput
  ) {
    updateJollas(input: $input, condition: $condition) {
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
export const deleteJollas = /* GraphQL */ `
  mutation DeleteJollas(
    $input: DeleteJollasInput!
    $condition: ModelJollasConditionInput
  ) {
    deleteJollas(input: $input, condition: $condition) {
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
export const createCate = /* GraphQL */ `
  mutation CreateCate(
    $input: CreateCateInput!
    $condition: ModelCateConditionInput
  ) {
    createCate(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateCate = /* GraphQL */ `
  mutation UpdateCate(
    $input: UpdateCateInput!
    $condition: ModelCateConditionInput
  ) {
    updateCate(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteCate = /* GraphQL */ `
  mutation DeleteCate(
    $input: DeleteCateInput!
    $condition: ModelCateConditionInput
  ) {
    deleteCate(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
    }
  }
`;
