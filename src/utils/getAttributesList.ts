type Attribute = {
  [key: string]: {
    name: string;
  };
};

const getAttributesList = (attributes: Attribute[], attributeName: string) => {
  const attributesList = attributes.reduce(
    (attributesArr: Array<{}>, item) => [
      ...attributesArr,
      item[attributeName]?.name,
    ],
    [],
  );

  return attributesList;
};

export default getAttributesList;
