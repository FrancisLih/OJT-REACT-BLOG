<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
if (array_key_exists("postid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$post->post_title = checkIndex($data, "post_title");
$post->post_photo = checkIndex($data, "post_photo");
$post->post_author = checkIndex($data, "post_author");
$post->post_category = checkIndex($data, "post_category");
$post->post_article = checkIndex($data, "post_article");
$post->post_publish_date = date("Y-m-d H:i:s");
$post->post_is_active = 1;
$post->post_created = date("Y-m-d H:i:s");
$post->post_datetime = date("Y-m-d H:i:s");

// isNameExist($post, $post->post_name);

$query = checkCreate($post);
returnSuccess($post, "post", $query);