import Select from "react-select";
import prices from "../data/prices.json";
import useStore from "../store";

const FromCurrencySelectItem = () => {
  const { setFromRate } = useStore();
  const currencyOptions = prices.map((item) => ({
    value: item.price,
    label: (
      <div className="flex items-center">
        <img
          src={`/src/assets/token-icons/${item.icon}`}
          //   alt={`${item.currency} currency icon`}
          className="mr-2 w-[30px]"
        />
        {item.currency}
      </div>
    ),
  }));

  const handleChange = (selectedOption) => {
    setFromRate(selectedOption.value);
  };

  return (
    <Select
      id="currency"
      name="currency"
      aria-label="Currency"
      options={currencyOptions}
      defaultValue={currencyOptions[3]}
      className="w-[300px]"
      classNamePrefix="custom-select"
      isSearchable={false}
      onChange={handleChange}
    />
  );
};

export default FromCurrencySelectItem;
