<?php
/**
 * single Post template 5
 **/

if (have_posts()) {
    the_post();

    $td_mod_single = new td_module_single($post);
    ?>

    <article id="post-<?php echo $td_mod_single->post->ID;?>" class="<?php echo join(' ', get_post_class());?>" <?php echo $td_mod_single->get_item_scope();?>>
        <div class="td-post-header">

            <?php echo $td_mod_single->get_category(); ?>

            <header class="td-post-title">
                <?php echo $td_mod_single->get_title();?>


                <?php if (!empty($td_mod_single->td_post_theme_settings['td_subtitle'])) { ?>
                    <p class="td-post-sub-title"><?php echo $td_mod_single->td_post_theme_settings['td_subtitle'];?></p>
                <?php } ?>


                <div class="td-module-meta-info">
                    <?php echo $td_mod_single->get_author();?>
                    <?php echo $td_mod_single->get_date(false, false);?>
                    <?php echo $td_mod_single->get_comments();?>
                    <?php echo $td_mod_single->get_views();?>
                </div>

            </header>

        </div>

        <!-- CUSTOM SHARE SOCIALS -->
        <div id="share-socials-container">
            <div class="share-socials share-facebook">
                <span><i class="icon-facebook"></i></span><span class="text">Chia sẻ</span>
            </div>
            <div class="share-socials share-zalo zalo-share-button" data-href="" data-oaid="579745863508352884" data-layout="1" data-color="blue" data-customize="true">
                <span class="zalo">Zalo</span><span class="text">Chia sẻ</span>
            </div>
            <div class="share-socials share-more">
                <span> <i class="more-share"></i> </span><span>Nhiều hơn</span>
            </div>
        </div>
        <!-- END CUSTOM SHARE SOCIALS -->

        <?php echo $td_mod_single->get_social_sharing_top();?>


        <div class="td-post-content tagdiv-type">
            <?php echo $td_mod_single->get_content();?>
        </div>


        <footer>
            <?php echo $td_mod_single->get_post_pagination();?>
            <?php echo $td_mod_single->get_review();?>

            <div class="td-post-source-tags">
                <?php echo $td_mod_single->get_source_and_via();?>
                <?php echo $td_mod_single->get_the_tags();?>
            </div>

            <?php echo $td_mod_single->get_social_sharing_bottom();?>
            <?php echo $td_mod_single->get_next_prev_posts();?>
            <?php echo $td_mod_single->get_author_box();?>
            <?php echo $td_mod_single->get_item_scope_meta();?>
        </footer>

    </article> <!-- /.post -->

    <?php echo $td_mod_single->related_posts();?>

<?php
} else {
    //no posts
    echo td_page_generator::no_posts();
}