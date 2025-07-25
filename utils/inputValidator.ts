import formatAmount from "./formatAmount";

export const registrationOption = {
  name: (req: boolean) => ({
    required: req ? "Name is required" : req,
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    maxLength: {
      value: 20,
      message: "Name cannot be greater than 20 characters",
    },
    // pattern: {
    //   value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/i,
    //   message: 'Full name is required',
    // },
  }),
  email: (req: boolean) => ({
    required: req ? "Email is required" : req,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Valid email address is required",
    },
  }),
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password cannot be greater than 20 characters",
    },
  },
  phoneNumber: (req: boolean) => ({
    required: req ? "Phone number is required" : req,
    pattern: {
      value: /(?:\+?(\d{1,3}))?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/,
      message: "Valid phone number is required",
    },
  }),
  address: (req: boolean) => ({
    required: req ? "Address is required" : req,
    minLength: {
      value: 2,
      message: "Address name must have at least 2 characters",
    },
    maxLength: {
      value: 150,
      message: "Address name cannot be greater than 150 characters",
    },
  }),
  amountPaid: (min: unknown, max?: unknown) => {
    return {
      required: "Amount paid is required",
      min: {
        value: min,
        message: `$ ${formatAmount(
          String(min)
        )} is the minimum amount for this plan`,
      },
      max: {
        value: max,
        message: `$ ${formatAmount(
          String(max)
        )} is the maximum amount for this plan`,
      },
    };
  },
  maxDrawDown: {
    required: "Amount paid is required",
    min: {
      value: 20,
      message: "You cannot buy shares with less than 20%",
    },
    max: {
      value: 100,
      message: "100% is the maximum",
    },
  },
  amountToSell: {
    required: "Amount to sell is required",
    min: {
      value: 1000,
      message: "You cannot sell less than 1,000 BRAC",
    },
  },

  walletAddress: {
    required: "Wallet Address is required",
    minLength: {
      value: 42,
      message: "Address name cannot be less than 42 characters",
    },
    maxLength: {
      value: 42,
      message: "Address name cannot be greater than 42 characters",
    },
  },
  hash: {
    required: "Wallet Address is required",
    minLength: {
      value: 42,
      message: "Address name cannot be less than 42 characters",
    },
    maxLength: {
      value: 82,
      message: "Address name cannot be greater than 42 characters",
    },
  },
  ssn: {
    required: "Social Security Number (SSN) is required",
    pattern: {
      value: /^\d{3}-\d{2}-\d{4}$/,
      message: "SSN must be in the format XXX-XX-XXXX",
    },
  },
};
