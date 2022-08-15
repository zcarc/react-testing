import React, { useCallback, useState } from "react";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);

  const onChangeCheckbox = useCallback((e) => {
    console.log("onChangeCheckbox... e.target.checked: ", e.target.checked);
    setChecked(e.target.checked);
  }, []);

  return (
    <div>
      <form>
        <input
          id="confirm-checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChangeCheckbox}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
