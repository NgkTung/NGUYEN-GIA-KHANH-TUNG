import Select from "react-select";
import prices from "../data/prices.json";
import useStore from "../store";

const ToCurrencySelectItem = () => {
  const { setToRate } = useStore();
  const currencyOptions = prices.map((item) => ({
    value: item.price,
    label: (
      <div className="flex items-center">
        <img
          src={`/src/assets/token-icons/${item.icon}`}
          //   alt={`${item.currency} currency icon`}
          className="mr-2 w-[30px]"
        />
        <p className="font-semibold">
          {item.currency}
        </p>
          
      </div>
    ),
  }));

  const handleChange = (selectedOption) => {
    setToRate(selectedOption.value);
  };

  return (
    <Select
      id="currency"
      name="currency"
      aria-label="Currency"
      options={currencyOptions}
      defaultValue={currencyOptions[4]}
      className="w-[300px]"
      classNamePrefix="custom-select"
      isSearchable={false}
      onChange={handleChange}
    />
  );
};

export default ToCurrencySelectItem;
