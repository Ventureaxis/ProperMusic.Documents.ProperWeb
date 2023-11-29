---
sidebar_position: 0
---

# Product Editor Overview
## Create and Edit modes
The Product Editor is opened in either Create or Edit mode depending on whether you are creating a new Product or editing an existing one.

### Create Mode
In Create mode, the user will be greeted with this screen:

![Product Editor Create](../../../static/img/pages/products/editor/pw_product_editor_create.png)

### Edit Mode
In Edit mode, the user will be greeted with this screen:

![Product Editor Edit](../../../static/img/pages/products/editor/pw_product_editor_edit.png)

When in edit mode, depending on the Product state, the header will appear with:

- Just the Catalogue Number title

![Product Editor Header Just Title](../../../static/img/pages/products/editor/pw_product_editor_header_just_title.png)

- The Catalogue Number title and the "DRAFT" Bubble (When a Product is Draft but not uploaded)

![Product Editor Header Draft Bubble](../../../static/img/pages/products/editor/pw_product_editor_header_draft_bubble.png)

- The Catalogue Number title with the "UPLOADED - CANNOT EDIT" (When a Product has been uploaded to basil)

![Product Editor Header Uploaded Bubble](../../../static/img/pages/products/editor/pw_product_editor_header_uploaded_bubble.png)

If an Product has been uploaded the Edit Form will be disabled and look like this:

![Product Editor Edit Uploaded](../../../static/img/pages/products/editor/pw_product_editor_uploaded.png)

## Form Steps
The Product Editor in ProperWeb is broken down into 6 steps each with their own validation, the steps are:
- Label Information
- Product Information
- Product Details
- Artwork, Audio & Video
- Extra Information
- Track Listing

## Comments
Administrators and non administrator users can leave comments on each indiviudal product as a way of communicating issues with the product form before it can be approved.
This is done by adding your comments to the relevant text area and clicking the "Save Comments" button.

![Product Editor Comments](../../../static/img/pages/products/editor/pw_product_editor_comments.png)

### Auto Validation Results
Each time you save a Product, ProperWeb will perform a validation pass of the Product on the server, if there any warning messages that come from this process, they will be added to the Admin comments for review.

![Product Editor Comments Validation](../../../static/img/pages/products/editor/pw_product_editor_comments_validation.png)