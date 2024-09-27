Feature: locations Endpoint
    
    Scenario Outline: get all locations
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'locations' | '/locations' | 200 |

    Scenario Outline: register a new location
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"code": "ch-san70", "name": "Chile/Santiago reg 70" }' | '/locations' | 200 |

    Scenario Outline: update location
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "934", "code": "ch-san70", "name": "Chile/Santiago reg 70" }' | '/locations' | 200 |

    Scenario Outline: delete location
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/locations' | 204 |