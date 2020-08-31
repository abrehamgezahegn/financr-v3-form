export const schema = [
  {
    name: "firstName",
    type: "input",
    subType: "text",
    label: "First Name",
    validation: {
      required: "This field is required",
      validate: {
        noWhiteSpace: (value: string): boolean | string =>
          value.trim().length > 0 || "This field is required",
      },
    },
  },
  {
    name: "lastName",
    type: "input",
    subType: "text",
    label: "Last Name",
    validation: {
      required: "This field is required",
      validate: {
        noWhiteSpace: (value: string): boolean | string =>
          value.trim().length > 0 || "This field is required",
      },
    },
  },
  {
    name: "loanRequester",
    type: "radio",
    options: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
    validation: {
      required: "This field is required",
    },
  },
  {
    name: "address",
    type: "input",
    label: "Address",
    subType: "text",
    validation: {
      required: "This field is required",
      validate: {
        noWhiteSpace: (value: string): boolean | string =>
          value.trim().length > 0 || "This field is required",
      },
    },
  },
  {
    name: "state",
    type: "select",
    label: "State",
    validation: {
      required: "This field is required",
    },
    options: [
      {
        value: "ST",
        label: "ST",
      },
      {
        value: "VIC",
        label: "VIC",
      },
      {
        value: "PA",
        label: "PA",
      },
    ],
  },
];
