---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2 - Product Information
In this part of the form you'll enter the main information for the Product.

![Product Editor Product Information](../../../static/img/pages/products/editor/pw_product_editor_product_information.png)

:::info

Some **fields** have different validation depending on the Supplier class selected when creating a Product, see below.

:::

## Required Fields

<Tabs groupId="supplier-class">
  <TabItem value="standard" label="Standard">
    <ul>
        <li><strong>Catalogue Number</strong> - a unique identifier
			<ul>
				<li>Maximum of 31 characters</li>
				<li>Only uppercase characters, numbers, dashes(-) and underscores (_) are allowed</li>
				<li>Needs to be verified by Basil</li>
			</ul>
		</li>
        <li><strong>Barcode</strong> - a unique identifier
			<ul>
				<li>Needs to be in the right format</li>
				<li>13 Characters for EAN, 12 Characters for UPC</li>
				<li>Needs to be verified by Basil</li>
			</ul>
		</li>
        <li><strong>Full Artist</strong> - full Artist name
			<ul>
				<li>Max length: 300 characters</li>
				<li>Auto fills Artist field with uppercase version when input is changed</li>
			</ul>
		</li>
        <li><strong>Full Title</strong> - full Title name
			<ul>
				<li>Max length: 300 characters</li>
				<li>Auto fills Title field with uppercase version when input is changed</li>
			</ul>
		</li>
		<li><strong>Artist</strong> - the Artist short text
            <ul>
                <li>Max length: 30 characters</li>
                <li>Input is automatically converted into uppercase</li>
                <li>Autofilled when typing in Full Artist field</li>
            </ul>
        </li>
		<li><strong>Title</strong> - the Title short text
			<ul>
                <li>Max length: 30 characters</li>
                <li>Input is automatically converted into uppercase</li>
                <li>Autofilled when typing in Full Title field</li>
            </ul>
		</li>
        <li><strong>Release Date</strong> - select from the date picker an Release date</li>
        <li><strong>Primary Genre</strong> - select from the dropdown or search from a list of primary genre codes</li>
        <li><strong>Format</strong> - select from the dropdown or search from a list of format codes, changing to a DVD format will display the DVD Age Rating and DVD Region fields</li>
        <li><strong>Form</strong> - select from the dropdown or search from a list of form codes</li>
        <li><strong>Package</strong> - select from the dropdown or search from a list of package codes</li>
    </ul>
  </TabItem>
  <TabItem value="third-party" label="Third Party">
    <ul>
        <li><strong>Catalogue Number</strong> - a unique identifier
			<ul>
				<li>Maximum of 31 characters</li>
				<li>Only uppercase characters, numbers, dashes(-) and underscores (_) are allowed</li>
				<li>Needs to be verified by Basil</li>
			</ul>
		</li>
        <li><strong>Barcode</strong> - a unique identifier
			<ul>
				<li>Needs to be in the right format</li>
				<li>13 Characters for EAN, 12 Characters for UPC</li>
				<li>Needs to be verified by Basil</li>
			</ul>
		</li>
        <li><strong>Full Artist</strong> - full Artist name
			<ul>
				<li>Max length: 300 characters</li>
				<li>Auto fills Artist field with uppercase version when input is changed</li>
			</ul>
		</li>
        <li><strong>Full Title</strong> - full Title name
			<ul>
				<li>Max length: 300 characters</li>
				<li>Auto fills Title field with uppercase version when input is changed</li>
			</ul>
		</li>
		<li><strong>Artist</strong> - the Artist short text
            <ul>
                <li>Max length: 30 characters</li>
                <li>Input is automatically converted into uppercase</li>
                <li>Autofilled when typing in Full Artist field</li>
            </ul>
        </li>
		<li><strong>Title</strong> - the Title short text
			<ul>
                <li>Max length: 30 characters</li>
                <li>Input is automatically converted into uppercase</li>
                <li>Autofilled when typing in Full Title field</li>
            </ul>
		</li>
        <li><strong>Release Date</strong> - select from the date picker an Release date</li>
        <li>Format - select from the dropdown or search from a list of format codes, changing to a DVD format will display the DVD Age Rating and DVD Region fields</li>
        <li>Form - select from the dropdown or search from a list of form codes</li>
        <li>Package - select from the dropdown or search from a list of package codes</li>
    </ul>
  </TabItem>
</Tabs>

## Optional Fields

<Tabs groupId="supplier-class">
  <TabItem value="standard" label="Standard">
    <ul>
        <li><strong>Embargo Date</strong> - select from the date picker an Embargo date</li>
        <li><strong>Secondary Genre</strong> - select from the dropdown or search from a list of secondary genre codes</li>
        <li><strong>DVD Age Rating (DVD Formats Only)</strong> - select from the dropdown or search from a list of DVD Age Rating codes</li>
        <li><strong>DVD Region (DVD Formats Only)</strong> - select from the dropdown or search from a list of DVD Region codes</li>
    </ul>
  </TabItem>
  <TabItem value="third-party" label="Third Party">
    <ul>
        <li><strong>Artist</strong> - the Artist short text
            <ul>
                <li>Max length: 30 characters</li>
                <li>Input is automatically converted into uppercase</li>
                <li>Autofilled when typing in Full Artist field</li>
            </ul>
        </li>
        <li><strong>Embargo Date</strong> - select from the date picker an Embargo date</li>
        <li><strong>Primary Genre</strong> - select from the dropdown or search from a list of primary genre codes</li>
        <li><strong>Secondary Genre</strong> - select from the dropdown or search from a list of secondary genre codes</li>
        <li><strong>DVD Age Rating (DVD Formats Only)</strong> - select from the dropdown or search from a list of DVD Age Rating codes</li>
        <li><strong>DVD Region (DVD Formats Only)</strong> - select from the dropdown or search from a list of DVD Region codes</li>
    </ul>
  </TabItem>
</Tabs>

## Basil Validation Widgets
The catalogue number and barcode fields have widgets next to them which allow the checking of inputs before the product is saved to ProperWeb. This allows you to check whether the Catalogue Number or Barcode is valid and is available for use within the Basil system before attempting to upload it. The widgets will perform a check each time the input changes provided local validation passes first (e.g correct length and format).

![Product Editor Basil Validate Field](../../../static/img/pages/products/editor/pw_product_editor_basil_validate_field.png)
