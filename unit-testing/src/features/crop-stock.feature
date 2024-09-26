Feature: crop-stock Endpoint
    
    Scenario Outline: get all crop-stock
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'crop-stock' | '/crop-stock' | 200 |

    Scenario Outline: register a new crop
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>
        
        Examples:
            | request | path | status |
            | '{"crop_name":"blackbeans","farm_location_code":"col-antq420","quantity":"200","unit":"kg","farm_value_per_unit":"4.0"}' | '/crop-stock' | 200 |

    Scenario Outline: update crop
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{"id":"13254","crop_name":"blackbeans","farm_location_code":"col-antq420","quantity":"200","unit":"kg","farm_value_per_unit":"4.0"}' | '/crop-stock' | 200 |

    Scenario Outline: delete crop-stock
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/crop-stock' | 204 |