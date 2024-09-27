Feature: markets Endpoint
    
    Scenario Outline: get all markets
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'markets' | '/markets' | 200 |

    Scenario Outline: register a new market
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"code": "cam-001", "location_code": "bog/cll20a-kr32" }' | '/markets' | 200 |

    Scenario Outline: update market
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "90872335", "code": "cam-001", "location_code": "bog/cll20a-kr32" }' | '/markets' | 200 |

    Scenario Outline: delete market
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/markets' | 204 |