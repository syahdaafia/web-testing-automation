Feature: Purchase and Order History

    @regression
    Scenario Outline: Verify e2e purchase and order history
        Given user is on the login page
        When user login with email "<email>" and password "<password>"
        And user adds product "<productTitle>" to the cart
        And user clicks cart button
        Then the product should be displayed on the cart page
        And user clicks the checkout button
        And user fills payment information with CCV "<ccv>", country, and checks name "<name>"
        Then the order confirmation message should be displayed
        And user views the order with the order number from confirmation
        Then user should see order details successfully

        Examples:
            | email                | password    | productTitle  | ccv      | name    |
            | anshika@gmail.com    | Iamking@000 | IPHONE 13 PRO | 123 4567 | anshika |
            | syahdaafia@gmail.com | Cantik123   | ZARA COAT 3   | 321 7121 | syahda  |
    
    @validation
    Scenario: Delete product
        Given user is on the login page
        When user login with email "syahdaafia@gmail.com" and password "Cantik123"
        And user adds product "ADIDAS ORIGINAL" to the cart
        And user clicks cart button
        Then the product should be displayed on the cart page
        And user clicks delete product button
        Then user should see no products in cart message