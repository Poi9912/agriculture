Feature: market-stock Endpoint
    
    Scenario Outline: get all market-stock
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'market-stock' | '/market-stock' | 200 |

    Scenario Outline: register a new market-stock
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "321654", "product_name": "carrot", "quantity": "424", "unit": "kg", "market_code": "cam-001", "farmer_id": "11354687", "farm_value_per_unit": "3.6", "selling_value_per_unit": "3.9" }' | '/market-stock' | 204 |

    Scenario Outline: update market-stock
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "321654", "product_name": "carrot", "quantity": "424", "unit": "kg", "market_code": "cam-001", "farmer_id": "11354687", "farm_value_per_unit": "3.6", "selling_value_per_unit": "3.9" }' | '/market-stock' | 204 |