function cmsSelector(arr, str) {
	return arr.filter(cms => cms.indexOf(str) > -1).sort()
}

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er") // ["Blogger"]
cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "") // ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"]
cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ") // []
