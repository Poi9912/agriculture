Feature: invoices Endpoint
    
    Scenario Outline: get all invoices
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'invoices' | '/invoices' | 200 |

    Scenario Outline: register a new invoice
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"customer_id":"23450293885","market_code":"cam-001","details":[{"product_name":"carrot","quantity":"2","unit":"kg","total_value":"2.1"},{"product_name":"rice","quantity":"4","unit":"kg","total_value":"3.4"}]}' | '/invoices' | 200 |