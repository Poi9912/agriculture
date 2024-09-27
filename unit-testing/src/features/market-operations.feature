Feature: market-operations Endpoint
    
    Scenario Outline: get all market-operations
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'market-operations' | '/market-operations' | 200 |
