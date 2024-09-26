Feature: crop-locations Endpoint
    
    Scenario Outline: get all crop-locations
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'crop-locations' | '/crop-locations' | 200 |

    Scenario Outline: register a new crop-locations
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>
        
        Examples:
            | request | path | status |
            | '{"location_code":"arg-ros62","crop_name":"tomato","status":"harvest"}' | '/crop-locations' | 200 |

    Scenario Outline: update crop-locations
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"id":"8391","location_code":"arg-ros62","crop_name":"tomato","status":"harvest"}' | '/crop-locations' | 200 |

    Scenario Outline: delete crop-locations
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/crop-locations' | 204 |