import useStore from "../store";
import ToCurrencySelectItem from "./ToCurrencySelectItem";
import PropTypes from "prop-types";
import { formatNumberWithCommas } from "../utils";

const ToCurrencySelect = ({ label }) => {
  const { toAmount } = useStore();
  return (
    <div
      className="w-full max-w-[400px]"
      tabIndex={0} // make the entire div focusable
    >
      <label htmlFor="price" className="block font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
          <input
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 w-full"
            placeholder="0.00"
            value={formatNumberWithCommas(toAmount)}
            readOnly
          />
          <ToCurrencySelectItem />
        </div>
      </div>
    </div>
  );
};

ToCurrencySelect.propTypes = {
  label: PropTypes.string,
};

export default ToCurrencySelect;
