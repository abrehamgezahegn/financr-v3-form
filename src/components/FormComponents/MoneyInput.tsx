// import React, { CSSProperties, FC, KeyboardEvent, useCallback } from "react";

// type Props = {
//   className?: string;
//   max?: number;
//   onValueChange: (value: number) => void;
//   style?: CSSProperties;
//   value: number;
// };

// const VALID_FIRST = /^[1-9]{1}$/;
// const VALID_NEXT = /^[0-9]{1}$/;
// const DELETE_KEY_CODE = 8;

// const CurrencyInput: FC<Props> = ({
//   className = "",
//   max = Number.MAX_SAFE_INTEGER,
//   onValueChange,
//   style = {},
//   value,
// }) => {
//   //The Math.trunc() function returns the integer part of a number by removing any fractional digits.
//   const valueAbsTrunc = Math.trunc(Math.abs(value));

//   if (
//     value !== valueAbsTrunc ||
//     !Number.isFinite(value) ||
//     Number.isNaN(value)
//   ) {
//     throw new Error("invalid value property");
//   }

//   const handleKeyDown = useCallback(
//     (e: KeyboardEvent<HTMLDivElement>): void => {
//       const { key, keyCode }: any  = e;
//       if (
//         (value === 0 && !VALID_FIRST.test(key)) ||
//         (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
//       ) {
//         return;
//       }
//       const valueString:string = value.toString();
//       let nextValue: number;
//       if (keyCode !== DELETE_KEY_CODE) {
//         const nextValueString: string =
//           value === 0 ? key : ${valueString}${key};
//         nextValue = Number.parseInt(nextValueString, 10);
//       } else {
//         const nextValueString = valueString.slice(0, -1);
//         nextValue =
//           nextValueString === "" ? 0 : Number.parseInt(nextValueString, 10);
//       }
//       if (nextValue > max) {
//         return;
//       }
//       onValueChange(nextValue);
//     },
//     [max, onValueChange, value]
//   );

//   const handleChange = useCallback(() => {
//     // DUMMY TO AVOID REACT WARNING
//   }, []);

//   const valueDisplay = (value / 100).toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   return (
//     <input
//       className={className}
//       inputMode="numeric"
//       onChange={handleChange}
//       onKeyDown={handleKeyDown}
//       style={style}
//       value={valueDisplay}
//     />
//   );
// };

// export default CurrencyInput;

export const some = 1;
