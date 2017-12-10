// For staging and production, mapper between names of fields coming
// from the front and names of field IDs in PipeDrive.
const peopleCommonFields = {
  name: 'name',
  email: 'email',
  phone: 'phone',
};
const peopleFieldsMapper = {
  production: {
    ...peopleCommonFields,
    country: '4486f55ec00abba1ec3def80376df83aeacbb6f7',
    city: '34621972a532f75f010b784dc6b7ac1d8c0ef72a',
    refugee: '2a77da4864c41c5f14820c52ee3dfcd887edda74',
    programming: 'eedf6a41c8ffd5830467a92adfb57323a0b5ad6a',
    realReferrer: '3edd16c542cf0f842d985dd9d0690d7df26ff6f4',
    motivation: '9ab1621a2aac106b56bf1dbba12c52d335a9b5df',
  },
  staging: {
    ...peopleCommonFields,
    country: '51ffbd9a95c4071c56dc967b428752cd617ab6f8',
    city: '53fb3d3f3ce765475ad4f7cff94a2b0f1152defb',
    refugee: '2d830da1d32ee5419d401c092ae558c2112c2dff',
    programming: '82a53859c7627eff4a0ce9fbfd9a388a2004b003',
    realReferrer: '1243d33a893cf624c1b7621bd61a883b2c87df87',
    motivation: '115dc10fa9b5b143db557f274758833faccadae4',
  },
};

// In data, transform field names from frontend names to associated
// pipedrive API field ids. Returned object only contains fields whose
// names are in `fields`.
const peopleFrontendToPipedrive = (data, fields) => {
  const mapper = peopleFieldsMapper[process.env.PIPEDRIVE_ACCOUNT];
  const transformedData = {};
  fields.forEach((key) => {
    transformedData[mapper[key]] = data[key];
  });
  return transformedData;
};

// In data, transform field names from pipedrive API field ids to associated
// frontend field names.  Returned object only contains fields whose
// names are in `fields`.
const peoplePipedriveToFrontend = (data, fields) => {
  const mapper = peopleFieldsMapper[process.env.PIPEDRIVE_ACCOUNT];
  const transformedData = {};
  fields.forEach((key) => {
    transformedData[key] = data[mapper[key]];
  });
  return transformedData;
};

export {
  peopleFrontendToPipedrive,
  peoplePipedriveToFrontend,
};
