Feature: sensors Endpoint
    
    Scenario Outline: get all sensors
        Given A get all <name>
        When I send GET request to <path>
        Then I get response code <status>

        Examples:
            | name | path | status |
            | 'sensors' | '/sensors' | 200 |

    Scenario Outline: register a new sensor
        Given A new <request>
        When I send POST request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "8234590", "serial": "KNSPP-1200323", "location_code": "bog-gir-farm-L8", "type": "thermometer", "unit": "F" }' | '/sensors' | 200 |

    Scenario Outline: update sensor
        Given A modify <request>
        When I send PUT request to <path>
        Then I get response code <status>

        Examples:
            | request | path | status |
            | '{ "id": "8234590", "serial": "KNSPP-1200323", "location_code": "bog-gir-farm-L8", "type": "thermometer", "unit": "F" }' | '/sensors' | 200 |

    Scenario Outline: delete sensor
        Given A delete request by <id>
        When I send DELETE request to <path>
        Then I get response code <status>

        Examples:
            | id | path | status |
            | 1265 | '/sensors' | 204 |