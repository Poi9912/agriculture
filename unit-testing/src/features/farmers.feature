Feature: farmers Endpoint
    
    Scenario Outline: get all farmers
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'farmers' | '/farmers' | 200 |

    Scenario Outline: register a new farmer
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"full_name":"AAA BBB CCC","gender":"M","phone":"1236541230","email":"farmer1@test.com","address":"kr8cl1255sur","farm_location_code":"col-chia00154","clossets_market_code":"cam-0001"}' | '/farmers' | 200 |

    Scenario Outline: update farmer
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"id":"900012329440","full_name":"AAA BBB CCC","gender":"M","phone":"1236541230","email":"farmer1@test.com","address":"kr8cl1255sur","farm_location_code":"col-chia00154","clossets_market_code":"cam-0001"}' | '/farmers' | 200 |

    Scenario Outline: delete farmer
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/farmers' | 204 |