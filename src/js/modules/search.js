// import randomText from '../utils/randomWithTimeOut';
import nonAccentVietnamese from '../utils/nonAccentVietnamese';

export default class InputWithSearch {
    constructor(inputClassName, tableId, suggestOptions) {
        this.inputClassName = inputClassName;
        this.tableId = tableId;
        this.suggestOptions = suggestOptions;
    }

  countRow = () => {
      return $(`#${this.tableId} tr:not(:nth-child(1)):visible`).length;
  };

  showSuggestTxt = () => {
      $('#suggest-txt').show(50);
      $('.search-result').hide();
  };

  innerResult = (numOfResult, inputTxt) => {
      $('#suggest-txt').hide(100);
      $('.search-result')
          .show()
          .html(`Có ${numOfResult} kết quả với từ khóa <strong>"${inputTxt}"</strong>`);
  };

  search = () => {
      const _self = this;
      $(`.${_self.inputClassName}`).on('keyup', function () {
          const originalInputVal = nonAccentVietnamese($(this).val());
          const inputVal = originalInputVal.toLowerCase();
          // eslint-disable-next-line array-callback-return
          $(`#${_self.tableId} tr:not(:nth-child(1))`).filter(function () {
              const isNotIncludeInputText = nonAccentVietnamese($(this).text()).toLowerCase().indexOf(inputVal) > -1;
              $(this).toggle(isNotIncludeInputText);
          });
          if (originalInputVal !== '') {
              _self.innerResult(_self.countRow(), originalInputVal);
          } else {
              _self.showSuggestTxt();
          }
      });
  };
}
