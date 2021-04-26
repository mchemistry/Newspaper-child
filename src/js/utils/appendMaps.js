import TEMPLATE from '../constants/template';
import APP from '../constants/app';
import closePopUp from './closePopUp';
import appendToBody from './appendToBody';

const appendAllMapsToBody = () => {
    appendToBody(APP.CONTACT_SLUG, TEMPLATE.ALL_MAPS, () => {
        closePopUp(1, null);
        $('#more-maps').click(() => {
            $('#maps').show();
        });
    });
};

export default appendAllMapsToBody;
