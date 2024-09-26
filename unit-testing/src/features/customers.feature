Feature: customers Endpoint
    
    Scenario Outline: get all customers
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'customers' | '/customers' | 200 |

    Scenario Outline: register a new customer
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"full_name":"DDDEEEFFF","gender":"M","phone":"6541230009","email":"customerUP5@test.com","address":"ascb456scs4470","clossest_market_code":"cam-001"}' | '/customers' | 200 |

    Scenario Outline: update customer
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"id":"223459617","full_name":"DDDEEEFFF","gender":"M","phone":"6541230009","email":"customerUP5@test.com","address":"ascb456scs4470","clossest_market_code":"cam-001"}' | '/customers' | 200 |

    Scenario Outline: delete customers
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/customers' | 204 |