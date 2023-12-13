---
sidebar_position: 2
---

# Details
Opening a bulk upload will take you to this bulk upload details page where you can see the products listed within it. Here you can search, edit and upload products.

From the details page you can:
- Search for exisiting products within the selected bulk upload.
- View/Edit a Product in the editor.
- Multi-select Products from the table to:
  - Upload selected that have been approved to basil
  - Delete selected
  - Approve eligible selected

![Product Bulk Upload Details](../../../static/img/pages/products/bulk-uploads/pw_products_bulk_upload_details.png)

## Product Search
![Product Search](../../../static/img/pages/products/pw_products_product_search.png)

On the Product dashboard you can search by fields:
- Catalogue Number (Cat Num)
- Barcode
- Title 
- Artist
- Format

You can also filter by [Product Statuses](#product-statuses) and whether or not a Product has completed or not via the "Show Completed Products" / "Hide Completed Products" button. The reset button will clear the values in the text search fields.

The current value of your text search fields will be saved to your browser for when you log back in.

## Product Statuses {#product-statuses}
There are 8 Product statuses within ProperWeb which are:

### Newly Created
A Product will have this status when it has been created, doesn't pass validation and has been marked as draft.

![Product Status Newly Created](../../../static/img/pages/products/statuses/pw_product_status_newly_created.png)

### Ready for Review
A Product will have this status when it is not marked as draft, hasn't yet been approved by an Administrator and has not yet been uploaded to Basil.

![Product Status Ready for Review](../../../static/img/pages/products/statuses/pw_product_status_ready_for_review.png)

### Reviewed with Comments
A Product will have this status when comments have been added by an Administrator user.

![Product Status Reviewed with Comments](../../../static/img/pages/products/statuses/pw_product_status_reviewed_with_comments.png)

### Approved for Upload
A Product will have this status when it has been approved for upload to basil.

![Product Status Approved for Upload](../../../static/img/pages/products/statuses/pw_product_status_approved_for_upload.png)

### Changes to Review
A Product will have this status when it has been uploaded to Basil and changes have been made that need to be reviewed before uploading those changes to Basil.

![Product Status Changes to Review](../../../static/img/pages/products/statuses/pw_product_status_changes_to_review.png)

### Uploaded with Warnings
A Product will have this status when it has been uploaded to Basil but the ProperAPI service has reported some non-urgent warnings with the Product during the upload.

![Product Status Uploaded with Warnings](../../../static/img/pages/products/statuses/pw_product_status_uploaded_with_warnings.png)

### Failed to Upload
A Product will have this status when it was attempted to be uploaded to Basil but didn't pass the ProperAPI service validation.

![Product Status Failed to Upload](../../../static/img/pages/products/statuses/pw_product_status_failed_to_upload.png)

### Completed
A Product will have this status when it has been successfully uploaded to Basil with no issues.

![Product Status Completed](../../../static/img/pages/products/statuses/pw_product_status_completed.png)

## Context Menu Actions

![Product Bulk Upload Details Context Menu](../../../static/img/pages/products/bulk-uploads/pw_products_bulk_upload_details_actions.png)

- Edit Product - opens the product in the editor
- Copy Product - creates a copy of the product and opens it in the editor
- Send to Basil - uploads the product to Basil, only available 
- Delete Product - deletes the product from ProperWeb
- Keep Product - detaches the product from the Bulk Upload so it isn't removed from the system if the bulk upload is deleted