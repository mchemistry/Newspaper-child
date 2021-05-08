const imgSrcPrefix = i => `https://khoitaodoanhnghiep.com/wp-content/uploads/2021/05/qc_${i}.png`;
const priceTitle = (name, price) => `Đã lựa chọn gói ${name} giá: ${price}Đ'`;

const convertData = (el, index) => {
    return {
        url_img: imgSrcPrefix(index + 1),
        title: priceTitle(el.name, el.price)
    };
};

const regCompany = [
    {
        name: 'THÀNH LẬP DOANH NGHIỆP',
        price: '1.100.000'
    },
    {
        name: 'THÀNH LẬP DOANH NGHIỆP',
        price: '2.700.000'
    },
    {
        name: 'THÀNH LẬP DOANH NGHIỆP',
        price: '3.800.000'
    },
];

const companyInfoData = [
    {
        name: 'GIẢI THỂ KINH DOANH',
        price: '1.500.000'
    },
    {
        name: 'THAY ĐỔI TÊN DOANH NGHIỆP',
        price: '850.000'
    },
    {
        name: 'THAY ĐỔI TRỤ SỞ CHÍNH',
        price: '850.000'
    },
    {
        name: 'THAY ĐỔI NGƯỜI ĐẠI DIỆN PHÁP LUẬT',
        price: '650.000'
    },
    {
        name: 'THÔNG BÁO TẠM NGỪNG KINH DOANH',
        price: '500.000'
    },
    {
        name: 'THAY ĐỔI VỐN ĐIỀU LỆ',
        price: '500.000'
    },
    {
        name: 'THAY ĐỔI CHỦ SỞ HỮU CÔNG TY',
        price: '500.000'
    },
    {
        name: 'BỔ SUNG THAY ĐỔI NGÀNH NGHỀ KINH DOANH',
        price: '500.000'
    },
    {
        name: 'THAY ĐỔI CỔ ĐÔNG SÁNG LẬP',
        price: '500.000'
    },
    {
        name: 'THAY ĐỔI NỘI DUNG ĐĂNG KÝ THUẾ',
        price: '500.000'
    },
    {
        name: 'THAY ĐỔI THÔNG TIN NGÂN HÀNG',
        price: '500.000'
    },
];


const PRICING_TITLE = {
    // pricing for register company
    reg_company: regCompany.map((el, index) => convertData(el, index + 11)),
    // pricing for change info company
    company_info: companyInfoData.map((el, index) => convertData(el, index)),
};
export default PRICING_TITLE;
