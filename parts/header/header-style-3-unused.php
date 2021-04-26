<!--
Header style 3
-->

<?php
$header_bg_img_class = '';
if ( !td_util::get_option('tds_header_background_image') == '' ) {
    $header_bg_img_class = 'td-header-background-image';
}
?>

<div class="td-header-wrap td-header-style-3 <?php echo $header_bg_img_class ?>">
    <?php if(!td_util::get_option('tds_header_background_image') == '') { ?>
        <div class="td-header-bg td-container-wrap <?php echo td_util::get_option('td_full_header_background'); ?>"></div>
    <?php } ?>

    <div class="menu-customize">
        <div class="menu-customize__container">
            <ul class="menu-wrapper__pc td-container">
                <li><a href="#"><span>Về chúng tôi</span></a></li>
                <li><a href="#"><span>Văn bản pháp luật</span></a></li>
                <li><a href="#"><span>Câu hỏi thường gặp</span></a></li>
                <li><a href="#"><span>Khách hàng của FADI</span></a></li>
                <li><a href="#"><span>Liên hệ</span></a></li>
                <li class="toggle-list-city"><a href="#">Thành lập 63 tỉnh thành <i class="arrow-down"></i></a> </li>
            </ul>
            <div class="menu-wrapper__mobile td-container">
              <select name="" id="select-city" onchange="(this.options[this.selectedIndex].value?  window.open(this.options[this.selectedIndex].value,'_blank'):'')">
                <option value="" disabled hidden selected>Thành lập công ty 63 tỉnh</option>
                <optgroup label="Miền Bắc">
                  <option value="https://khoitaodoanhnghiep.com/tag//lao-cai/">Lào cai</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/yen-bai/">Yên Bái</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/dien-bien/">Điện Biên</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/hoa-binh/">Hòa Bình</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/lai-chau/">Lai Châu</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/son-la/">Sơn La</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ha-giang/">Hà Giang</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/cao-bang/">Cao Bằng</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/bac-kan/">Bắc Kạn</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/lang-son/">Lạng Sơn</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/tuyen-quang/">Tuyên Quang</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/thai-nguyen/">Thái Nguyên</option>
                
                  <option value="https://khoitaodoanhnghiep.com/tag/phu-tho/">Phú Thọ</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/bac-giang/">Bắc Giang</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/quang-ninh/">Quảng Ninh</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/bac-ninh/">Bắc Ninh</option>
                
                  <option value="https://khoitaodoanhnghiep.com/tag/ha-nam/">Hà Nam</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ha-noi/">Hà Nội</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/hai-duong/">Hải Dương</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/hai-phong/">Hải Phòng</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/vinh-phuc/">Vĩnh Phúc</option>
                
                  <option value="https://khoitaodoanhnghiep.com/tag/hung-yen/">Hưng Yên</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/nam-dinh/">Nam Định</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/Ninh-ninh/">Ninh Bình</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/thanh-hoa/">Thanh Hóa</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/thai-binh/">Thái Bình</option>

                </optgroup>
                <optgroup label="Miền Trung">

                  <option value="https://khoitaodoanhnghiep.com/tag/nghe-an/">Nghệ An</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ha-tinh/">Hà Tĩnh</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ninh-thuan/">Ninh Thuận</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/quang-binh/">Quảng Bình</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/thua-thien-hue/">Thừa Thiên Huế</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/da-nang/">Đà Năng</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/binh-dinh/">Bình Định</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/phu-yen/">Phú Yên</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/khanh-hoa/">Khánh Hòa</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/kon-tum/">Kon Tum</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/gia-lai/">Gia Lai</option>
                  <option value="https://khoitaodoanhnghiep.com/tagbinh-thuan//">Bình Thuận</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/dak-lak/">Đắk Lắk</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/lam-dong/">Lâm Đồng</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/dak-nong/">Đắk Nông</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/quang-nam/">Quảng Nam</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/quang-tri/">Quảng Trị</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/quang-ngai/">Quảng Ngãi</option>

                </optgroup>
                <optgroup label="Miền Nam">

                  <option value="https://khoitaodoanhnghiep.com/tag/binh-phuoc/">Bình Phước</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/binh-duong/">Bình Dương</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/dong-nai/">Đồng Nai</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/tay-ninh/">Tây Ninh</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/br-vt/">Bà Rịa - Vũng Tàu</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ho-chi-minh/">TP. Hồ Chí Minh</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/long-an/">Long An</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/dong-thap/">Đồng Tháp</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/can-tho/">TP. Cần Thơ</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/tien-giang/">Tiền Giang</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/an-giang/">An Giang</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/ben-tre/">Bến Tre</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/vinh-long/">Vĩnh Long</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/tra-vinh/">Trà Vinh</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/hau-giang/">Hậu Giang</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/kien-giang/">Kiên Giang</option>

                  <option value="https://khoitaodoanhnghiep.com/tag/soc-trang/">Sóc Trăng</option>
                  <option value="https://khoitaodoanhnghiep.com/tag/bac-lieu/">Bạc Liêu</option>

                </optgroup>
      
              </select>
            </div>
        </div>
        <div class="menu-customize__tabs td-container">
            <ul id="tabs-nav">
              <li><a href="#north-side"><span>Miền Bắc</span></a></li>
              <li><a href="#middle-side">Miền Trung</a></li>
              <li><a href="#south-side">Miền Nam</a></li>
            </ul> <!-- END tabs-nav -->
            <div id="tabs-content">
              <div id="north-side" class="tab-content">
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag//lao-cai/" target="_blank">Lào cai</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/yen-bai/" target="_blank">Yên Bái</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/dien-bien/" target="_blank">Điện Biên</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/hoa-binh/" target="_blank">Hòa Bình</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/lai-chau/" target="_blank">Lai Châu</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/son-la/" target="_blank">Sơn La</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ha-giang/" target="_blank">Hà Giang</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/cao-bang/" target="_blank">Cao Bằng</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/bac-kan/" target="_blank">Bắc Kạn</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/lang-son/" target="_blank">Lạng Sơn</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/tuyen-quang/" target="_blank">Tuyên Quang</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/thai-nguyen/" target="_blank">Thái Nguyên</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/phu-tho/" target="_blank">Phú Thọ</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/bac-giang/" target="_blank">Bắc Giang</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/quang-ninh/" target="_blank">Quảng Ninh</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/bac-ninh/" target="_blank">Bắc Ninh</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/ha-nam/" target="_blank">Hà Nam</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ha-noi/" target="_blank">Hà Nội</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/hai-duong/" target="_blank">Hải Dương</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/hai-phong/" target="_blank">Hải Phòng</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/vinh-phuc/" target="_blank">Vĩnh Phúc</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/hung-yen/" target="_blank">Hưng Yên</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/nam-dinh/" target="_blank">Nam Định</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/Ninh-ninh/" target="_blank">Ninh Bình</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/thanh-hoa/" target="_blank">Thanh Hóa</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/thai-binh/" target="_blank">Thái Bình</a>
                </div>
              </div>
              <div id="middle-side" class="tab-content">
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/nghe-an/" target="_blank">Nghệ An</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ha-tinh/" target="_blank">Hà Tĩnh</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ninh-thuan/" target="_blank">Ninh Thuận</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/quang-binh/" target="_blank">Quảng Bình</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/thua-thien-hue/" target="_blank">Thừa Thiên Huế</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/da-nang/" target="_blank">Đà Năng</a>
                  
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/binh-dinh/" target="_blank">Bình Định</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/phu-yen/" target="_blank">Phú Yên</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/khanh-hoa/" target="_blank">Khánh Hòa</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/kon-tum/" target="_blank">Kon Tum</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/gia-lai/" target="_blank">Gia Lai</a>
                  <a href="https://khoitaodoanhnghiep.com/tagbinh-thuan//" target="_blank">Bình Thuận</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/dak-lak/" target="_blank">Đắk Lắk</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/lam-dong/" target="_blank">Lâm Đồng</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/dak-nong/" target="_blank">Đắk Nông</a>
                  
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/quang-nam/" target="_blank">Quảng Nam</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/quang-tri/" target="_blank">Quảng Trị</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/quang-ngai/" target="_blank">Quảng Ngãi</a>
                </div>
              </div>
              <div id="south-side" class="tab-content">
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/binh-phuoc/" target="_blank">Bình Phước</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/binh-duong/" target="_blank">Bình Dương</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/dong-nai/" target="_blank">Đồng Nai</a>

                  <a href="https://khoitaodoanhnghiep.com/tag/tay-ninh/" target="_blank">Tây Ninh</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/br-vt/" target="_blank">Bà Rịa - Vũng Tàu</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ho-chi-minh/" target="_blank">TP. Hồ Chí Minh</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/long-an/" target="_blank">Long An</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/dong-thap/" target="_blank">Đồng Tháp</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/can-tho/" target="_blank">TP. Cần Thơ</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/tien-giang/" target="_blank">Tiền Giang</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/an-giang/" target="_blank">An Giang</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ben-tre/" target="_blank">Bến Tre</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/vinh-long/" target="_blank">Vĩnh Long</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/tra-vinh/" target="_blank">Trà Vinh</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/hau-giang/" target="_blank">Hậu Giang</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/kien-giang/" target="_blank">Kiên Giang</a>
                </div>
                <div>
                  <a href="https://khoitaodoanhnghiep.com/tag/soc-trang/" target="_blank">Sóc Trăng</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/bac-lieu/" target="_blank">Bạc Liêu</a>
                  <a href="https://khoitaodoanhnghiep.com/tag/ca-mau/" target="_blank">Cà Mau</a>
                </div>
              </div>
            </div> <!-- END tabs-content -->
        </div> <!-- END tabs -->
    </div>

    <div class="td-banner-wrap-full td-container-wrap <?php echo td_util::get_option('td_full_header'); ?>">
        <div class="td-container td-header-row td-header-header">
            <div class="td-header-sp-logo">
                <?php require_once('logo-h1.php');?>
            </div>
            <?php if (td_util::is_ad_spot_enabled('header')) { ?>
                <div class="td-header-sp-recs">
                    <?php require_once('ads.php'); ?>
                </div>
            <?php } ?>
        </div>
    </div>

    <div class="td-header-menu-wrap-full td-container-wrap <?php echo td_util::get_option('td_full_menu'); ?>">
        <?php
            $menuSearchClass = '';
            if(!td_util::get_option('tds_search_placement') == '')
                $menuSearchClass = 'td-header-menu-no-search';
        ?>

        <div class="td-header-menu-wrap <?php echo $menuSearchClass ?>">
            <div class="td-container td-header-row td-header-main-menu black-menu">
                <?php require_once('header-menu.php');?>
            </div>
        </div>
    </div>

</div>