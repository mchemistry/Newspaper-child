// import randomText from '../utils/randomWithTimeOut';

export default class InputWithSearch {
    constructor(inputClassName, tableId, suggestOptions) {
        this.inputClassName = inputClassName;
        this.tableId = tableId;
        this.suggestOptions = suggestOptions;
    }

    countRow = () => {
        return $(`#${this.tableId} tr:not(:nth-child(1)):visible`).length;
    }

    showSuggestTxt = () => {
        $('#suggest-txt').show(100);
        $('.search-result').hide();
    }

    innerResult = (numOfResult, inputTxt) => {
        $('#suggest-txt').hide(100);
        $('.search-result').show().text(`Co ${numOfResult} ket qua voi tu khoa "${inputTxt}"`);
    }

    search = () => {
        const _self = this;
        $(`.${_self.inputClassName}`).on('keyup', function () {
            const originalInputVal = $(this).val();
            const inputVal = originalInputVal.toLowerCase();
            // eslint-disable-next-line array-callback-return
            $(`#${_self.tableId} tr:not(:nth-child(1))`).filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf((inputVal)) > -1);
            });
            if (originalInputVal !== '') { _self.innerResult(_self.countRow(), originalInputVal); } else { _self.showSuggestTxt(); }
        });
    }
}
