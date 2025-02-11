import FromCurrencySelect from "./FromCurrencySelect";
import ToCurrencySelect from "./ToCurrencySelect";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import useStore from "../store";

const CurrencyForm = () => {
  const { fromAmount, fromRate, toRate, setToAmount } = useStore();

  function convertCurrency() {
    const amountInUSD = fromAmount * fromRate; // Convert to USD
    const convertedAmount = amountInUSD / toRate; // Convert to target currency

    setToAmount(convertedAmount.toString());
  }

  return (
    <div className="flex items-center w-full justify-center">
      <div className="space-x-10  px-8 py-10 rounded-md bg-white shadow-lg">
        <h3 className="text-center text-[2.5vh] font-bold text-[#646dad] mb-10 tracking-wider">
          Send your money
        </h3>
        <div className="flex justify-between items-center w-full">
          <FromCurrencySelect label={"Amount to send"} />
          <PiArrowFatLinesRightFill size={30} className="mt-8" />
          <ToCurrencySelect label={"Amount to receive"} />
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => convertCurrency()}
            className="bg-[#646dad] text-white text-[1.5vh] font-semibold rounded py-2 px-8 tracking-wides hover:bg-[#646fff] cursor-pointer"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyForm;
