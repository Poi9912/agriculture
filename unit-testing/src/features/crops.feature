Feature: Crops Endpoint
    
    Scenario Outline: get all crops
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'crops' | '/crops' | 200 |


    Scenario Outline: register a new crop
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>
        

        Examples:
            | request | path | status |
            | '{"name":"cucumber"}' | '/crops' | 200 |

    Scenario Outline: update crop
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"id":"25","name":"cucumber"}' | '/crops' | 200 |

    Scenario Outline: delete crop
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/crops' | 204 |