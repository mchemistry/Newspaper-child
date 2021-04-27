import APP from '../constants/app';
import Notification from './notification';
import sendContact from '../services/http';

export default class Form {
    constructor(
        elementPrefixId = APP.DEFAULT_FORM_PREFIX_ID,
        urlContactApi = APP.URL_CONTACT_API,
        timeOut = APP.DEFAULT_SHOW_MESSAGE_TIMEOUT,
    ) {
        this.elementPrefixId = elementPrefixId;
        this.timeOut = timeOut;
        this.urlContactApi = urlContactApi;
        this.form = $(`.${this.elementPrefixId}-form`);
        this.noti = new Notification(timeOut);
        this.contact = {};
    }

    /**
     * Show then hide notification when submit
     * @param {boolean} isSucess Check respone is success?
     */
    toggleNotificationState = (isSucess) => {
        if (isSucess) {
            this.noti.showMessageWithSuccess();
        } else {
            this.noti.showMessageWithError(APP.ERROR_MESSAGE);
        }
    }

    /**
     * Disable form when submit
     * @param {string} elementPrefixId As prefix id of form
     */
    disableForm = () => {
        $(`.${this.elementPrefixId}-form :input`).prop('disabled', true);
        $(`#${this.elementPrefixId}-text-btn`).hide();
        $(`#${this.elementPrefixId}-loading`).show();
    }

    // enable form when recive respone
    enableForm = () => {
        $(`.${this.elementPrefixId}-form :input`).prop('disabled', false);
        $(`#${this.elementPrefixId}-text-btn`).show();
        $(`#${this.elementPrefixId}-loading`).hide();
    }

    // get contact data
    getContactData = () => {
        if ($(`#${this.elementPrefixId}-subject`).val()) {
            this.contact.text = $(`#${this.elementPrefixId}-subject`).val();
        } else {
            this.contact.text = APP.PRICE_TITLE;
        }
        this.contact.url = APP.BASE_URL;
        this.contact.phone = $(`#${this.elementPrefixId}-phone`).val();
        this.contact.fullname = $(`#${this.elementPrefixId}-fullname`).val();
        return this.contact;
    }

    // reset form
    resetForm = () => {
        $(`.${this.elementPrefixId}-form :input`).val('');
        $(`#${this.elementPrefixId}-text-btn`).text('Gửi yêu cầu');
    }

    // check every field input not empty
    isFormValid = () => {
        let isValid = true;
        $(`.${this.elementPrefixId}-form :input[type="text"]`).each(function () {
            if ($(this).val() === '') {
                APP.ERROR_MESSAGE = 'Thông tin không được để trống.';
                isValid = false;
            }
        });

        if (!isValid) return isValid;
        $(`.${this.elementPrefixId}-form :input[type="number"]`).each(function () {
            if (!$.isNumeric($(this).val())) {
                APP.ERROR_MESSAGE = 'Nhập sai định dạng số';
                isValid = false;
            }
        });

        if (!isValid) return isValid;
        const phone = $(`#${this.elementPrefixId}-phone`);
        if (phone.val().length <= 7) {
            APP.ERROR_MESSAGE = 'Nhập sai định dạng số điện thoại.';
            isValid = false;
        }

        const subject = $(`#${this.elementPrefixId}-subject`);
        if (!subject.val()) {
            if (APP.PRICE_TITLE === '') {
                APP.ERROR_MESSAGE = 'Bạn chưa chọn bảng giá nào cả.';
                isValid = false;
            }
        }

        return isValid;
    }

    // send request to server
    sendRequestToServer = async () => {
        this.disableForm();
        const contactData = this.getContactData();
        sendContact(this.urlContactApi, contactData)
            .then((data) => {
                if (data.success) {
                    setTimeout(() => {
                        this.resetForm();
                    }, 300);
                    this.toggleNotificationState(true);
                } else {
                    APP.ERROR_MESSAGE = 'Có lỗi xảy ra, bạn vui lòng thử lại sau!!';
                    this.toggleNotificationState(false);
                }
            }).catch((error) => {
                APP.ERROR_MESSAGE = 'Có lỗi xảy ra, bạn vui lòng thử lại sau!!';
                this.toggleNotificationState(false);
                // eslint-disable-next-line no-console
                console.error(error);
            })
            .finally(() => {
                this.enableForm();
            });
    }

    init = () => {
        this.form.submit((e) => {
            e.preventDefault(e);
            if (this.isFormValid()) {
                this.sendRequestToServer();
            } else {
                this.toggleNotificationState(false);
            }
        });
    }
}
