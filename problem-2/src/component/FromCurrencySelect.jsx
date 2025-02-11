import { useRef } from "react"; // Add useRef
import useStore from "../store";
import FromCurrencySelectItem from "./FromCurrencySelectItem";
import PropTypes from "prop-types";
import { formatNumberWithCommas } from "../utils";

const FromCurrencySelect = ({ label }) => {
  const { fromAmount, setFromAmount } = useStore();
  const inputRef = useRef(null); // Ref to track the input element

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/,/g, "");

    if (value === "") value = "0";

    // Allow decimal points to be added
    if (value === ".") value = "0.";

    // Remove leading zeros only if the value is not a decimal number
    if (value !== "0" && value.charAt(0) === "0" && !value.includes(".")) {
      value = value.replace(/^0+/, "");
    }

    const validValue = /^[0-9]*\.?[0-9]*$/;
    console.log(validValue.test(value));

    if (validValue.test(value)) {
      setFromAmount(value);
    }
  };

  // Handle input to preserve cursor position and add trailing zero
  const handleInput = (e) => {
    let value = e.target.value.replace(/,/g, ""); // Remove commas

    // If the value ends with a decimal point, append a "0"
    if (value.endsWith(".")) {
      value += "0";
    }

    // Validate the input before formatting and updating
    const validValue = /^[0-9]*\.?[0-9]*$/;
    if (!validValue.test(value)) {
      // If the value is invalid, don't update the state
      return;
    }

    // Update the state with the valid value
    setFromAmount(value);

    // Format the value with commas
    const formattedValue = formatNumberWithCommas(value);

    // Get the current cursor position
    const { selectionStart } = e.target;

    // Calculate the new cursor position
    const commaCountBefore = (
      e.target.value.slice(0, selectionStart).match(/,/g) || []
    ).length;
    const commaCountAfter = (
      formattedValue.slice(0, selectionStart).match(/,/g) || []
    ).length;
    const newCursorPosition =
      selectionStart + (commaCountAfter - commaCountBefore);

    // Update the input value
    e.target.value = formattedValue;

    // Restore the cursor position
    e.target.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  return (
    <div className="w-full max-w-[400px]" tabIndex={0}>
      <label htmlFor="price" className="block font-medium text-gray-900 text-[1.5vh]">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
          <input
            type="text"
            ref={inputRef} // Attach the ref
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 w-full"
            placeholder="0.00"
            value={formatNumberWithCommas(fromAmount)}
            onChange={handleChange}
            onInput={handleInput} // Add onInput to handle cursor position
          />
          <FromCurrencySelectItem />
        </div>
      </div>
    </div>
  );
};

FromCurrencySelect.propTypes = {
  label: PropTypes.string,
};

export default FromCurrencySelect;
