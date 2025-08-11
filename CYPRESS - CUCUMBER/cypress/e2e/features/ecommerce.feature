Feature: End-to-End Ecommerce Validation

    Scenario Outline: Successful product purchase and checkout
        Given User is on the landing page
        When User logs in with "<username>" and "<password>"
        And User adds "<productName1>" and "<productName2>" to the cart
        And User checks out the items
        Then Success message should appear on the screen

        Examples:
            | username           | password | productName1 | productName2 |
            | rahulshettyacademy | learning | Nokia Edge   | iphone X     |
