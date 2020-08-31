export const schema = [
  {
    name: "loanType",
    type: "select",
    label: "Loan Type",
    validation: {
      required: "This field is required",
    },
    options: [
      {
        value: "homeLoan",
        label: "Home Loan",
      },
      {
        value: "carLoan",
        label: "Car Loan",
      },
      {
        value: "otherLoan",
        label: "Other Loan",
      },
    ],
  },
  {
    name: "loanAmount",
    type: "input",
    subType: "text",
    label: "Loan Amount",
    validation: {
      required: "This field is required",
      validate: {
        noWhiteSpace: (value: string): boolean | string =>
          value.trim().length > 0 || "this field cannot be empty",
      },
    },
  },
  {
    name: "loanRequester",
    type: "radio",
    options: [
      {
        value: "mySelf",
        label: "My Self",
      },
      {
        value: "someoneElse",
        label: "Someone Else",
      },
    ],
    validation: {
      required: "This field is required",
    },
  },
  {
    name: "additionalInfo",
    type: "textArea",
    subType: "text",
    label: "Additional Info",
    validation: {
      required: "This field is required",
      validate: {
        noWhiteSpace: (value: string): boolean | string =>
          value.trim().length > 0 || "This field is required",
      },
    },
  },
];
